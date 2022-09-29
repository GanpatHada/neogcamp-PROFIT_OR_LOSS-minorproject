// document.querySelector("#form").addEventListener("click",()=>{
//     console.log("Hello world")
// })
const initial_price=document.querySelector("#initial_price");
const quantity_of_stocks=document.querySelector("#quantity_of_stocks");
const current_price=document.querySelector("#current_price");
const getAnswer=document.querySelector("#submit");
const output=document.querySelector("#output");
const calculateResult=(ip,q,cp)=>{
    if(ip===0||q===0||cp===0)
    {   
         output.innerText="Please fill all fields";
         output.style.color="red";
         return 0;
    }
    if(ip<0||q<0||cp<0)
    {   
         output.innerText="fields can't be negative";
         output.style.color="red";
         return 0;
    }

    if(ip<cp)
        profit(((cp-ip)*q),ip);
    if(ip>cp)
        loss(((ip-cp)*q),ip);
    if(ip===cp)
        {
            output.innerText="No pain no gain , No gain no pain";
            output.style.color="#267dff";
        }

}
const profit=(p,ip)=>{
    output.innerText=`Hey,the profit is ${p} and profit percent is ${(p/ip*100).toFixed(2)} %`;
    output.style.color="green";
}
const loss=(l,ip)=>{
    output.innerText=`Hey,the loss is ${l} and loss percent is ${((l/ip*100).toFixed(2))} %`;
    output.style.color="red";
}
getAnswer.addEventListener("click",()=>calculateResult(Number(initial_price.value),Number(quantity_of_stocks.value),Number(current_price.value)));