const RecentCounter = require("../933_number_recent_calls");

it("should return the appropriate length of the queue for each iteration", () => {
  const recentCounter = new RecentCounter();
  expect(recentCounter.ping(1)).toEqual(1);
  expect(recentCounter.ping(100)).toEqual(2);
  expect(recentCounter.ping(3001)).toEqual(3);
  expect(recentCounter.ping(3002)).toEqual(3);
});
