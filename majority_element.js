nums = [2,2,1,1,1,2,2,23,3,3,3,3,3,3,3,3,3,3,3,3,]


var majorityElement = function(nums) {
    var obj = {}
    for(let i = 0; i < nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            let temp = obj[nums[i]]
            temp++
            obj[nums[i]] = temp
        }
        else{
            obj[nums[i]] = 1;
        }
    }
    let values = Object.values(obj)
    let maxIndex = values.indexOf(Math.max(...values))
    let keys = Object.keys(obj)

    return keys[maxIndex]
};

console.log(majorityElement(nums))