export const InputToDo = (props) => {
   const { toDoText, onChange, onClick } = props
   return (
      <div className="input-area">
		<input placeholder="ToDoを入力" value={toDoText} onChange={onChange}/>
		<button onClick={onClick}>追加</button>
      </div>
   ) 
}
 
