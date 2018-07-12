/*
 * 进行dom操作的公用js 
 * */
export function addClass(el,className){/*添加class*/

	if(hasClass(el,className)){/*如果有这个class*/
		return
	}
	let newClass =el.className.split(' ')
	newClass.push(className)
	el.className=newClass.join(' ')
}
export function hasClass(el,className){/*判断是否有这个class*/
	let reg=new RegExp('(^|\\s)'+  className + '(\\s|$)');
	return reg.test(el.className)
}
