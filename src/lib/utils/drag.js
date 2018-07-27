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

export function moveByDrag(){

}
