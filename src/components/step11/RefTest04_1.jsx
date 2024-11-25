import React, { useEffect, useRef, useState } from 'react';

function RefTest04_1(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const btn1 = useRef(0);
  const btn2 = useRef(0);

  useEffect(()=>{
    btn1.current = btn1.current + 1;
    console.log("렌더링 수 : " + btn1.current)
  },[count])
  
  useEffect(()=>{
    btn2.current = btn2.current + 1;
    console.log("렌더링 수 : " + btn2.current)
  },[count2])

  return (
    <div>
      <p>State : {count+count2}</p>
      <p>버튼1 클릭횟수 : {btn1.current}</p>
      <p>버튼2 클릭횟수 : {btn2.current}</p>
      <p>전체 클릭횟수 : {btn1.current+btn2.current}</p>
      <button onClick={()=>setCount(count+4)}>버튼1(+4)</button>
      <button onClick={()=>setCount2(count2+3)}>버튼2(+3)</button><hr/>
    </div>
  );
}

export default RefTest04_1;