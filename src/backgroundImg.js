function setBackgroundImage() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    let backgroundURL
    if (settingDB[4].csatMode === "1") {
        backgroundURL = `url('https://source.unsplash.com/random/?exam')`;
    } else {
        backgroundURL = `url('https://source.unsplash.com/random/?${settingDB[1].timeSet}')`;
    }
    document.querySelector("body").style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))," +
        backgroundURL;
}

export default setBackgroundImage;
