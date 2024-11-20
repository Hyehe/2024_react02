import React, { useState } from 'react';
// import '../step02/inputExam.css'
import { Button } from '@mui/material';

function TodoList(props) {
  // todos: 현재 할 일 목록을 저장하는 상태 변수, 
  // 초기값으로 ['Learn React', 'Build a project'] 배열을 사용
  // setTodos: todos 상태를 변경하기 위한 함수
  // React 훅으로 컴포넌트의 상태를 관리, 상태가 변경되면 컴포넌트가 다시 렌더링됨
  const [todos, setTodos] = useState(['Learn React', 'Build a project'])
  const [newTodo, setNewTodo] = useState('')

  // 리스트에서 삭제
  const deleteTodo = (index) =>{
    // todos.filter() 메서드를 사용해 새로운 배열을 생성
    // (_,i) => filter메서드의 콜백 함수 매개변수
    // 첫번째 매개변수 _ 는 배열의 각 요소를 의미한다.(지금은 사용하지 않으므로 _)
    // 두번째 매개변수 i 는 인덱스를 의미한다.
    setTodos(todos.filter((_,i)=> i !== index)); // 조건 i !== index: index와 일치하지 않는 요소만 남김.
  }

  // 삽입
  const addTodo = ()=>{
    if (newTodo.trim !== '') {
      // 기존 todos 배열에 새로운 정보를 가진 newTodo를 추가한다.
      setTodos([...todos, newTodo.trim()])
      setNewTodo('');
    }
  }
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {/* 
        <li>Learn React {' '}  &nbsp;
        <Button variant="outlined">Delete</Button></li>
        <li>Build a project {' '}  &nbsp;
        <Button variant="outlined">Delete</Button></li> 
        */}
        {todos.map((k, index) =>(  // todos.map: todos 배열의 각 항목을 순회하며 JSX로 변환
          // key 속성 : React는 효율적인 렌더링을 위해 key를 사용(여기선 각 요소의 인덱스를 key로 지정)
          <li key={index}>
            {/* 콜백 매개변수 : k: 배열의 요소 값(할 일 내용), index: 배열 요소의 인덱스 */}
            {k}{' '}  
            {/* deleteTodo(index) 호출 : 삭제 버튼 클릭 시 해당 인덱스를 deleteTodo 함수에 전달. */}
            <button onClick={()=> deleteTodo(index)}>Delete</button> 
          </li>
        ))}
      </ul>
      <p>Typing:{newTodo}</p> 
      <input 
          type='text'
          value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
        /> &nbsp;
      <Button variant="outlined" onClick={addTodo}>Add New Task</Button><br/><br/><br/>
    </div>
  );
}


export default TodoList;