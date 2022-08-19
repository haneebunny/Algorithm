function solution(lottos, win_nums) {
  var answer = [];
  console.log(lottos);
  let min = 0;
  console.log(lottos);
  for (let i = 0; i < 6; ++i) {
    min += lottos.filter((el) => el === win_nums[i]).length;
  }
  console.log(min);
  // lottos에 있는 0의 개수를 세고 싶어

  let zero = 0;

  lottos.map((el) => {
    if (el === 0) zero++;
  });

  console.log(zero);
  let max = min + zero;

  answer.push(max);
  answer.push(min);

  return answer.map((el) => {
    if (el === 6) {
      return 1;
    } else if (el === 5) return 2;
    else if (el === 4) return 3;
    else if (el === 3) return 4;
    else if (el === 2) return 5;
    else return 6;
  });
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
