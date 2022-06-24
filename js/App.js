const clock = document.querySelector('#clock');


function currentTime() {  
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `⏰${hours}h:${minutes}m:${seconds}s`; 

}

currentTime(); // 먼저 함수 실행을 해서 시간을 보여주고 (먼저 해줘야 새로고침해도 1초 딜레이없이 바로 보인다)
setInterval(currentTime, 1000); // 그 다음에 1초씩 보여줌

