// 컨테이너 부분
const mainCenter = document.querySelector("div.container div.center");
const searchModal = document.querySelector("div.container div.searchModal");
const searchModalBtn = document.querySelector("button#browserSearch");
const searchInput = document.querySelector(
    "div.container div.searchModal div.searchBody input"
);

function setSearchModal() {
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
    let link = settingDB[3].browserSearch + input;
    console.log(link);
    location.href = link;
}

export default setSearchModal;
