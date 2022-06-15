function dbChecksum() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    if (settingDB.length > 4) {
        console.log("DB문제발견");
        let checkSum = settingDB.slice(0, 4);
        console.log(checkSum);
        localStorage.setItem("settingDB", JSON.stringify(checkSum));
        console.log("조치완료");
    } else {
        return;
    }
}

export default dbChecksum;
