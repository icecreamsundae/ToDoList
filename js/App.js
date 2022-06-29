const clock = document.querySelector('#clock');
const calendar = document.querySelector('#calendar');
const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');

const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const API_KEY = `4d7038048896b9c020816c6d2162ff5a`;

function currentTime() {  
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const week = date.getDay();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");

  calendar.innerText = `${year}. ${month}. ${day}. ${weeks[week]}`;
  clock.innerText = `${hours} : ${minutes}`; 

}

function onGeolocation(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const temp = Math.floor(data.main.temp);
      weather.innerText = `${data.weather[0].main}, ${temp}℃`;
      city.innerText = `${data.sys.country} ${data.name}`;
    })
  
}

function onGeolocationErr() {
  alert('위치 허락 해줘!!!!! 날씨 보여줄게!!!!!');
}

currentTime(); // 먼저 함수 실행을 해서 시간을 보여주고 (먼저 해줘야 새로고침해도 1초 딜레이없이 바로 보인다)
setInterval(currentTime, 1000); // 그 다음에 1초씩 보여줌


navigator.geolocation.getCurrentPosition(onGeolocation, onGeolocationErr);

//localhost로 들어가야 위치 설정 물음
