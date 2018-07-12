<template>
	<div class="recommend">
		<div class="recommend-content">
			<div v-if="recommends.length" class="slider-wrapper">
				<slider>
					<div v-for="item in recommends">
						<a :href="item.linkUrl">
							<img :src="item.picUrl"  />
						</a>
					</div>
				</slider>
			</div> 
			<div class="recommend-list">
				<h1 class="list-title">热门歌单推荐</h1>
			</div>
			 
		</div>
	</div>
</template>
<script>
import {getRecommend} from "api/recommend"
import {ERRO_OK} from "api/config"
import slider from 'base/slider/slider.vue'
	export default {
		name:"recommend",
		data(){
			return {
				recommends: [
            {
                "linkUrl": "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=4124273&g_f=shoujijiaodian",
                "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/300106.jpg",
                "id": 16504
            },
            {
                "linkUrl": "http://y.qq.com/w/album.html?albummid=002n00K51QVd8k",
                "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/300651.jpeg",
                "id": 16513
            },
            {
                "linkUrl": "https://y.qq.com/msa/218/0_5657.html",
                "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/300297.jpg",
                "id": 16507
            },
            {
                "linkUrl": "https://c.y.qq.com/node/m/client/music_headline/index.html?  _hidehd=1&_button=2&zid=863064",
                "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/299742.jpg",
                "id": 16470
            } 
        ],
			}
		},
		components:{slider},
		created(){//生命周期函数
//			this._getRecommend()
		},
		methods:{
			_getRecommend(){
				getRecommend().then((res)=>{
				console.log(res)
				})
			},
			
		},
	}
</script>
<style scoped="scoped" lang="stylus">
@import "~common/stylus/variable"
.recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>