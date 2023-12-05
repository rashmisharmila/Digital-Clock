function clock(){
    //Arrays of days
    let days:string[]=["Sunday" ,"Monday" ,"Tuesday" , "Wednesday","Thursday","Friday","Saturday"];
    //Arrays of months
    let months:string[]=["January","February","March","April","May","June","July","August","September","October","November","December"];

    //Get all ids
    let hrs:any=document.getElementById('hours');
    let min:any=document.getElementById('minutes');
    let sec:any=document.getElementById('seconds');
    let period:any=document.getElementById('ampm');
    let date:any=document.getElementById('ddmmyy');
    let day:any=document.getElementById('dd');

    //Date Objects
    let time=new Date();
    //console.log(time)

    //get all attribute of object
    let h:number | string=time.getHours();
    let m:number | string=time.getMinutes();
    let s:number | string=time.getSeconds();
    let d=time.getDay();
    let todayDate=time.getDate();
    let todayMonth=time.getMonth();
    let todayYear=time.getFullYear();

    /*console.log(todayDate)
    console.log(todayMonth)
    console.log(todayYear)*/

    //convert it to 12-hour format
    if (h > 12 ){
        h=h-12;
    }
    //If 'h' is 0, set it to 12 to maintain 12-hour format
    if (h == 0){
        h = 12;
    }
    //// Determine whether it is AM or PM based on the value of 'h'
    let ampm;

    if (h>12){
        ampm="AM";
    }else {
        ampm="PM"
    }

    // Add leading zero to h,m,s if it is less than 10
    h=h<10 ? "0" +h :h;
    m=m<10 ? "0" +m :m;
    s=s<10 ? "0" +s :s;


    hrs.innerHTML =h;
    min.innerHTML =m;
    sec.innerHTML =s;
    period.innerHTML=ampm;

    day.innerHTML=days[d];
    date.innerHTML=months[todayMonth] + " | "+todayDate+" | "+todayYear;
}

setInterval(clock,1000);
