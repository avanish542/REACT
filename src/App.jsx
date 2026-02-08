import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx"
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import GuessGame from "./GuessGame.jsx";


function App() {
 

  return (
    <> 
      <h2 className="block" style={{textAlign:"center"}}>Blockbuster Deals | Shop Now</h2>  
      <ProductTab />
      <TodoList />
      <LudoBoard />
      <Button /> 
      <Form /> 
      <Counter /> 
      <LikeButton />
      <Lottery/> 
      <GuessGame />
      <Simple />       
    </>
  )
}

export default App
