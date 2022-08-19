function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; ++i) {
    console.log(commands[i][1]);

    // i부터 j까지 자른다.
    arr = array.slice(commands[i][0] - 1, commands[i][1]);
    console.log(arr);

    // 오름차순으로 정렬한다.
    arr.sort(function (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
    console.log(arr);

    // 그 배열에서 k번째 숫자를 answer에 넣는다.
    answer.push(arr[commands[i][2] - 1]);
  }

  console.log(answer);
  return answer;
}
