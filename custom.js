const para = document.querySelector(".text");
const para1 = document.querySelector(".text1");
const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, qui."

const text1 = "you cannot expand me";

if(text.length > 20){
    let hlw = text.slice(0,20);
    para.innerHTML = `${hlw}......`;
}else{
    para.innerHTML = text;
}

para.addEventListener("click",(a) => {
    a.preventDefault();
    para.innerHTML = text;
});


if(text1.length > 20){
    let hlw = text1.slice(0,20);
    para1.innerHTML = `${hlw}......`;
}else{
    para1.innerHTML = text1;
}

para1.addEventListener("click",(a) => {
    a.preventDefault();
    para1.innerHTML = text1;
});