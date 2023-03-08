const days = [
   "Вс",
   "Пн",
   "Вт",
   "Ср",
   "Чт",
   "Пт",
   "Сб"
];



window.onload = function update() {
    window.setInterval(function() {
       let date = new Date();
       
       let num = date.getDate();
       let day_week = date.getDay();
       let hours = date.getHours();
       let minutes = date.getMinutes();
       let sec = date.getSeconds();
       
       if (num < 10) num = "0" + num;
       if(hours < 10) hours = "0" + hours;
       if(minutes < 10) minutes = "0" + minutes;
       
       const clock = num + " " + days[day_week] + ", " + (sec%2 ? `${hours}:${minutes}` : `${hours} ${minutes}`);
       document.getElementById("clock").innerHTML = clock;

    }, 1000);
    update();
 };