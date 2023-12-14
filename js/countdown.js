// 목표 날짜 설정 (예시: 2023년 1월 1일)
const targetDate = new Date("2023-12-25T00:00:00Z");

function updateCountdown() {
  // 현재 한국 시간을 얻어오기
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

  // 남은 시간 계산
  const timeRemaining = targetDate - now;

  // 시간, 분, 초 계산
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // 결과를 HTML에 업데이트
  const countdownElement = document.getElementById('countdown');
  countdownElement.style.color = '#333333'
  countdownElement.innerHTML = `
      <span>D-${days}, ${hours}:${minutes}:${seconds} </span>`;
}
// 페이지 로드 시에도 업데이트 수행
updateCountdown();

// 1초마다 업데이트
setInterval(updateCountdown, 1000);

// 날짜 기준 카드 오픈 기능
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 현재 한국 시간을 얻어오기
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

    // 각 날짜에 해당하는 날짜를 계산
    const openDate = new Date(2023, 11, index + 1); // 2023년 12월 1일부터 시작

    // 현재 날짜가 열 수 있는 날짜 이후인지 확인
    if (now.getTime() > openDate.getTime()) {
      // 여기에 모달을 열거나 특정 동작을 수행하는 코드 추가
      // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
      const doorDiv = document.querySelector(`.day-${index + 1}`)
      const backDiv = doorDiv.querySelector(`.back`);

      const style = window.getComputedStyle(backDiv);
      const pTag = backDiv.querySelector('p')
      const text = modalMessageList[index]['message']
      const bookInfo = bookInfoList[index]['message']

      // showModal 함수를 호출하여 모달을 표시합니다.
      showModal(pTag, text, bookInfo);
      // alert('이벤트 캘린더를 엽니다.');
      const blindElement = doorDiv.querySelector('.front.blind');
      if (blindElement) {
        blindElement.style.display = 'none';}

      // 현재 날짜가 열 수 있는 날짜보다 이전이면 애니메이션 클래스 추가
      if (now.getTime() < openDate.getTime()) {
        door.classList.add('checked');
      } else {
        door.classList.remove('.checked', '.door.back');
      }
      
    } else {
      // 현재 날짜가 열 수 있는 날짜보다 이전인 경우 몇 일 후에 열 수 있다는 메시지를 표시
      const daysRemaining = Math.ceil((openDate - now) / (1000 * 60 * 60 * 24));

      // 모달 요소 가져오기
      const modal = document.getElementById('myModal');
      const modalText = document.getElementById('modalText');

      // 모달 텍스트 설정
      modalText.textContent = `이 카드는 ${daysRemaining}일 후에 열 수 있어요!`;

      // 모달 표시
      modal.style.display = 'block';

      // 사용자가 닫기 버튼을 클릭하면 모달을 닫습니다
      const closeBtn = document.querySelector('.close-btn');
      closeBtn.onclick = function() {
        modal.style.display = 'none';
      };

      // 사용자가 모달 외부를 클릭하면 모달을 닫습니다
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }
  });
});