function solution(nums) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i < nums.length; ++i) {
    if (arr.includes(nums[i]) === false) {
      arr.push(nums[i]); // 중복거르기
    }
  }

  console.log(arr.length); // 선택가능한 폰켓몬 종류 수

  console.log(nums.length / 2); // 선택가능한 폰켓몬 수

  return arr.length > nums.length / 2 ? nums.length / 2 : arr.length; // 둘 중 더 큰 걸 return
}
