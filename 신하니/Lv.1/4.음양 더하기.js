function solution(absolutes, signs) {
  var answer = 123456789;
  let arr = [];
  for (let i = 0; i < absolutes.length; ++i) {
    signs[i] ? arr.push(absolutes[i]) : arr.push(absolutes[i] * -1);
  }
  answer = arr.reduce((acc, cur) => acc + cur);
  return answer;
}
