haystack = "abc"
needle = "c"

var strStr = function(haystack, needle) {
    haystack.split("")
    needle.split("")
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            let counter = 0
            for(let j = 0; j < haystack.length;j++){
                if(j >= needle.length){
                    continue
                }
                if(haystack[i+j] === needle[j]){
                    counter++
                    console.log("this is counter", counter)
                    console.log("this is i", i)
                }
            }
            if(counter === needle.length){
                return i
            }
        }
    }
    return -1
};

console.log(strStr(haystack,needle))