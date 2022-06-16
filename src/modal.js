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
    });

    clockModalBackBtn.addEventListener("click", () => {
        mainModalMain.hidden = false;
        clockModalMain.hidden = true;
    });

    weatherModalBackBtn.addEventListener("click", () => {
        mainModalMain.hidden = false;
        weatherModalMain.hidden = true;
    });

    internetModalBackBtn.addEventListener("click", () => {
        mainModalMain.hidden = false;
        internetModalMain.hidden = true;
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
}

export default setSettingModal;
