class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i = 0; i < nums.length; i++) {
            const numeroAtual = nums[i];
                
            const restoDaLista = nums.slice(i + 1);
            
            // Verifica se o número atual aparece nesse resto da lista
            if (restoDaLista.includes(numeroAtual)) {
                return true;
            }
        }
        return false
    }
}



// example 1
const arr = [1,2,3,3,4,5,6,7,8]
const teste1 = new Solution()
console.log(teste1.hasDuplicate(arr))