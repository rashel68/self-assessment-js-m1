let numbers = [1, 5, 4, 3, 5, -4, 7, 6];
let positveNumber = [];
for (const element of numbers) {
    if (element < 0) {
        break;
    } else {
        positveNumber.push(element);
    }
}
// console.log(positveNumber);