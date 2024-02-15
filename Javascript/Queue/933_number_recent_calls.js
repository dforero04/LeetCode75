/*
You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

 - RecentCounter() Initializes the counter with zero recent requests.
 - int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
 
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

 Your RecentCounter object will be instantiated and called as such:
 var obj = new RecentCounter()
 var param_1 = obj.ping(t)
*/

/*
// Function and prototype notation

var RecentCounter = function () {
  // Initialize with zero recent requests
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
  // Add the time to the queue
  this.queue.push(t);

  // As long as the first call in the queue in >= t - 3000, keep it in the queue
  while (this.queue[0] < t - 3000) this.queue.shift();

  // Return the length of the queue
  return this.queue.length;
};
*/

// ES2015 Class notation
class RecentCounter {
  constructor() {
    // Initialize with zero recent requests
    this.queue = [];
  }
  ping(t) {
    // Add the time to the queue
    this.queue.push(t);

    // As long as the first call in the queue in >= t - 3000, keep it in the queue
    while (this.queue[0] < t - 3000) this.queue.shift();

    // Return the length of the queue
    return this.queue.length;
  }
}

// var recentCounter = new RecentCounter();
// console.log(recentCounter.ping(1));
// console.log(recentCounter.ping(100));
// console.log(recentCounter.ping(3001));
// console.log(recentCounter.ping(3002));
module.exports = RecentCounter;
