prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        let current = prices[i];
        if(prices[i+1]>prices[i]){
            profit += prices[i+1]-prices[i]
        }
    }
    return profit
};

console.log(maxProfit(prices))