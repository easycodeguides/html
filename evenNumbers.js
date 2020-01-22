const nums = [];

function evenNumbers() {

    for (let i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            nums.push(i);
        }
    }
}
evenNumbers();

console.log(nums);

