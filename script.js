const dot = document.getElementById("dots")
const none = document.getElementById("none")
const dot2 = document.getElementById("dots2")
const none2 = document.getElementById("none2")

dot.addEventListener("click", ()=>{
    none.style.display = "inline"
    dot.style.display = "none"
})
none.addEventListener("click", ()=>{
    none.style.display = "none"
    dot.style.display = "inline"
})
dot2.addEventListener("click", ()=>{
    none2.style.display = "inline"
    dot2.style.display = "none"
})
none2.addEventListener("click", ()=>{
    none2.style.display = "none"
    dot2.style.display = "inline"
})
