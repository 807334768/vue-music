import jsonp from "common/js/jsonp.js"
import {commonParams,options} from "./config.js"
export function getRecommend(){
	const url="http://music.163.com/weapi/personalized/newsong"
	//花括号叫目标对象，后面的obj、obj1是源对象。对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的
	const data=Object.assign({},commonParams,{
			})
return jsonp(url,data,options)
}
