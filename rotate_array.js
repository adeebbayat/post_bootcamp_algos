nums = [1,2,3,4,5,6,7,8,8,2,3,4,23,];
k = 23;

var rotate = function(nums, k) {
    if (k === 0) return;
    k = k % nums.length;
    nums.splice(nums.length - k,k).reverse().forEach(
        value => nums.unshift(value)
    );
    console.log(nums)
};

rotate(nums,k)