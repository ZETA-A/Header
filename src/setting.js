import changeGreeting from "./greeting";

/*
Object 생성
*/
let settingList = new Array();
let userObject = new Object();
let clockObject = new Object();
let weatherObject = new Object();
let browserObject = new Object();
let otherObject = new Object();
const localStorage = window.localStorage;

/*
Form 새로고침 수정
*/
function handleForm(event) {
    event.preventDefault();
}

/*
이름 물어보는 부분
*/
function settingNameEnter(arg) {
    userObject.userName = `${
        document.querySelector("form#settingForm input#nameInput").value
    }`;
    userObject.userBirth = "undefined";
    userObject.savefile = "1";

    clockObject.time24 = "0";
    clockObject.timeSet = "space";

    weatherObject.weatherEnable = "0";
    weatherObject.weatherComputer = "undefined";
    weatherObject.weatherLocation = "undefined";

    browserObject.browserEngine = "google";
    browserObject.browserOne = "undefined";
    browserObject.browserTwo = "undefined";
    browserObject.browserThree = "undefined";

    otherObject.csatMode = "0";
    if (arg === "Enter") {
        settingList.push(userObject, clockObject, weatherObject, browserObject, otherObject);
        localStorage.setItem("settingDB", JSON.stringify(settingList));
    }
}

export default settingNameEnter;
