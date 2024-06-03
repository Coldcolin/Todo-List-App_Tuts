import { useState } from "react";
import "./Todo.css";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const Todo = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [text, setText] = useState("");

  const checkEditInput=(e)=>{
    setText(e.target.value);
    if(text.length > 0){
      setShowSave(!showSave)
    }
  }

  const deleteTodo=()=>{
    const filteredList = props.list.filter((e)=> e.id !== props.id)
    props.setList(filteredList)
  }
  const editTodo=()=>{
    const editedList = props.list.map((e)=> {
      if(e.id === props.id){
        e.todo = text;
        e.desc = text;
        return e;
      }else{
        return e;
      }
    })
    props.setList(editedList);
    setShowMenu(false);
    setShowEdit(false)
  }
 
  return (
    <div className="TodoContainer">
        <div className="TodoWrapper">
        <div>
            <input type="checkbox"/>
            {showEdit?<input type="text" value={text} onChange={(e)=> checkEditInput(e)}/>:<div>
                <h3>{props.todo}</h3>
                <p>{props.desc}</p>
            </div>}
        </div>
        <div className="TodoEllipses" onClick={()=> {setShowMenu(!showMenu); setShowEdit(false)}}>
        <IoEllipsisHorizontalSharp />
        </div>
       {showMenu && <div className="TodoMenu" style={{color: "black"}}>
          <p onClick={deleteTodo}>Delete</p>
          {showSave?<p onClick={editTodo}>Save</p>:<p onClick={()=> setShowEdit(!showEdit)}>Edit</p>}
        </div>}
        </div>
    </div>
  )
}

export default Todo