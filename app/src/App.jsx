import CharacterCounter from "./components/CharCount";
import LiveClock from "./components/Clock";
import LanguageGreeting from "./components/Lang";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";

function App(){

  return(<>
  <LanguageGreeting/>
  <TodoList/>
  <LiveClock/>
  <CharacterCounter/>
  <ThemeToggle/>
  
  
  
</>)
}
export default App;
