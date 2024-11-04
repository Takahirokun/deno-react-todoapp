import { useState } from 'react'
import { InputToDo } from './components/InputToDo.jsx'
import { IncompleteToDos } from './components/IncompleteToDos.jsx'
import { CompleteToDos } from './components/CompleteToDos.jsx'

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
	  <InputToDo toDoText={toDoText} onChange={onChangeToDoText} onClick={onClickAdd} />
	  <IncompleteToDos todos={incompleteToDos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
	  <CompleteToDos todos={completeToDos} onClick={onClickBack} />
    </>
  )
}

export default ToDo
