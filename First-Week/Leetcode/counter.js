function counter(x) {
    let countNum = x;
    let max = 50;

    return function() {
        if (countNum > max) {
            return "counter has reached its limit";
        } else {
            return countNum++;
        }
    }
}

const myCounter = counter(40); 
console.log(myCounter())