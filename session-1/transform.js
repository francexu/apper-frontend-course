function transform(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= array[i];
    }

    array.sort((a, b) => a - b);
    return array;
}

const nums = [4,9,5,3,8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)