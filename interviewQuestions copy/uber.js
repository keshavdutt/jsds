let temp = setTimeout;
let timer;

setTimeout = (fn,time)=>{
    clearTimeout(timer);
    timer = temp(fn,time)
}


// setTimeout(() => console.log("c"), 100);

// setTimeout(() => console.log("a"), 1000);

// setTimeout(() => console.log("b"), 2000);

const clearAllTimeouts = () => {
    while (timers.length) {
      clearTimeout(timers.pop());
    }
  };
  

let array = [];
const newSetTimeout = (fn, time) => {
    // array.push({ fn, time, createdAt: Date.now() })
    // scheduleTimeOuts()
    let elapsedTime = Date.now();
    let remainingTime = time - elapsedTime;
    if (remainingTime > 0) {
        setTimeout(fn, remainingTime);
    } else {
        fn();
    }

};


const scheduleTimeOuts = () => {
    // clearAllTimeouts()
    array.forEach((item) => {
        let elapsedTime = Date.now() - item.createdAt;
        let remainingTime = item.time - elapsedTime;
        if (remainingTime > 0) {
            setTimeout(item.fn, remainingTime);
        } else {
            item.fn();
        }

    })
}


// // Test newSetTimeout function
newSetTimeout(() => {
    console.log('called 1st time at', Date.now());
}, 2000);

newSetTimeout(() => {
    console.log('called 2nd time at', Date.now());
}, 3000);

newSetTimeout(() => {
    console.log('called 3rd time at', Date.now());
}, 5000);