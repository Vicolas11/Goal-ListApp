import { useState, useRef } from "react";
import "./style.css";

const GoalForm = (props) => {
  let dataLen = props.dataLength;
  const enteredUserTitle = useRef()
  // const [enteredTitle, setEnteredTitle] = useState("");

  // const onChangeTitleHandler = (evt) => setEnteredTitle(evt.target.value);

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    props.onGoalAdded(enteredUserTitle.current.value)
    // Reset Input
    // setEnteredTitle('');
    enteredUserTitle.current.value = '';
  };

  return (
    
      <form onSubmit={onSubmitHandler}>
        <div className="goal-card">
        <label htmlFor="goal">Course Goal</label>
        <input
          type="text"
          id="goal"
          ref={enteredUserTitle}
          // value={enteredTitle}
          // onChange={onChangeTitleHandler}
          required />
          <div>
            <button className="goalBtn" type="submit">Add Goal</button>
          </div>
        </div>
      </form>
    
  );
};

export default GoalForm;
