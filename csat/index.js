const date = new Date();
const computeDate = new Date(`${date.getFullYear()}-11-01`);
let csatDate;
// 0이 일요일 6이 토요일


for (let result = 0; result < 3; result++) {
    
}
if (computeDate.getDay() === 0) {
    csatDate = new Date(
        `${date.getFullYear()}-11-${computeDate.getDate() + 14}`
    );
}
