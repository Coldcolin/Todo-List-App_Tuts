import { useState } from "react"
import "./TodoList.css"
import Date from "./components/Date/Date"
import Input from "./components/Input/Input"
import Todo from "./components/Todo/Todo"
import TodoHeader from "./components/TodoHeader/TodoHeader"

const TodoList=()=>{
    const [list, setList] = useState([])
    return(
        <div className="TodoListContainer">
            <main>
            <TodoHeader/>
            <Date/>
            <Input addTodo={setList}/>
            <div className="TodoListHolder">
                {
                    list.map((e)=>(
                        <div key={e.id}>
                            <Todo todo={e.todo} desc={e.desc} id={e.id} setList={setList} list={list}/>
                        </div>
                    ))
                }
            </div>
            </main>
        </div>
    )
}

export default TodoList