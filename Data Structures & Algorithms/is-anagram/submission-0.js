class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const param1 = [...s].sort((a, b) => a.localeCompare(b)).join('');
        const param2 = [...t].sort((a, b) => a.localeCompare(b)).join('');

        if (param1 === param2) {
            return true;
        }
        return false;
    }
}

// ex 1
const s = "adelreid"
const t = "eldaired"

const solution = new Solution()
solution.isAnagram(s,t)


// ex 2
const u = "marty"
const v = "elyel"

const solution2 = new Solution()
solution2.isAnagram(u,v)