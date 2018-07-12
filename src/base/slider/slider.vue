<template>
	
		<div class="slider" ref='slider'>
			<div class="slider-group" ref='sliderGroup'>
				<slot>
				
				</slot>
			</div>
			<div class="dots">
				<span class="dot" v-for="(item,index) in dots" :class="{active:currentPageIndex==index}"></span>
			</div>
		</div>
	 
</template>
<script>
import BScroll from 'better-scroll'
import {addClass} from "common/js/dom.js"
	export default {
		name:'sliderCommon',
		props:{
			loop:{
				type:Boolean,
				default:true
			},
			autoPlay:{
				type:Boolean,
				default:true
				
			},
			interval:{
				type:Number,
				type:4000
			},
		},
		data(){
			return {
				dots:[],
				currentPageIndex:0/*当前轮播图索引*/
			}
		},
		mounted(){
			setTimeout(() => {
				this._setSiderWidth()
				this._initDots()
				this._initSlider()
				if(this.autoPlay){
					this._play()
				}
			},20)
			window.addEventListener('resize',()=>{
				if(!this.slider){
					return
				}
				this._setSiderWidth(true)
				this.slider.refresh()
			})
		},
		methods:{
			_setSiderWidth(isResize){
				this.children=this.$refs.sliderGroup.children/*获取要轮播的元素*/
				let width=0/*总宽度*/
				let sliderWidth=this.$refs.slider.clientWidth/*设备宽度*/
				for(let i=0 ;i<this.children.length;i++){
//					let child=this.children[i]/*获取每一个元素*/
					 
					addClass(this.children[i],'slider-item')/*给每一项元素添加class*/
					this.children[i].style.width=sliderWidth+'px'/*每一个轮播元素的宽度等于设备宽度*/
					width +=sliderWidth/*总宽度*/
				}
				if(this.loop&&!isResize){
					width += 2*sliderWidth
				}
				 
				this.$refs.sliderGroup.style.width=width+'px'
			},
			_initSlider(){
				this.slider_BScroll=new BScroll(this.$refs.slider,{
					scrollX:true,
					scrollY:false,
					momentum:false,
					snap:true,
					snapLoop:this.loop,
					snapThreshold:0.3,
					snapSpeed:400,
//					click:true
				})
				this.slider_BScroll.on('scrollEnd',()=>{
					let pageIndex=this.slider_BScroll.getCurrentPage.pageX
					if(this.loop){
						pageIndex-=1
					}
					this.currentPageIndex=pageIndex
					if(this.autoPlay){
						clearTimeout(this.timer)
						this._play()
					}
				})
			},
			_initDots(){
				this.dots=new Array(this.$refs.sliderGroup.children.length)
			},
			_play(){
				let pageIndex=this.currentPageIndex+1
				if(this.loop){
					pageIndex +=1
				}
				this.timer =setTimeout(()=>{
					this.slider_BScroll.goToPage(pageIndex,0,this.interval)
				},this.interval)
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
 
	.slider
		min-height:1px
		.slider-group
			position:relative
			overflow:hidden
			white-space:nowrap
			.slider-item
				float:left
			
				box-sizing:border-box
		        overflow:hidden
		        text-align:center
		        a
		        	display:block
					img
						width:100%
						/*display:block*/
	.dots
		position: absolute
		right: 0
		left: 0
		bottom: 12px
		text-align: center
		font-size: 0
		.dot
			display: inline-block
			margin: 0 4px
			width: 8px
			height: 8px
			border-radius: 50%
			background: $color-text-l
			&.active
				width: 20px
				border-radius: 5px
				background: $color-text-ll 
</style>