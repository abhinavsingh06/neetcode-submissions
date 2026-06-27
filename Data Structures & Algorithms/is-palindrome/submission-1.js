class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let left = 0;
        let right = newS.length - 1;

        while(left < right){
            if(newS[left] == newS[right]){
                left++;
                right--;
            }else {
                return false;
            }
        }
        return true;
    }
}