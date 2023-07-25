// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following 
// things:
//    Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
//    The remaining elements of nums are not important as well as the size of nums.
//    Return k.

let nums = [0,1,2,2,3,0,4,2];
let val = 2;

var removeElement = function(nums, val) {
    // first check if array value is not greater than 0 return 0
    if (nums.length == 0)
    {
        return 0;
    }

    // additoinal variable to act as a tracker to compare against current i index element
    let j  = 0;

    // iterate over array in ascending order
    for ( let i = 0; i < nums.length; i++ )
    {
        // the logic of this condition is that [i] will always increment through the loop
        // j is used as both a tracker and value setter to replace elements that are equal to val during array iteration
        // with j as the tracker varible that only increments when the current element in not equal to val
        // the increment i element comparision will be passed over and neglected when a match with val occurs
        if ( nums[i] !== val )
        {
            //nums is updated with nums[j] only when nums[i] is not equal to val
            nums[j] = nums[i];
            j++
        }
    }
    // we return j when the array has been updated in place removing all the elements with in the index values up to j times 
    return j;
};