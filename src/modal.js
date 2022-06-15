// 컨테이너 부분
const mainCenter = document.querySelector("div.container div.center");
const mainModal = document.querySelector("div.container div.modal");
const mainModalBtn = document.querySelector("#modalPopupBtn");

// 설정 내 부분
const modalNameInput = document.querySelector("div.modal input#nameInput");
const modalTimesetCheckbox = document.querySelector(
    "div.modal input#timeSet24"
);



function loadSettingModal() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));

    modalNameInput.value = settingDB[0].userName;
    if (settingDB[1].time24 === "1") {
        modalTimesetCheckbox.setAttribute("checked", "");
    } else if (settingDB[1].time24 === "0") {
        modalTimesetCheckbox.removeAttribute("checked");
    }
}

function setSettingModal() {
    loadSettingModal();

    mainModalBtn.addEventListener("click", () => {
        mainModal.classList.toggle("show");

        if (mainModal.classList.contains("show")) {
            mainCenter.style.overflow = "hidden";
        }
    });

    mainModal.addEventListener("click", (event) => {
        if (event.target === mainModal) {
            mainModal.classList.toggle("show");

            if (!mainModal.classList.contains("show")) {
                mainCenter.style.overflow = "auto";
            }
        }
    });
}

export default setSettingModal;
