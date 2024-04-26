let button=document.querySelectorAll("button");
let display=document.querySelector(".display");
let turn=1;
let count=0;
let x="",string;
let result=0;
let num1="",num2="",sign="";
console.log(button[0].classList.value);
/*const numcheck=()=>{
    console.log("equal");
    for(let i=0;i<display.innerText.length;i++){
        if(display.innerText[i]>=0&&display.innerText[i]<=9||display.innerText[i]=="."){
            //count++;
           // if(count==2)
           // break;
           if(count==0)
           num1+=display.innerText[i];
            else
            num2+=display.innerText[i];
            
        }
        else{
            sign=display.innerText[i];
            count++;
        }
    }
    console.log(parseFloat(num1),parseFloat(num2),sign)
    calculate(parseFloat(num1),parseFloat(num2),sign);
}
const calculate=(num1,num2,sign)=>{
    if(sign==="+")
    result=num1+num2;
    else if(sign==="-")
    result=num1-num2;
    else if(sign==="*")
    result=num1*num2;
    else if(sign==="/")
    result=num1/num2;
    console.log(result);

}*/
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
            if( x==="Math Error")
            x="";
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
            if(x===Infinity||isNaN(x))
            x="";
            x=display.innerText.substring(0, display.innerText.length-1);
        }
        else if(op.getAttribute("id")==="AC")
        {
            x="";
            console.log(x);
        }
        else if(op.getAttribute("class")==="equal"){
            //numcheck();
            x=eval(x);
            if(x===Infinity||isNaN(x))
            x="Math Error";
        }
        else if(op.getAttribute("id")!=="AC")
        if(x===Infinity||isNaN(x))
        display.innerText="";
        x+=op.innerText;
        display.innerText=x;
        //console.log(x);
        
    })

    

})
