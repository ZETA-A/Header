import refreshTime from "./clock";

let onelineJSON = {
    morning: [
        "즐거운 마음으로 시작하는 아침이에요,",
        "좋은 아침이에요,",
        "편안하게 잘 주무셨나요?",
        "새로운 해가 밝았어요,",
        "특별한 하루가 시작됐어요,",
    ],
    day: [
        "즐거운 오후예요,",
        "아늑하고 평온한 기분이 드는 오후에요,",
        "오후 티타임 어때요?",
        "벌써 하루의 반이 지나갔어요,",
        "점점 나른해지는 오후에요,",
    ],
    evening: [
        "하루해가 저물고 있어요,",
        "좋은 저녁이에요,",
        "하늘이 붉게 물들고 있어요,",
        "우리 조금만 더 힘내볼까요?",
        "분명 좋은 일이 있을거에요,",
    ],
    night: [
        "좋은 밤이네요,",
        "오늘 하루도 수고많았어요,",
        "안녕히주무세요,",
        "꿈나라로 갈 시간이에요,",
        "별이 빛는 밤이에요,",
    ],
    dawn: [
        "조금 쉬는 건 어때요?",
        "새벽 공기가 맑아요,",
        "우리 새벽 산책 나가보는건 어때요?",
        "언제나 당신을 응원하고있어요,",
        "커피 한 잔 어때요?",
    ],
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeGreeting() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));

    if (
        // 새벽일 때
        refreshTime()[1] >= parseInt("000000") &&
        refreshTime()[1] < parseInt("050000")
    ) {
        settingDB[1].timeSet = "dawn";
        localStorage.setItem("settingDB", JSON.stringify(settingDB));
        return `${onelineJSON.dawn[random(0, 4)]} ${settingDB[0].userName}님!`;
    } else if (
        // 아침일 때
        refreshTime()[1] >= parseInt("050000") &&
        refreshTime()[1] < parseInt("120000")
    ) {
        settingDB[1].timeSet = "morning";
        localStorage.setItem("settingDB", JSON.stringify(settingDB));
        return `${onelineJSON.morning[random(0, 4)]} ${
            settingDB[0].userName
        }님!`;
    } else if (
        // 오후일 때
        refreshTime()[1] >= parseInt("120000") &&
        refreshTime()[1] < parseInt("170000")
    ) {
        settingDB[1].timeSet = "day";
        localStorage.setItem("settingDB", JSON.stringify(settingDB));
        return `${onelineJSON.day[random(0, 4)]} ${settingDB[0].userName}님!`;
    } else if (
        // 저녁일 때
        refreshTime()[1] >= parseInt("170000") &&
        refreshTime()[1] < parseInt("200000")
    ) {
        settingDB[1].timeSet = "evening";
        localStorage.setItem("settingDB", JSON.stringify(settingDB));
        return `${onelineJSON.evening[random(0, 4)]} ${
            settingDB[0].userName
        }님!`;
    } else if (
        // 밤일 때
        refreshTime()[1] >= parseInt("200000") &&
        refreshTime()[1] <= parseInt("235959")
    ) {
        settingDB[1].timeSet = "night";
        localStorage.setItem("settingDB", JSON.stringify(settingDB));
        return `${onelineJSON.night[random(0, 4)]} ${settingDB[0].userName}님!`;
    }
}

export default changeGreeting;
