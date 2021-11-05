import { useState } from "react";
import List from "../List";

function Todo() {
  const [note, setNote] = useState(null);
  const [memo, setMemo] = useState([]);
  const onChangeHandler = (e) => {
    // e is the event the user has typed
    console.log("current value", e.target.value); //we are seeing what the user typed //e.target.value is how we can get the value from what the user has typed
    setNote(e.target.value); //this will store the current item of what the user has typed
  };

  const addMemotoList = () => {
    setMemo([...memo, { item: note, key: Date.now() }]);
    setNote(""); // erase the note after the user adds it
  };

  return (
    <div className="Todo-App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input
              placeholder="Add Notes"
              value={note}
              onChange={onChangeHandler}
            />
            <button onClick={addMemotoList}>+</button>
          </div>
          <List memo={memo} setMemo={setMemo} />
        </div>
      </header>
    </div>
  );
}
export default Todo;
