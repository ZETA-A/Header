import getGeolocation from "./geolocation";

function getWeather() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    if (settingDB[2].weatherComputer === 1) {
        koreaGov();
    } else if (settingDB[2].weatherComputer === 2) {
        norwayGov();
    }
}

function norwayGov() {
    
}

function koreaGov() {

}


export default getWeather;