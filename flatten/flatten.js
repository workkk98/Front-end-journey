let arr = [1,[2,[3,4]],[5,6]];

function flatten (arr) {
    let newArr = [];
    if(Array.isArray(arr)) {
        arr.forEach(function (element,index) {
            if(Object.prototype.toString.call(element) == "[object Array]") {
                newArr = newArr.concat(flatten(element));
            } else {
                newArr.push(element);
            }
        });
    }
    return newArr;
}

console.log(flatten(arr));