
//Exercise 1: Server Health Monitoring.
//You are to use your brief knowledge on Node Events to provide a short simulation
//of the following.We did something similar similar yesterday but to simulate a 
//system that listens to chat messages and logs them.A server might emit events
//when certain thresholds are met. For instance, a monitoring system can emit an
//'overload' event when CPU or memory usage goes too high.

import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.once("data-20", () => {
    console.log("used 20% of storage");
});

eventEmitter.once("data-40", () => {
    console.log("used 40% of storage");
});

eventEmitter.once("data-60", () => {
    console.log("used 60% of storage");
});

eventEmitter.once("data-80", () => {
    console.log("used 80% of storage"); // Fixed typo
});

eventEmitter.once("data-100", () => {
    console.log("overload!! 100% used storage full");
});

setTimeout(() => {
    eventEmitter.emit("data-20");
}, 1000);

setTimeout(() => {
    eventEmitter.emit("data-40");
}, 2000);

setTimeout(() => {
    eventEmitter.emit("data-60");
}, 3000);

setTimeout(() => {
    eventEmitter.emit("data-80");
}, 4000);

setTimeout(() => {
    eventEmitter.emit("data-100");
}, 5000);
