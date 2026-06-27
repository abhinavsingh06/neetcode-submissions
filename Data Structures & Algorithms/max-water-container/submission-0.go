func maxArea(heights []int) int {
 left := 0;
 right := len(heights) -1;
 res := 0;

 for left < right {
    area := (right - left) * min(heights[left], heights[right]);
    if area > res {
        res = area
    }
    if heights[left] < heights[right] {
        left++;
    }else {
        right --;
    }
 }
 return res
}

func min(a, b int) int {
    if a < b { return a }
    return b
}