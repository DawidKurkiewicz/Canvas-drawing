const canvas = document.querySelector("#draw")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight -500
ctx.strokeStyle = document.querySelector("#base").value
ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth= 30
btn=document.querySelector("#hue")
let isDrawing = false;
let lastX = 0
let lastY = 0
var btn = document.querySelector("#reset")
// btn.addEventListener("click", resetDraw)
// function resetDraw(){
//     canvas
// }
function draw(e) {
    if (!isDrawing)return
    ctx.strokeStyle = document.querySelector("#base").value
    ctx.lineWidth= document.querySelector("#number").value

    ctx.beginPath();
    ctx.moveTo(lastX, lastY)
    if(e.targetTouches){
    ctx.lineTo(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
    } else {
        ctx.lineTo(e.offsetX, e.offsetY)

    }
    ctx.stroke();
    if(e.targetTouches){
    [lastX,lastY]= [e.targetTouches[0].clientX, e.targetTouches[0].clientY]
    }else {
        [lastX,lastY]= [e.offsetX, e.offsetY]

    }
}
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX,lastY]= [e.offsetX, e.offsetY]
    console.log(e.offsetX, e.offsetY)

})
canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    [lastX,lastY]= [e.targetTouches[0].clientX, e.targetTouches[0].clientY]
    console.log(e.targetTouches[0].clientX,e.targetTouches[0].clientY )

})
canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)
canvas.addEventListener("touchmove", draw)
canvas.addEventListener("touchend", ()=> isDrawing= false)