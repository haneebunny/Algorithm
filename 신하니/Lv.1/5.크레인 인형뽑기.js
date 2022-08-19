function solution(board, moves) {
  let basket = [];
  // 1번 뽑을거ㄱ야야ㅑ야야 왜이래
  for (let j = 0; j < moves.length; ++j) {
    for (let i = 0; i < board.length; ++i) {
      if (board[i][moves[j] - 1] !== 0) {
        basket.push(board[i][moves[j] - 1]);
        board[i][moves[j] - 1] = 0; // 뽑았다!
        break;
      }
    }
  }
  // 바구니에 담았다아아아!!!!! i랑 j바꿔줘야 하지만 일단 ㄱㄱ
  // for(let i =0; i < basket.length; ++i ) {
  //   // while(basket[i]===basket[i+1]) {
  //     while(basket[i]===basket[i+1]) {
  //   	if(basket[i]===basket[i+1]) {
  //       basket.splice(i, 2)
  //     }
  //   	}
  // }

  //   console.log(basket[0])
  //   let i = 0;
  //   let onOff = false;
  // 	 while(i<basket.length){
  //    if(basket[i]===basket[i+1]) {
  //     basket.splice(i,2);
  //         i = 0;
  //       }

  //     ++i
  //     }
  let count = 0;
  for (let i = 0; i < basket.length; ++i) {
    if (basket[i] === basket[i + 1]) {
      basket.splice(i, 2);
      i = -1;
      count += 2;
    }
  }
  //    for(let i = 0; i<moves.length; ++i) {
  // console.log(board.map((el)=> console.log(el[0]===moves[i])))
  //  }
  return count;
}
