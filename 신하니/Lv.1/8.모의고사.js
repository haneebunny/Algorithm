// 모의고사

// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  let answer = [];
  // console.log(answers[0], answerTable[0][0])

  const score = answerTable.map((el, i) => {
    const info = answers.reduce((acc, cur, j) => {
      // console.log(cur, el[j%el.length]);
      // 현재값과 수포자가 찍을 답

      return acc + (el[j % el.length] === cur ? 1 : 0);
      // 답이 맞으면 1 더하고 아니면 더하지 않음
    }, 0);
    console.log(info);
    return { number: i + 1, score: info };
  });
  // el.score 중에 제일 큰값 저장
  const biggest = Math.max(
    ...score.map((el) => {
      return el.score;
    })
  );

  return score
    .filter((el) => {
      return el.score === biggest; // biggest랑 score 같은 애만 필터
    })
    .map((el) => {
      return el.number;
    });
}

solution([1, 3, 2, 4, 2]); // [ 1, 2, 3 ]
