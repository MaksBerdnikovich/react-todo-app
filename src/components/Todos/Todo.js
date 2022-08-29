import {RiCheckFill, RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import style from "./Todo.module.css"

function Todo({todo, deleteTodo, toggleTodo}) {
    return (
        <div className={`${style.todo} ${todo.isCompleted ? style.completedTodo: ''}`}>
            <RiTodoFill className={style.todoIcon}/>
            <div className={style.todoText}>{todo.text}</div>
            <RiDeleteBin2Line
                className={style.deleteIcon}
                onClick={() => deleteTodo(todo.id)}
            />
            <RiCheckFill
                className={style.checkIcon}
                onClick={() => toggleTodo(todo.id)}
            />
        </div>
    )
}

export default Todo