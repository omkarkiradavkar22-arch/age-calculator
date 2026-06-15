const btn = document.querySelector(".btn");
        const y = document.querySelector(".year");
        const m = document.querySelector(".month");
        const d = document.querySelector(".days");
        const error = document.querySelector(".error");
        btn.addEventListener("click",()=>{
            let today=new Date();
            const date = document.querySelector(".date").value;
            if(!date){
                error.innerHTML="Please enter the date";
            }else{
                error.innerHTML=" ";
            let isdate = new Date(date);
            let year = today.getFullYear() - isdate.getFullYear();
            let month = today.getMonth() - isdate.getMonth();
            let days = today.getDate() - isdate.getDate();
            console.log("age: ",year,"Years",month,"month",days,"days.");
            y.innerHTML=year;
            m.innerHTML=month;
            d.innerHTML=days;
        }
        });