// alert("Hello")

const questionHead = document.querySelectorAll('.questionCardHeading')


questionHead.forEach((x)=>{
    x.addEventListener("click", (e)=>{
if(x.nextSibling.nextElementSibling.className==='questionShow'){
    x.nextSibling.nextElementSibling.className ="questionHide"

}else {
    x.nextSibling.nextElementSibling.className= "questionShow"
}
    })
})