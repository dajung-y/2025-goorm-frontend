const timer = document.querySelector('#timer');
let time=3600;
let timeHour=0;
let timeMin=0;
let timeSec=0;

// String(timeMin).padStart(2,”0”);
// 문자열 포맷팅 
// padStart(길이,부족한 자리수를 무엇으로 재울지 지정)

const countDown = setInterval(()=>{

  time --;
  timeHour = Math.floor(time/3600);
  timeMin = Math.floor(time%3600/60);
  timeSec = time % 60;

  timer.innerText = `${timeHour} : ${timeMin} : ${timeSec}`;

  // 음수일 경우 대비
  // time<0 로 변경
  if(time === 0){
    clearInterval(countDown);
    timer.innerText = '종료되었습니다';
  }

},1000);