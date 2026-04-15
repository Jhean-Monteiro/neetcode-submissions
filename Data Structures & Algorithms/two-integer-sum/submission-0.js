class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Creates a hash map to store number -> index
        const indexByNumber = {}

        // Populate the map with each number and its index
        for(let i = 0; i < nums.length; i++) {
            indexByNumber[nums[i]] = i
            // nums = [3,4,5,6]
            // nums[i] i=0 3
            // nums[3] = 0 
        }

        // iterate through the array to find the complement
        for (let i = 0; i < nums.length; i++) {

            // Calculate the number needed to reach the target
            const complement = target - nums[i]

            // Check if complement exists in the map
            const complementExists = indexByNumber[complement] !== undefined

            // Make sure we never use the same element twice
            const isDifferentIndex = indexByNumber[complement] !== i

            // if the complement exists in the map ans it's not the same index
            // we found the pair that sums the target
            if (complementExists && isDifferentIndex) {
                return [i, indexByNumber[complement]]
            }
        }
        return [-1, -1]
    }
}

const solution = new Solution()

// Example 
const nums1 = [2, 7, 11, 15]
const target1 = 9
console.log("Exemplo 1:", solution.twoSum(nums1, target1)) 
// Output: [0, 1]
