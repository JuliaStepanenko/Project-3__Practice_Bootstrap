const numb = document.querySelector(".numb");
let counter = 5;
setInterval(()=>{
    if(counter == 75){
        clearInterval();
    }else{
        counter+=1;
        numb.textContent = counter + "%";
    }
}, 100);