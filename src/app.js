"use strict";

// js
import refreshTime from "./clock";
import settingNameEnter from "./setting";
import changeGreeting from "./greeting";
import setSettingModal from "./modal";
import setBackgroundImage from "./backgroundImg";
//import getGeolocation from "./geolocation";
import dbChecksum from "./dbChecksum";
import setShortcut from "./shortcut";
import setSearchModal from "./searchModal";

// css
import "./setting.css";
import "./app.css";
import "./font.css";
import "./modal.css";
import "./clock.css";
import "./greeting.css";
import "./toggleSwitch.css";
import "./shortcut.css";
import "./searchModal.css";

const errorImg =
    "url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740')";

(async function () {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));

    document
        .querySelector("form#settingForm")
        .addEventListener("keydown", (event) => {
            const guess = event.key;
            settingNameEnter(guess);
        });

    try {
        if (settingDB[0].savefile === "1") {
            dbChecksum();
            // getGeolocation();
            setBackgroundImage();
            setShortcut();
            document.querySelector("div#setting-container").remove();
            document.querySelector("div.container").removeAttribute("hidden");

            function setTime() {
                const time = refreshTime()[0];
                document.querySelector("div#clock").innerHTML = time;
            }

            function setGreeting() {
                const greeting = changeGreeting();
                document.getElementById("greeting").innerHTML = greeting;
            }

            function setupDashboard() {
                setSettingModal();
                setSearchModal();
                setTime();
                setGreeting();
                setInterval(setTime, 1000);
            }
            setupDashboard();
        }
    } catch (error) {
        document.querySelector("body").style.backgroundImage =
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))," +
            errorImg;
        document.querySelector("div.container").remove();
        document
            .querySelector("div#setting-container")
            .removeAttribute("hidden");
        console.error(error);
        return;
    }
})();
