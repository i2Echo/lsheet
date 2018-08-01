//生成唯一id
export function genUid(field ='uid') {
  let date = new Date().getTime()

  return field+'_'+date;
}

/**
 * 移动目标elem位置是否属于target
 * @param {*} elem 
 * @param {*} target 
 */
export function isBelong(elem, target) {
  let point = getCenterPoint(elem)
  console.log(point, target.offsetLeft, target.offsetTop)
  let base = {left: target.offsetParent.offsetLeft, top: target.offsetParent.offsetTop}
  if(base.left + target.offsetLeft <= point.x 
      && base.top + target.offsetTop <= point.y 
      && base.left + target.offsetLeft + target.clientWidth >= point.x 
      && base.top + target.offsetTop + target.clientHeight >= point.y){

    return true
  }
  console.log(base)
  return false
}

// 获取中心点坐标
function getCenterPoint(elem){
  let x = ~~(elem.clientWidth/2) + elem.offsetLeft + elem.offsetParent.offsetLeft;
  let y = ~~(elem.clientHeight/2) + elem.offsetTop + elem.offsetParent.offsetTop;

  return {x: x, y: y}
}