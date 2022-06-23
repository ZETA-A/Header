function setShortcut() {
    const browserOne = document.querySelector("button#browserOne");
    const browserTwo = document.querySelector("button#browserTwo");
    const browserThree = document.querySelector("button#browserThree");

    const browserOneImg = document.querySelector("button#browserOne img");
    const browserTwoImg = document.querySelector("button#browserTwo img");
    const browserThreeImg = document.querySelector("button#browserThree img");

    let settingDB = JSON.parse(localStorage.getItem("settingDB"));

    function checkUrlForm(strUrl) {
        var expUrl = /^http[s]?\:\/\//i;
        return expUrl.test(strUrl);
    }

    /**
     *
     * @param {*} address
     * @param {string} shortcutNum
     */
    function getPrompt(address, shortcutNum) {
        if (checkUrlForm(address) === true) {
            settingDB = JSON.parse(localStorage.getItem("settingDB"));
            if (shortcutNum === "one") {
                settingDB[3].browserOne = address;
            } else if (shortcutNum === "two") {
                settingDB[3].browserTwo = address;
            } else if (shortcutNum === "three") {
                settingDB[3].browserThree = address;
            }
            localStorage.setItem("settingDB", JSON.stringify(settingDB));
            location.reload();
        } else {
            alert("사이트 주소의 형식이 올바르지 않습니다");
        }
    }

    if (checkUrlForm(settingDB[3].browserOne) === true) {
        browserOneImg.src = `http://www.google.com/s2/favicons?domain=${settingDB[3].browserOne}`;
    }
    if (checkUrlForm(settingDB[3].browserTwo) === true) {
        browserTwoImg.src = `http://www.google.com/s2/favicons?domain=${settingDB[3].browserTwo}`;
    }
    if (checkUrlForm(settingDB[3].browserThree) === true) {
        browserThreeImg.src = `http://www.google.com/s2/favicons?domain=${settingDB[3].browserThree}`;
    }

    browserOne.addEventListener("click", () => {
        if (checkUrlForm(settingDB[3].browserOne) === true) {
            location.href = settingDB[3].browserOne;
        } else {
            const browserOnePrompt = prompt(
                "1번 바로가기에 추가할 사이트 주소를 입력해주세요",
                "https://example.com"
            );
            getPrompt(browserOnePrompt, "one");
        }
    });
    browserTwo.addEventListener("click", () => {
        if (checkUrlForm(settingDB[3].browserTwo) === true) {
            location.href = settingDB[3].browserTwo;
        } else {
            const browserTwoPrompt = prompt(
                "2번 바로가기에 추가할 사이트 주소를 입력해주세요",
                "https://example.com"
            );

            if (checkUrlForm(browserTwoPrompt === true)) {
                const browserTwoPrompt = prompt(
                    "1번 바로가기에 추가할 사이트 주소를 입력해주세요",
                    "https://example.com"
                );
                getPrompt(browserTwoPrompt, "two");
            } else {
                alert("사이트 주소의 형식이 올바르지 않습니다");
            }
        }
    });
    browserThree.addEventListener("click", () => {
        if (checkUrlForm(settingDB[3].browserThree) === true) {
            location.href = settingDB[3].browserThree;
        } else {
            const browserThreePrompt = prompt(
                "3번 바로가기에 추가할 사이트 주소를 입력해주세요",
                "https://example.com"
            );

            if (checkUrlForm(browserThreePrompt === true)) {
                const browserThreePrompt = prompt(
                    "1번 바로가기에 추가할 사이트 주소를 입력해주세요",
                    "https://example.com"
                );
                getPrompt(browserThreePrompt, "three");
            } else {
                alert("사이트 주소의 형식이 올바르지 않습니다");
            }
        }
    });
}

export default setShortcut;
