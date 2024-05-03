// const defaultConsoleLog = console.log;
// console.log = () => {
//   defaultConsoleLog("Hello World");
// };

// console.log("Test");
// console.log("Abcd");

// mirip2 seperti ini
// checkBatteryStatusFile.checkBatteryStatus = () => {
//   console.log("checkBatteryStatus terpanggil");
// };

const checkBatteryStatusFile = require("./checkBatteryStatus.js");

jest.mock("./checkBatteryStatus.js");

describe("beforeAll and beforeEach", () => {
  console.log("checkBatteryStatusFile", checkBatteryStatusFile);
  checkBatteryStatusFile.checkBatteryStatus.mockImplementation(() => {
    console.log("checkBatteryStatus terpanggil");
  });
  let value = 0;

  beforeAll(() => {
    value = 1;
  });

  beforeEach(() => {
    value += 1;
  });

  afterEach(() => {
    value = 0;
    checkBatteryStatusFile.checkBatteryStatus.mockClear();
  });

  afterAll(() => {
    // clean up global instance/variable
  });

  it("should have 2 as value", () => {
    console.log(
      "checkBatteryStatusFile.checkBatteryStatus(80)",
      checkBatteryStatusFile.checkBatteryStatus(80)
    );

    checkBatteryStatusFile.checkBatteryStatus.mockReturnValue("Lowbat");

    expect(checkBatteryStatusFile.checkBatteryStatus).toHaveBeenCalled();
    expect(checkBatteryStatusFile.checkBatteryStatus(100)).toBe("Lowbat");
    expect(value).toBe(2);
  });

  it("should have 1 as value", () => {
    expect(value).toBe(1);
  });
});
