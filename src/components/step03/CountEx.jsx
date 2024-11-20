import { Button } from '@mui/material';
import React, { useState } from 'react';

function CountEx(props) {
  // 화면은 변경되지 않는다.
  // let count = 7;
  // const setCount = (num) => {
  //   count = num
  //   console.log(count);
  // }

  // 값이 변경돼서 화면을 재렌더링할 때 사용
  // useState => state(값)가 업데이트되면 재렌더링
  // const[7, setCount]

  // const [count, setCount] = useState(2); // 초기값
  // return (
    //   <div>
    //     <h2>Count : {count}</h2>
    //     <Button variant="outlined"
    //       onClick={() => setCount(count + 1)}
    //     >+</Button>
    //     <Button variant="outlined"
    //       onClick={() => setCount(count - 1)}
    //     >-</Button>
    //   </div>
    // );
    
  const [count, setCount] = useState(2); // 초기값
  const increment = ()=>setCount(count+1)
  const decrement = ()=>setCount(count-1)
  return (
    <div>
      <h2>Count : {count}</h2>
      <Button variant="outlined"
        onClick={increment}
      >+</Button>
      <Button variant="outlined"
        onClick={decrement}
      >-</Button>
    </div>
  );
}

export default CountEx;