// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should 
// be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n = 3;

var merge = function(nums1, m, nums2, n) {
    // variable to track index position of first array nums1 in reverse
    let first = m - 1 ;
    // variable to track index position of first array in nums2 in reverse
    let second = n - 1;

    // for loop to iterate over array in reverse
    for (let i = m + n - 1; i >= 0; i--)
    {
        // breaks loop if all elements in second array nums2 are iterrated
        if ( second < 0)
        {
            break
        }
        // since the array are sorted and are meant to update array nums1 in place
        // we first check if the final index position in nums 1 is greater than nums2
        if ( nums1[first] > nums2[second]  )
        {
            // if nums1 element is greater than nums2 we assign the current nums1 [i] index value to nums 1 [first]
            nums1[i] = nums1[first];
            // decrese first value to compare next elemnt
            first--;
        }
        // if nums1 first is not greater than nums2[second] than we apply the value of nums2[second] to nums1 at index [i]
        else
        {
            nums1[i] = nums2[second];
            //decrese second to iterate over next element
            second--;
        }
    }
};