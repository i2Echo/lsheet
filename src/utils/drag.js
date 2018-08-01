import genUid from './helper.js'

export function resizeByDrag (id) {
  let elem = document.querySelector('#'+id)
  // console.log('initresize')
  // console.log(elem)
  if(!elem) return
  // let prevElem = elem.previousElementSibling
  let nextElem = elem.nextElementSibling
  
  const MAX_WIDTH = 500
  const MIN_WIDTH = 200
  elem.onmousedown = function (e) {
    // console.log('start')
    let startPosition = e.pageX
    // let pw = prevElem.offsetWidth
    let nw = nextElem.offsetWidth
    document.onmousemove = function (e) {

        let move = e.pageX - startPosition
        // console.log(move)

        let finalW = nw - move;
        finalW = finalW > MAX_WIDTH ? MAX_WIDTH : (finalW < MIN_WIDTH ? MIN_WIDTH : finalW)
        console.log(finalW)
        nextElem.style.width = finalW + 'px'

        e.preventDefault();

    }
    document.onmouseup = function (e) {
      document.onmousemove = null
    }
    return false
  }
}

/**
 * 
 * @param {*} obj 目标元素对象
 * @param {*} onMoving 移动中的钩子
 * @param {*} onMoved 移动后(松开)的钩子
 */
export function moveByDrag (obj, onMoving, onMoved) {
    let isDragging = false, disX, disY
    obj.onmousedown = function(e) {
        let ev = e || event

        let timerHandle = setTimeout(function(){
            obj.style.left = obj.offsetLeft + 'px'
            obj.style.top = obj.offsetTop + 'px'
            obj.style.position = "absolute"
            obj.style.zIndex = '1000'
            obj.style.width = obj.clientWidth + 'px'
            obj.style.height = obj.clientHeight + 'px'
            obj.style.border = '2px dashed #bcbcbc'
            obj.style.cursor = 'move'

            disX = ev.clientX - obj.offsetLeft
            disY = ev.clientY - obj.offsetTop

            isDragging = true
        }, 150)

        document.onmousemove = function(e) {
            if(isDragging){
                let ev = e || event;
                let L = ev.clientX - disX
                let T = ev.clientY - disY

                obj.style.left = L + 'px'
                obj.style.top = T + 'px'

                if(typeof onMoving === 'function'){
                onMoving()
                }
            }
            
        };
        document.onmouseup = function() {
            if(isDragging){
                if(typeof onMoved === 'function'){
                    onMoved()
                }
                obj.removeAttribute('style')
                document.onmousemove = null
                isDragging = false
            }else{
                clearTimeout(timerHandle)
            }
        };
        // return false
    }
}
