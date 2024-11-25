import React, { useRef, useState } from 'react';

// useRef
// 1. 값의 유지 : 값의 변화를 추적하지만 값이 변경되더라도 렌더링이 되지 않는다.
//               불필요한 렌더링 방지
// 2. DOM 요소 참조 : focus()  
function RefTest01(props) {
    const [count, setCount] = useState(0);
    const countRef = useRef(5);

    // Ref의 값을 호출할때는 current(현재값 기억)
    console.log("count : ", count, "countRef : " + countRef.current);

    // 방법 2
    const statePlus = () => {
        setCount(count + 1);
    }

    const refPlus = () => {
        countRef.current = countRef.current + 1;
        console.log("count-안 : ", count, "countRef-안 : " + countRef.current);
    }

    return (
        <div>
            <p>State : {count} </p>
            <p>Ref : {countRef.current} </p>
            {/* 방법 1 :화살표 함수 : ()=>setCount(count+1)  */}
            {/* <button onClick={()=>setCount(count+1)}>State 올리기</button>  &nbsp; */}
            {/* 방법 2 */}
            <button onClick={statePlus}>State 올리기</button>  &nbsp;
            {/* useRef는 렌더링을 하지 않아서 화면 숫자는 그대로 바뀌지 않고 나온다. */}
            <button onClick={refPlus}>Ref 올리기</button> <hr/>
        </div>
    );
}

export default RefTest01;