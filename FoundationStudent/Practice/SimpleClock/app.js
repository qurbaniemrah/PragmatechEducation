let secondArrow=document.querySelector('.seconds')
let minuteArrow = document.querySelector('.minutes');



function clockFunc(){
    d=new Date();
    second=d.getSeconds()

    secondRotateAmount=second*6

    secondArrow.style.transform=`rotate(${secondRotateAmount}deg)`

    secondRotateAmount+=6

    d=new Date();
    second=d.getMinutes()

    minuteRotateAmount=minutes*30

    minuteArrow.style.transform=`rotate(${minuteRotateAmount}deg)`

    minuteRotateAmount+=30
}

setInterval(clockFunc,1000)











