// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text, bookInfo) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  const bookElement = document.createElement('span');
  textElement.textContent = text;
  bookElement.textContent = bookInfo;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(textElement);
  textElement.appendChild(bookElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "그녀는 그때 처음으로 어른들은 눈물을 흘리지 않고서도 울 수 있다는 사실을 알았다." },
  { "number": 2, "message": "“이제 알약, 삼킬 줄 아니.”" },
  { "number": 3, "message": "그 애는 겨울에 도착한 불청객이었다" },
  { "number": 4, "message": "어떤 자살은 가해였다. 아주 최종적인 형태의 가해였다." },
  { "number": 5, "message": "상실, 사랑 그리고 숨어 있는 삶의 질서에 관한 이야기"  },
  { "number": 6, "message": "나는 이제 쉬이 얻는 행운들을 꿈꾸지 않는다." },
  { "number": 7, "message": "“어차피 언젠가는 지게 되어 있어요. 친절한 사람들이 나쁜 사람들을 어떻게 계속 이겨요. 도무지 이기지 못하는 것까지 친절함에 포함되어 있으니까 괜찮아요. 져도 괜찮아요.”" },
  { "number": 8, "message": "‘삶’이라는 것은 어쩌면 ‘죽음’이라는 엔딩을 위한 하나의 스토리에 불과한지도 모른다. " },
  { "number": 9, "message": "그렇구나. 어떻게 돈을 쓰는지가 그 사람을 나타내는 것 같기도 하다." },
  { "number": 10, "message": "떠나지 못할 이유가 생겼는데 이상하게 가뿐했다." },
  { "number": 11, "message": "잃어버린 거리의 자유와 기쁨을 찾아서" },
  { "number": 12, "message": "내 사랑 얼어있는 사랑" },
  { "number": 13, "message": "언젠가부터 내 장래 희망은 간사한 박국제를 쥐어 팬 후 깽값을 물지도 감옥에 가지도 않는 것으로 바뀌었다." },
  { "number": 14, "message": "무려 2차대전에 참전했다는 노인과 대낮같이 밝은 밤에 산책하고 있자니 어쩐지 모든 게 비현실적으로 느껴졌다. 마치 조명이 환히 켜진 세트장에 들어와 있는 것 같았다." },
  { "number": 15, "message": "그 마지막 순간을 최대한 유예하고 싶었다." },
  { "number": 16, "message": "무서운 것은 지력이 아니고, 하물며 무력도 아닙니다. 이 세상에서 가장 무서운 것은 그것을 사용하는 이의 인격입니다." },
  { "number": 17, "message": "심령님, 오셨다면 <딱> 소리를 내주세요" },
  { "number": 18, "message": "무용하고 아름다운 것들을 기록합니다" },
  { "number": 19, "message": "독자, 저자, 그리고 편집자의 삶" },
  { "number": 20, "message": "하고 싶지 않은 것은 하지 않게된 나이" },
  { "number": 21, "message": "복날에는 삼계탕을 나눠 먹고, 정월 대보름에는 오곡밥을 지어 먹고 동짓날에는 팥죽을 쑤어 함께 먹는 사이." },
  { "number": 22, "message": "시간이 많아지면 생각이 많아지고, 생각이 많아지면 우울이 잦아들기 마련이다." },
  { "number": 23, "message": "고통을 주지 않는 것이 사랑일까, 아니면 고통을 견디는 것이 사랑일까 생각하면서." },
  { "number": 24, "message": "“사람을 사랑하는 일에는 지극한 정성과 수고가 필요하니까.”" }
];

const bookInfoList = [
  { "number": 1, "message": "백수린, 『여름의 빌라』 "},
  { "number": 2, "message": "구병모, 『파과』 "},
  { "number": 3, "message": "김초엽, 『파견자들』 "},
  { "number": 4, "message": "정세랑, 『시선으로부터,』 "},
  { "number": 5, "message": "룰루 밀러, 『물고기는 존재하지 않는다』 "},
  { "number": 6, "message": "정지음, 『오색 찬란 실패담』 "},
  { "number": 7, "message": "정세랑, 『보건교사 안은영』 "},
  { "number": 8, "message": "김지영, 『행복해지려는 관성』 "},
  { "number": 9, "message": "하라다 히카, 『할머니와 나의 3천 엔』 "},
  { "number": 10, "message": "문경민, 『훌훌』 "},
  { "number": 11, "message": "메리 에번스 픽처 라이브러리 외 10명, 『바깥은 천국』 "},
  { "number": 12, "message": "정세랑, 『목소리를 드릴게요』 "},
  { "number": 13, "message": "정지음, 『언러키 스타트업』 "},
  { "number": 14, "message": "장류진, 『일의 기쁨과 슬픔』 "},
  { "number": 15, "message": "김초엽, 『지구 끝의 온실』 "},
  { "number": 16, "message": "다카노 가즈아키, 『제노사이드』 "},
  { "number": 17, "message": "조나탕 베르베르, 『심령들이 잠들지 않는 그곳에서』 "},
  { "number": 18, "message": "영민, 『작은 수집, 스몰컬렉팅』 "},
  { "number": 19, "message": "이은혜, 『읽는 직업』 "},
  { "number": 20, "message": "권남희, 『혼자여서 좋은 직업』 "},
  { "number": 21, "message": "백수린, 『친애하고, 친애하는』 "},
  { "number": 22, "message": "조예은, 『칵테일, 러브, 좀비』 "},
  { "number": 23, "message": "김초엽, 『행성어 서점』 "},
  { "number": 24, "message": "백수린, 『눈부신 안부』 "},
]