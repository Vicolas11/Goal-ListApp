import { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import "./components/style.css";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import Modal from "./components/Modal";

const initGoals = ["Do all exercise!", "Finish the course!"];

function App() {
  const [initialGoals, setIntialGoals] = useState(initGoals);
  const [showError, setShowError] = useState();

  const onCloseHandler = () => {
    setShowError(null);
  };

  const onGoalAddedHandler = (data) => {
    for (const i of initialGoals) {
      if (i === data) {
        setShowError({
          title: "An Error Occured!",
          content: "Goal already exist!",
        });
        return;
      }
    }
    setIntialGoals((prevGoals) => [data, ...prevGoals]);
  };

  const onDeleteHandler = (data) => {
    var goalIndex = initialGoals.indexOf(data);
    initialGoals.splice(goalIndex, 1);
    setIntialGoals(() => [...initialGoals]);
  };

  return (
    <Fragment>
      {showError &&
        ReactDOM.createPortal(
          <Modal
            title={showError.title}
            content={showError.content}
            onClose={onCloseHandler}
          />,
          document.getElementById("modal-here")
        )}
      <GoalForm onGoalAdded={onGoalAddedHandler} />
      <GoalList goals={initialGoals} onDelete={onDeleteHandler} />
    </Fragment>
  );
}

export default App;
