import genUid from './helper.js'

/**
 * 
 * @param {string} id 元素id
 * @param {string} location 元素相对位置[prev, next]
 */
export function resizeByDrag (id, location = 'next', dElem) {
  let elem = document.querySelector('#'+id)
  // console.log('initresize')
  // console.log(elem)
  if(!elem) return
  // let prevElem = elem.previousElementSibling
  let changeElem = dElem ? dElem : (location=='next' ? elem.nextElementSibling : elem.previousElementSibling) 
  
  const MAX_WIDTH = 500
  const MIN_WIDTH = 200
  elem.onmousedown = function (e) {
    // console.log('start')
    let startPosition = e.pageX
    // let pw = prevElem.offsetWidth
    let elemWidth = changeElem.offsetWidth
    document.onmousemove = function (e) {

        let move = e.pageX - startPosition
        // console.log(move)

        let finalW = elemWidth - (location=='next' ? move : -move)
        finalW = finalW > MAX_WIDTH ? MAX_WIDTH : (finalW < MIN_WIDTH ? MIN_WIDTH : finalW)
        console.log(finalW)
        changeElem.style.width = finalW + 'px'

        e.preventDefault()

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
 * @param {*} isKeep 是否保留目标元素对象
 * @param {*} onMoving 移动中的钩子
 * @param {*} onMoved 移动后(松开)的钩子
 */
export function moveByDrag (obj, zIndex='1000', isKeep = false, onMoving, onMoved) {
    let isDragging = false, disX, disY
    obj.onmousedown = function(e) {
        let ev = e || event, timerHandle = null
        let cloneEle = null
        function down() {
            if(isKeep) {
                cloneEle = obj.cloneNode(true)
                obj.parentElement.appendChild(cloneEle)
                cloneEle.style.display = 'none'

                // obj.style.backgroundColor = '#ccc'
            }

            obj.style.left = obj.offsetLeft + 'px'
            obj.style.top = obj.offsetTop + 'px'
            obj.style.position = "absolute"
            obj.style.zIndex = zIndex
            obj.style.width = obj.clientWidth + 'px'
            obj.style.minWidth = '120px'
            obj.style.height = obj.clientHeight + 'px'
            obj.style.border = '2px dashed #29B6F6'
            obj.style.cursor = 'move'

            disX = ev.clientX - obj.offsetLeft
            disY = ev.clientY - obj.offsetTop
            // console.log(obj.offsetParent)
            isDragging = true
        }

        if(isKeep) {
            down()
        }else{
            timerHandle = setTimeout(function(){
                down()
            }, 150)
        }

        document.onmousemove = function(e) {
            if(isDragging){
                let ev = e || event;
                let L = ev.clientX - disX
                let T = ev.clientY - disY

                obj.style.left = L + 'px'
                obj.style.top = T + 'px'
                if(isKeep) {
                    cloneEle.style.display = "inline"
                }
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
                // isDragging = false
            }else{
                clearTimeout(timerHandle)
            }
            if(isKeep && cloneEle) {
                // console.log(obj.parentElement, cloneEle)
                const pEle = obj.parentElement
                pEle.innerHTML = ''
                pEle.appendChild(obj)
                cloneEle = null
            }
            isDragging = false
        };
        // return false
    }
}
