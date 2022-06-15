function refreshTime() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    let jsDate = new Date();
    let hours = jsDate.getHours();
    let aHours = jsDate.getHours();
    let minutes = jsDate.getMinutes();
    let seconds = jsDate.getSeconds();

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (aHours < 10) {
        aHours = `0${aHours}`;
    }

    if (settingDB[1].time24 === "1") {
        if (hours < 10) {
            hours = `0${hours}`;
        } else {
            hours = hours;
        }
    } else if (settingDB[1].time24 === "0") {
        if (hours - 12 < 0) {
            if (hours < 10) {
                hours = `오전 0${hours}`;
            } else {
                hours = `오전 ${hours}`;
            }
        } else {
            hours = hours - 12;
            if (hours < 10 && hours !== 0) {
                hours = `오후 0${hours}`;
            } else {
                if (hours === 0) {
                    hours = "오후 12";
                } else {
                    hours = `오후 ${hours}`;
                }
            }
        }
    }

    return [
        `${hours}:${minutes}:${seconds}`,
        parseInt(`${aHours}${minutes}${seconds}`),
    ];
}

export default refreshTime;
