// Rain water trapping problem - find the max rain water hold by the building

//output = 10

// water[i] = min(maxL -maxR)- array[i]

let array = [3, 0, 0, 2, 0, 4]
let maxL = [];
let maxR = [];
let water = [];
maxL[0] = array[0];
maxR[array.length-1] = array[array.length-1]

for (let i = 1; i < array.length; i++) {
    const element = array[i];
    maxL[i] = Math.max(maxL[i-1], element);
}

for (let i = array.length-2; i >=0; i--) {
    const element = array[i];
    maxR[i] = Math.max(maxR[i+1], element)
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    water[i] = Math.min(maxL[i], maxR[i])-array[i]
}

let sum = 0; 
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum+water[i]
}
console.log(maxL, maxR, water, sum)
