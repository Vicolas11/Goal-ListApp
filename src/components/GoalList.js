import "./style.css";

const GoalList = (props) => {
  if (props.goals.length === 0) {
    return (
      <h2 style={{ textAlign: "center", color: "#40005d" }}>
        No Added Goal Yet!
      </h2>
    );
  }

  const onClickHandler = (data) => {
    props.onDelete(data);
  };

  return props.goals.map((goal, idx) => (
    <div className="goal-list" onClick={() => onClickHandler(goal)} key={idx}>
      <h2>{goal}</h2>
    </div>
  ));
};

export default GoalList;
