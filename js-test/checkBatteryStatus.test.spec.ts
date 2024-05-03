const { checkBatteryStatus } = require('./checkBatteryStatus');

describe('checkBatteryStatus check', () => {
  it('should return Full Power if percentage is greater than 80', () => {
    expect(checkBatteryStatus(100)).toBe('Full Power');
    expect(checkBatteryStatus(90)).toBe('Full Power');
    expect(checkBatteryStatus(80.1)).toBe('Full Power');
  });

  it('should return Aman if percentage is greater than 20 and below or equal with 80', () => {
    expect(checkBatteryStatus(80)).toBe('Aman');
    expect(checkBatteryStatus(50)).toBe('Aman');
    expect(checkBatteryStatus(20.1)).toBe('Aman');
  });

  it('should return Lowbat if percentage is below or equal with 20', () => {
    expect(checkBatteryStatus(20)).toBe('Lowbat');
    expect(checkBatteryStatus(10)).toBe('Lowbat');
    expect(checkBatteryStatus(0)).toBe('Lowbat');
  });

  it('should return Invalid Data if percentage is not a number or invalid value', () => {
    expect(checkBatteryStatus('abc')).toBe('Invalid Data');
    expect(checkBatteryStatus(NaN)).toBe('Invalid Data');
  });
});
