import { useState } from 'react'

function ToDo() {
  const [toDoText, setToDoText] = useState("")
  const [incompleteToDos, setIncompleteToDos] = useState([])
  const [completeToDos, setCompleteToDos] = useState([])


  const onChangeToDoText = (event) => setToDoText(event.target.value)
  const onClickAdd = () => {
	if (toDoText === "") return
	const newToDos = [...incompleteToDos,toDoText]
	setIncompleteToDos(newToDos)
	setToDoText("")
  }

  const onClickDelete = (index) => {
	const newToDos = [...incompleteToDos]
	newToDos.splice(index,1)
	setIncompleteToDos(newToDos)
  }

  const onClickComplete = (index) => {
	const newInCompleteToDos = [...incompleteToDos]
	newInCompleteToDos.splice(index,1)
	
	const newCompleteToDos = [...completeToDos, incompleteToDos[index]]
	setIncompleteToDos(newInCompleteToDos)
	setCompleteToDos(newCompleteToDos)

  }

  const onClickBack = (index) => {
  	const newCompleteToDos = [...completeToDos]
	newCompleteToDos.splice(index,1)

	const newInCompleteToDos = [...incompleteToDos,completeToDos[index]]
	setCompleteToDos(newCompleteToDos)
	setIncompleteToDos(newInCompleteToDos)
  }

  return (
    <>
      <div className="input-area">
		<input placeholder="ToDoを入力" value={toDoText} onChange={onChangeToDoText}/>
		<button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
		<p className="title">未完了のToDoです</p>
		<ul>
		  {incompleteToDos.map((todo, index) => (
 			<li key={todo}>
		      <div className="list-row">
		        <p className="todo-item">{todo}</p>
		        <button onClick={() => onClickComplete(index)}>完了</button>
		        <button onClick={() => onClickDelete(index)}>削除</button>
		      </div>
		    </li>
			)
		  )}
		</ul>
      </div>
      <div className="complete-area">
 		<p className="title">完了済みのToDoです</p>
		<ul>
 		 {completeToDos.map((todo, index) => (
 			<li key={todo}>
		      <div className="list-row">
		        <p className="todo-item">{todo}</p>
		        <button onClick={() => onClickBack(index)}>戻す</button>
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
