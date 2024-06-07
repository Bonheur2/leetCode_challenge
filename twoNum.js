// this program will add number of any array for target value

var twoNum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

// examples to test
const nums=[2,7,4,8];
const target=9;
console.log(twoNum(nums, target));