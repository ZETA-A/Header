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
        }
    });
    browserTwo.addEventListener("click", () => {
        if (checkUrlForm(settingDB[3].browserTwo) === true) {
            location.href = settingDB[3].browserTwo;
        }
    });
    browserThree.addEventListener("click", () => {
        if (checkUrlForm(settingDB[3].browserThree) === true) {
            location.href = settingDB[3].browserThree;
        }
    });
}

export default setShortcut;
