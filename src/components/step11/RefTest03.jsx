import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const randCount = useRef(0);

    // 방법1
    // randCount.current = randCount.current + 1;
    // console.log('렌더링 수 : ', randCount.current)

    // {함수}, [의존성배열](=>한번만) 
    // 의존성배열이 없으면 렌더링될 때마다 실행된다. (위랑 같은 것)
    // 그러나 의존성 배열을 주면 골라서 [count]체크할 수 있다.
    useEffect(() => {
        randCount.current = randCount.current + 1;
        console.log('렌더링 수 : ', randCount.current)
    });


    return (
        <div>
            <p>State : {count}</p>
            <button onClick={() => setCount(count + 4)}>State 올려</button>
            <button onClick={() => setCount2(count2 + 3)}>State 올려</button>
        </div>
    );
}

export default RefTest03;