import React, { useMemo, useState } from 'react';

function MemoTest02_1(props) {
    console.log("컴포넌트")
    const [query, setQuery] = useState("")
    const items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"]

    // includes()는 특정값을 포함하고 있으면 true를 반환
    // query가 변경되면 렌더링이된다.
    const filterItem = useMemo(() => {
        console.log("useMemo 안")  
        // toLowerCase() : 문자열을 소문자로 변환해 비교나 검색, 
        // 데이터 정규화(normalization) 등 다양한 작업에 유용합니다. 원본 문자열이 유지된다.
        return items.filter((k) => k.toLowerCase().includes(query.toLowerCase()));
    }, [query]);

    return (
        <div>
            <h3>Memo 사용 예제</h3>
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filterItem.map((k, index) => (
                    <li key={index}>{k}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemoTest02_1;