/**
 * @param getGeolocation
 * 위도와 경도값을 반환함 : [위도, 경도]
 */
function getGeolocation() {
    let settingDB = JSON.parse(localStorage.getItem("settingDB"));
    if (settingDB[2].weatherEnable === "0") {
        console.log("날씨활성화됨");
        if (navigator.geolocation) {
            const geolocation = navigator.geolocation;
            geolocation.getCurrentPosition(
                async (position) => {
                    await console.log([
                        position.coords.latitude,
                        position.coords.longitude,
                    ]);
                },
                (error) => {
                    console.error(error);
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity,
                }
            );
        } else {
            console.log("GPS를 지원하지 않는 기종");
        }
    }
}

export default getGeolocation;
