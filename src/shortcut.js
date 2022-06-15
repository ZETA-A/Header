function setShortcut() {
    const browserOne = document.querySelector("button#browserOne img");
    const browserTwo = document.querySelector("button#browserTwo img");
    const browserThree = document.querySelector("button#browserThree img");

    let settingDB = JSON.parse(localStorage.getItem("settingDB"));

    if (settingDB[3].browserOne !== "undefined" || "") {
        browserOne.src = `http://www.google.com/s2/favicons?domain=${settingDB[3].browserOne}`;
    }
    if (settingDB[3].browserTwo !== "undefined" || "") {
        browserTwo.src = `http://www.google.com/s2/favicons?domain=${settingDB[3].browserTwo}`;
    }
    if (settingDB[3].browserThree !== "undefined" || "") {
        browserThree.src = `http://www.google.com/s2/favicons?domain=${settingDB[3].browserThree}`;
    }
}

export default setShortcut;