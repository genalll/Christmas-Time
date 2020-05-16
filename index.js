Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();
 
function dste(){
var one = new Date(2021, 0, 1, 0, 0, 0, 0); // дата, до которой считаем.
	var two = Date.now(); // текущее время
	var remaining = one - two; // миллисекунды до даты
	remaining /= 1000; // секунды до даты
	remaining /= 60;    // минуты до даты
	remaining /= 60;    // часы до даты
	remaining /= 24;    // дни до даты
	 
return remaining;
}

switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мая"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}
 
document.getElementById("test").innerHTML="Сегодня "+Day+" "+fMonth+" "+Year+" года ";
document.getElementById("day").innerHTML= Math.round(dste());
