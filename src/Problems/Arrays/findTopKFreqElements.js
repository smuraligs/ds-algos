function topKFrequent(nums, k) {
    let res = {};
    // const freq = new Array(nums.length + 1).fill([]);
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    nums.forEach(function(num, i) {
        res[num] = (res[num] || 0 ) + 1;
    })
    // console.log("res is ", res);
    Object.keys(res).forEach(function(key) {
        freq[res[key]].push(parseInt(key));
    });
    // console.log(freq);
    let out = [];
    for(let i=freq.length-1; i>=0; i--) {
        if(freq[i].length > 0) {
            out.push(...freq[i]);
            k -= freq[i].length;
            if(k<=0) {
                break;
            }
        }
    }
    return out;
}

console.log(topKFrequent([1,2,2,3,3,3], 2));
console.log(topKFrequent([7,7],1));
