import {RiDeleteBinLine, RiRestartLine} from "react-icons/ri";
import Button from "../UI/Button";
import style from "./TodosActions.module.css"

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosCount}) {
    return (
        <div className={style.todoActionContainer}>
            <Button title="Reset Todos" onClick={resetTodos}>
                <RiRestartLine />
            </Button>
            <Button title="Clear Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosCount}>
                <RiDeleteBinLine />
            </Button>
        </div>
    )
}

export default TodosActions