import { CiTextAlignLeft } from "react-icons/ci";
import "./Input.css";
import {useState} from "react";


const Input = ({addTodo}) => {
  const [text, setText] = useState("");
  const [showHide, setShowHide] = useState(false);
  
  const onAdd=()=>{
    addTodo((prev)=> [...prev, {todo: text, desc: text, id:prev.length + 1}])
    setText(" ")
  }

  const handTextChange=(ex)=>{
    setText(ex.target.value)
  }

  const changeEffect =(e)=>{
    handTextChange(e);
    if(text.length <= 1){
      setShowHide(false)
      console.log(text.length)
    }else{
      setShowHide(true)
    }
  }
 
  
  return (
    <div className="InputContainer">
        <div className="InputHolder">
        <div className="InputIcon">
        <CiTextAlignLeft />
        </div>
        <input placeholder="add a todo..." onChange={changeEffect} value={text}/>
        {showHide && <button onClick={onAdd}>submit</button>}
    </div>
    </div>
  )
}

export default Input