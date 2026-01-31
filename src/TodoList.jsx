import  "./TodoList.css";
import { useState } from "react";


function TodoList() {

    let [todos, settodos] = useState(["Sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        console.log("Adding a new task in todo");
        settodos([...todos, newTodo]);
        setNewTodo("");
    };

    let UpdateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    return ( 
        <div className="todolist"> 
            <input placeholder="add a task" className="inp" value={newTodo} onChange={UpdateTodoValue}></input>
             <br /> <br />
            <button className="btn" onClick={addNewTask}>Add Task</button>
            <br /> <br /> <br /> <br />
            <hr/>
            <h1>Task Todo</h1>
            <ul className="list">
                {todos.map((todo) =>  {
                    return <li>{todo}</li>
                })}
            </ul>
        </div>
     );
}

export default TodoList;