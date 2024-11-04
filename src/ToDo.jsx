import { useState } from 'react'

function ToDo() {
  const [toDoText, setToDoText] = useState("")
  const [incompleteToDos, setIncompleteToDos] = useState(["ToDoです1","ToDoです2"])
  const [completeToDos, setCompleteToDos] = useState(["ToDo1","ToDo2"])


  const onChangeToDoText = (event) => setToDoText(event.target.value)

  return (
    <>
      <div className="input-area">
		<input placeholder="ToDoを入力" value={toDoText} onChange={onChangeToDoText}/>
		<button>追加</button>
      </div>
      <div className="incomplete-area">
		<p className="title">未完了のToDoです</p>
		<ul>
		  {incompleteToDos.map((todo) => (
 			<li key={todo}>
		      <div className="list-row">
		        <p className="todo-item">{todo}</p>
		        <button>完了</button>
		        <button>削除</button>
		      </div>
		    </li>
			)
		  )}
		</ul>
      </div>
      <div className="complete-area">
 		<p className="title">完了済みのToDoです</p>
		<ul>
 		 {completeToDos.map((todo) => (
 			<li key={todo}>
		      <div className="list-row">
		        <p className="todo-item">{todo}</p>
		        <button>戻す</button>
		      </div>
		    </li>
			)
		  )}
		</ul> 
	  </div>
    </>
  )
}

export default ToDo
