import  "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function TodoList() {

    let [todos, settodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        console.log("Adding a new task in todo");
        settodos((prevtodos) => {
            return [...prevtodos, {task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    };
  
    let UpdateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deletetodo = (id) => {
        settodos((prevtodos) => {
            return prevtodos.filter(todo => todo.id !== id);
        });
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
                 return <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;  &nbsp;  &nbsp;
                    <button style={{backgroundColor:"white"}} onClick= {() => deletetodo(todo.id)}>delete</button>
                </li>
                })}
            </ul>
        </div>
     );
}

export default TodoList;