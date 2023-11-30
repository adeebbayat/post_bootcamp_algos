nums = [2,3,1,1,4]

var canJump = function(nums) {
    var goal = nums.length - 1;
    for (var i = (nums.length-1); i>=0; i--)
    {
        if (nums[i]+i >= goal)
            goal = i;
    }

    if (goal == 0)
        return true;
    return false;
};

console.log(canJump(nums))