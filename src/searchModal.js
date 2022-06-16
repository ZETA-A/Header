// 컨테이너 부분
const mainCenter = document.querySelector("div.container div.center");
const searchModal = document.querySelector("div.container div.searchModal");
const searchModalBtn = document.querySelector("button#browserSearch");
const searchInput = document.querySelector(
    "div.container div.searchModal div.searchBody input"
);
const searchImg = document.querySelector("div.searchModal div.searchBody img");

let browserSearch = {
    google: "https://www.google.com/search?q=",
    naver: "https://search.naver.com/search.naver?query=",
    daum: "https://search.daum.net/search?q=",
    bing: "https://www.bing.com/search?q=",
    zum: "https://search.zum.com/search.zum?query=",
};

function setSearchModal() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    if (settingDB[3].browserEngine === "google") {
        searchImg.src = "./image/browserIcon/googleIcon.png";
    } else if (settingDB[3].browserEngine === "naver") {
        searchImg.src = "./image/browserIcon/naverIcon.png";
    } else if (settingDB[3].browserEngine === "daum") {
        searchImg.src = "./image/browserIcon/daumIcon.png";
    } else if (settingDB[3].browserEngine === "bing") {
        searchImg.src = "./image/browserIcon/bingIcon.png";
    } else if (settingDB[3].browserEngine === "zum") {
        searchImg.src = "./image/browserIcon/zumIcon.png";
    }

    searchModalBtn.addEventListener("click", () => {
        searchModal.classList.toggle("show");

        if (searchModal.classList.contains("show")) {
            mainCenter.style.overflow = "hidden";
        }
    });

    searchModal.addEventListener("click", (event) => {
        if (event.target === searchModal) {
            searchModal.classList.toggle("show");

            if (!searchModal.classList.contains("show")) {
                mainCenter.style.overflow = "auto";
            }
        }
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchEnter(event, searchInput.value);
        }
    });
}

function searchEnter(event, input) {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    event.preventDefault();
    let browserEngine = settingDB[3].browserEngine;
    let link = browserSearch[browserEngine] + input;
    location.href = link;
}

export default setSearchModal;
