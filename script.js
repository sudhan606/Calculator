let button=document.querySelectorAll("button");
let display=document.querySelector(".display");
let turn=1;
let count=0;
let x="",string;
let num1,num2,sign;
console.log(button[0].classList.value);
const numcheck=()=>{
    console.log("equal");
    for(let i=0;i<display.innerText.length;i++){
        if(isNaN(display.innerText[i])){
            count++;
            if(count==2)
            break;
            sign=display.innerText[i];
        }
        else{
           count=0;
            
        }
        console.log(display.innerText[i]);
    }
}
button.forEach((op)=>{
    op.addEventListener("click",()=>{
        /*if(op.getAttribute("class")==="num"){
            console.log(op.innerText);
            x+=op.innerText;
            console.log(parseFloat(x));
        }
        if(op.getAttribute("class")==="sign"||op.getAttribute("class")===""){
            console.log("sign");
        }*/
        if(op.getAttribute("class")==="sign"&&op.getAttribute("id")!=="AC"&&op.getAttribute("id")!=="del"){
            if(op.getAttribute("id")==="plus")
            x+="+";
            if(op.getAttribute("id")==="min")
            x+="-";
            if(op.getAttribute("id")==="div")
            x+="/";
            if(op.getAttribute("id")==="mul")
            x+="*";
        }
        else if( op.getAttribute("id")==="del")
        {
            x=display.innerText.substring(0, display.innerText.length-1);
        }
        else if(op.getAttribute("id")==="AC")
        {
            display.innerText="";
            x="";
        }
        else if(op.getAttribute("class")==="equal"){
            numcheck();
        }
        else if(op.getAttribute("id")!=="AC")
        x+=op.innerText;
        display.innerText=x;
        console.log(x);

    })
    string=display.innerText;
    for(let i=0;i<display.innerText.length;i++){
        console.log(display.innerText[1]);
    }
    

})
