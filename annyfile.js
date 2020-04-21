
let n = 10;

thisNumber:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j>i; j++) {
        if (i % j== 0) continue thisNumber;
    }
    alert (i);
}
    




/*function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return twoSum;
            }
        }
    } 
}*/






/*twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return new int[] { i, j };
            }
        }
    }
    throw new IllegalArgumentException("No two sum solution");*/
