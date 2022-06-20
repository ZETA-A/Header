// Modal의 Body 부분
const mainCenter = document.querySelector("div.container div.center");
const mainModal = document.querySelector("div.container div.modal");
const mainModalBtn = document.querySelector("#modalPopupBtn");
const generalModalBackBtn = document.querySelector(
    "div.modal div.general div.modalFooter button.backBtn"
);
const clockModalBackBtn = document.querySelector(
    "div.modal div.clockSetting div.modalFooter button.backBtn"
);
const weatherModalBackBtn = document.querySelector(
    "div.modal div.weather div.modalFooter button.backBtn"
);
const internetModalBackBtn = document.querySelector(
    "div.modal div.internet div.modalFooter button.backBtn"
);

// Modal 페이지 부분
const mainModalMain = document.querySelector("div.modal div.main");
const generalModalMain = document.querySelector("div.modal div.general");
const clockModalMain = document.querySelector("div.modal div.clockSetting");
const weatherModalMain = document.querySelector("div.modal div.weather");
const internetModalMain = document.querySelector("div.modal div.internet");

// Modal 일반페이지 인박스 부분
const mainModalGeneral = document.querySelector(
    "div.modal div#category div#generalSetting"
);
const mainModalGeneralSubTitle = document.querySelector(
    "div.modal div#category p#generalSetting.subtitle"
);
const mainModalGeneralImg = document.querySelector(
    "div.modal div#category img#generalSetting"
);

// Modal 시간 페이지 인박스 부분
const mainModalClock = document.querySelector(
    "div.modal div#category div#clockSetting"
);
const mainModalClockSubTitle = document.querySelector(
    "div.modal div#category p#clockSetting.subtitle"
);
const mainModalClockImg = document.querySelector(
    "div.modal div#category img#clockSetting"
);

// Modal 날씨 페이지 인박스 부분
const mainModalWeather = document.querySelector(
    "div.modal div#category div#weatherSetting"
);
const mainModalWeatherSubTitle = document.querySelector(
    "div.modal div#category p#weatherSetting.subtitle"
);
const mainModalWeatherImg = document.querySelector(
    "div.modal div#category img#weatherSetting"
);

// Modal 인터넷 페이지 인박스 부분
const mainModalInternet = document.querySelector(
    "div.modal div#category div#internetSetting"
);
const mainModalInternetSubTitle = document.querySelector(
    "div.modal div#category p#internetSetting.subtitle"
);
const mainModalInternetImg = document.querySelector(
    "div.modal div#category img#internetSetting"
);

// Modal 일반 페이지
const generalModalNameInput = document.querySelector(
    "div.modal div.general input.inputText"
);

// Modal 인터넷 페이지
const internetModalRadioBoxGoogle = document.querySelector(
    "div.modal div.internet div.downhr input#google"
);
const internetModalRadioBoxNaver = document.querySelector(
    "div.modal div.internet div.downhr input#naver"
);
const internetModalRadioBoxDaum = document.querySelector(
    "div.modal div.internet div.downhr input#daum"
);
const internetModalRadioBoxBing = document.querySelector(
    "div.modal div.internet div.downhr input#bing"
);
const internetModalRadioBoxZum = document.querySelector(
    "div.modal div.internet div.downhr input#zum"
);

// Modal 인터넷 바로가기
const internetModalOne = document.querySelector(
    "div.modal div.internet div.hr input#browserOne"
);
const internetModalTwo = document.querySelector(
    "div.modal div.internet div.hr input#browserTwo"
);
const internetModalThree = document.querySelector(
    "div.modal div.internet div.hr input#browserThree"
);

// Modal 시계 바로가기
const clockModalTimeSet12 = document.querySelector(
    "div.modal div.clockSetting input#timeSet12"
);

const clockModalTimeSet24 = document.querySelector(
    "div.modal div.clockSetting input#timeSet24"
);

function setSettingModal() {
    mainModalBtn.addEventListener("click", () => {
        mainModal.classList.toggle("show");

        if (mainModal.classList.contains("show")) {
            mainCenter.style.overflow = "hidden";
        }
    });

    mainModal.addEventListener("click", (event) => {
        if (event.target === mainModal) {
            mainModal.classList.toggle("show");

            if (!mainModal.classList.contains("show")) {
                mainCenter.style.overflow = "auto";
            }
        }
    });

    generalModalBackBtn.addEventListener("click", () => {
        mainModalMain.hidden = false;
        generalModalMain.hidden = true;
        saveGeneral();
    });

    clockModalBackBtn.addEventListener("click", () => {
        mainModalMain.hidden = false;
        clockModalMain.hidden = true;
        saveClock();
    });

    weatherModalBackBtn.addEventListener("click", () => {
        mainModalMain.hidden = false;
        weatherModalMain.hidden = true;
    });

    internetModalBackBtn.addEventListener("click", () => {
        mainModalMain.hidden = false;
        internetModalMain.hidden = true;
        saveInternet();
    });

    mainModalGeneral.addEventListener("click", (event) => {
        if (
            event.target === mainModalGeneral ||
            event.target === mainModalGeneralSubTitle ||
            event.target === mainModalGeneralImg
        ) {
            mainModalMain.hidden = true;
            generalModalMain.hidden = false;
        }
    });

    mainModalClock.addEventListener("click", (event) => {
        if (
            event.target === mainModalClock ||
            event.target === mainModalClockSubTitle ||
            event.target === mainModalClockImg
        ) {
            mainModalMain.hidden = true;
            clockModalMain.hidden = false;
        }
    });

    mainModalWeather.addEventListener("click", (event) => {
        if (
            event.target === mainModalWeather ||
            event.target === mainModalWeatherSubTitle ||
            event.target === mainModalWeatherImg
        ) {
            mainModalMain.hidden = true;
            weatherModalMain.hidden = false;
        }
    });

    mainModalInternet.addEventListener("click", (event) => {
        if (
            event.target === mainModalInternet ||
            event.target === mainModalInternetSubTitle ||
            event.target === mainModalInternetImg
        ) {
            mainModalMain.hidden = true;
            internetModalMain.hidden = false;
        }
    });

    loadSettingModal();
}

function loadSettingModal() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    // 일반 페이지 이름 로드
    generalModalNameInput.value = settingDB[0].userName;

    // 인터넷 페이지 리디오박스 바로가기 로드
    if (settingDB[3].browserEngine === "google") {
        internetModalRadioBoxGoogle.checked = true;
    } else if (settingDB[3].browserEngine === "naver") {
        internetModalRadioBoxNaver.checked = true;
    }
    if (settingDB[3].browserEngine === "daum") {
        internetModalRadioBoxDaum.checked = true;
    } else if (settingDB[3].browserEngine === "bing") {
        internetModalRadioBoxBing.checked = true;
    } else if (settingDB[3].browserEngine === "zum") {
        internetModalRadioBoxZum.checked = true;
    }

    // 인터넷 페이지 바로가기 로드
    internetModalOne.value = settingDB[3].browserOne;
    internetModalTwo.value = settingDB[3].browserTwo;
    internetModalThree.value = settingDB[3].browserThree;

    // 시계 페이지 형식 로드
    if (settingDB[1].time24 === "0") {
        clockModalTimeSet12.checked = true;
    } else if (settingDB[1].time24 === "1") {
        clockModalTimeSet24.checked = true;
    }
}

function saveGeneral() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    settingDB[0].userName = generalModalNameInput.value;
    localStorage.setItem("settingDB", JSON.stringify(settingDB));
}

function saveInternet() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    let browserEngine = document.querySelector(
        'div.modal div.internet div.downhr input[name="searchEngine"]:checked'
    ).value;

    settingDB[3].browserEngine = browserEngine;
    settingDB[3].browserOne = internetModalOne.value;
    settingDB[3].browserTwo = internetModalTwo.value;
    settingDB[3].browserThree = internetModalThree.value;

    localStorage.setItem("settingDB", JSON.stringify(settingDB));
}

function saveClock() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    let clockValue = document.querySelector(
        'div.modal div.clockSetting input[name="timeSet"]:checked'
    );
    settingDB[1].time24 = clockValue.value;
    localStorage.setItem("settingDB", JSON.stringify(settingDB));
}

export default setSettingModal;
