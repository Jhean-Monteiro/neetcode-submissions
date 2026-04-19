class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Create the left pointer starting at index 0 (first element)
        let left = 0;

        // Create the right pointer starting at the last index of the array
        let right = numbers.length - 1;

        // Loop continues while the two pointers have not crossed (left < right)
        // This ensures we never use the same element twice
        while (left < right) {
            // Calculate the sum of the values currently pointed by the two pointers
            const sum = numbers[left] + numbers[right];

            // If the sum is exactly the target, we found the answer
            if (sum === target) {
                // Return the 1-based indices (as required by the problem)
                return [left + 1, right + 1];
            }

            // If the sum is still less than the target, we need a larger number
            // Since the array is sorted, we move the left pointer to the right
            else if (sum < target) {
                left++;
            }

            // If the sum is greater than the target, we need a smaller number
            // We move the right pointer to the left
            else {
                right--;
            }
        }
        // The problem guarantees that there is always exactly one solution,
        // so this return will never be executed in practice
        return [];
    }
}

let arr = [2, 7, 11, 15]
let target = 17

const solution = new Solution()
console.log(solution.twoSum(arr, target))