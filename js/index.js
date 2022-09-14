function add()
{   
   let sum=0
   debugger
    for(const i of arguments)
    {   
        console.log(i)
        sum=parseInt(sum)+ parseInt(i) ;
    }
    return sum;   
}
function sub(num1,num2)
{
    return num1-num2;   
}
function mul(num1,num2)
{
    return num1*num2;   
}
function div(num1,num2)
{
    return num1/num2;   
}
// let number1=0;
// const btns= document.getElementsByClassName('btn')
// for(const btn of btns)
// {
//     btn.addEventListener('click',function(event)
//     {  
//         if((event.target).innerText!='+' && (event.target).innerText!='-' && (event.target).innerText!='*'&& (event.target).innerText!='/' && (event.target).innerText!='=')
//         {
//            // console.log(number1)
//         }       
//         const result =document.getElementById('result')
//             result.innerText+=event.target.innerText
//             number1=parseFloat(result.innerText)
//     })
// }

    function spliting(result)
    {
        return num=result.split(/[-+*/=]/)
    }
    function sambol(result)
    {
        return num=result.split(/[1234567890. ]/)
    }


    const btnContainer=document.getElementById('container-btn').addEventListener('click',function(event)
    {
        const result =document.getElementById('result')
        result.innerText+=event.target.innerText;
        let samble=[]
        let num=[]
        if(event.target.innerText=='C')
        {
            result.innerText=''
        }
        else if(event.target.innerText=='B')
        {
            result.innerText=Math.floor(parseInt(result.innerText)/10) 
        }
      const equ=  document.getElementById('equ').addEventListener('click',function()
        {
           let splitNum=spliting(result.innerText)
           let splitSambol=sambol(result.innerText)
                console.log(splitNum)
                console.log(splitSambol)
        
            let finalResult=[]
            for(let i of splitNum)
            {
                finalResult.push(parseFloat(i))
            }
            for(let j of splitSambol)
            {
                if(j=='*')
                {
                    finalResult[1]=finalResult[0]*finalResult[1];
                    finalResult.shift()
                }
                else if(j=='/')
                {
                    finalResult[1]=finalResult[0]/finalResult[1];
                   finalResult.shift()   
                }
                else if(j=='+')
                {
                    finalResult[1]=finalResult[0]+finalResult[1];
                    finalResult.shift()   
                }
                else if(j=='-')
                {
                    finalResult[1]=finalResult[0]/finalResult[1];
                    finalResult.shift()    
                }
            }
          
          result.innerText = finalResult+' '
        })
    })


  
  


