const endDate = "25 September 2024 05:00 AM";

document.getElementById("endDate").innerHTML = endDate;

const inputs = document.querySelectorAll("input");

setInterval(()=>{
    function clock(){
        const end = new Date(endDate);
    
        const now = new Date();
    
        const deff = (end - now) / 1000;
        if(deff < 0)return;
    
        // Convert in days
    
        inputs[0].value = Math.floor(deff / 3600 / 24);
        inputs[1].value = Math.floor(deff / 3600) % 24;
        inputs[2].value = Math.floor(deff / 60 )% 60;
        inputs[3].value = Math.floor(deff) % 60;
    }
    clock();
},1000);
