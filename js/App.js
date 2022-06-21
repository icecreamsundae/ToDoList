const clock = document.querySelector('#clock');


function currentTime() {  
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `⏰${hours}h:${minutes}m:${seconds}s`; 

}

setInterval(currentTime, 1000);

// 해결할 것 : 새로고침 시 00:00:00 머물다가 시간 보여줌.. 