const nums = [];

function oddNumbers() {

    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
            nums.push(i);
        }
    }
}
oddNumbers();

console.log(nums);
