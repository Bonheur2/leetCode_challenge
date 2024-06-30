function maxSubArray(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let maxValue = nums[0];
    let accNum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let calc = Math.max(nums[i], accNum + nums[i]);
        if (calc > maxValue) {
            maxValue = calc;
            accNum = calc;
        }
    }
    return maxSubArray;
}

// examples to test
const nums=[-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));