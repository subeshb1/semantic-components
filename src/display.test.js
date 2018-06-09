
const Display = require("./components/addons/display");
const {
  filterRanges,
  checkRange,
  shouldDisplay,
  Computer,
  getInnerWidth,
  inRange,
  LargeScreen,
  Mobile,
  Tablet
} = Display;

describe("Testing Inrange", () => {
  it("should return true", () => {
    const range = Mobile;
    const result = inRange(range, 100);
    expect(result).toEqual(true);
  });
  it("should return false", () => {
    const range = {};
    const result = inRange(range, 100);
    expect(result).toEqual(false);
  });
  it("should return false", () => {
    const range = Computer;
    const result = inRange(range, 2000);
    expect(result).toEqual(false);
  });
});

describe("Testing checkRange", () => {
  it("Checks if range lies inside ", () => {
    const range = Mobile;
    const result = checkRange(range, 100);
    expect(result).toBe(true);
  });
  it("Checks if range lies inside 2", () => {
    const range = Mobile;
    const result = checkRange(range, 1000);
    expect(result).toBe(false);
  });
  it("Checks undefined range return true", () => {
    const range = undefined;
    const result = checkRange(range, 1000);
    expect(result).toBe(true);
  });
  it("Checks undefined range return true", () => {
    const range = undefined;
    const result = checkRange(range, 1000);
    expect(result).toBe(true);
  });
});

describe("Testing shoulldDisplay", () => {
  it("should return true", () => {
    const show = true;
    const range = Mobile;
    const result = shouldDisplay(show, range, 100);
    expect(result).toBe(true);
  });
  it("should return false", () => {
    const show = true;
    const range = Mobile;
    const result = shouldDisplay(show, range, 1000);
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const show = false;
    const range = Mobile;
    const result = shouldDisplay(show, range, 100);
    expect(result).toBe(false);
  });
  it("should return true", () => {
    const show = undefined;
    const range = Mobile;
    const result = shouldDisplay(show, range, 100);
    expect(result).toBe(true);
  });
  it("should return true (range undefined)", () => {
    const show = true;
    const range = undefined;
    const result = shouldDisplay(show, range, 100);
    expect(result).toBe(true);
  });
  it("should return true (show true)", () => {
    const show = true;
    const range = undefined;
    const result = shouldDisplay(show, range, 100);
    expect(result).toBe(true);
  });
  it("should return false (show false)", () => {
    const show = false;
    const range = undefined;
    const result = shouldDisplay(show, range, 100);
    expect(result).toBe(false);
  });
});

describe("Filtering show ranges", () => {
  it("Should filter out the ranges", () => {
    const ranges = [
      { range: Mobile, show: false },
      { range: Tablet, show: false },
      { range: Computer, show: false }
    ];
    const result = filterRanges(ranges, 100);
    expect(result).toEqual([{ range: Mobile, show: false }]);
  });
  it("Should filter out the ranges", () => {
    const ranges = [
      { range: Mobile, show: false },
      { range: Tablet, show: false },
      { range: Computer, show: false },
      { range: { min: 0, max: 1200 }, show: false }
    ];
    const result = filterRanges(ranges, 100);
    expect(result).toEqual([
      { range: Mobile, show: false },
      { range: { min: 0, max: 1200 }, show: false }
    ]);
  });
});
