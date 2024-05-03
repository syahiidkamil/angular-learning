// req: persentase batere misalnya diatas 80% "Full Power"
// req: persentase batere diatas 20% tapi dibawah atau sama dengan 80% "Aman"
// req: persentase batere dibawah 20% berarti "Lowbat"

const checkBatteryStatus = (percentage) => {
  if (percentage > 80) {
    return "Full Power";
  } else if (percentage > 20 && percentage <= 80) {
    return "Aman";
  } else if (percentage <= 20) {
    return "Lowbat";
  } else {
    return "Invalid Data";
  }
};

module.exports = { checkBatteryStatus };
