import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.title}</button>;
};

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="total" value={props.total} />
        <StatisticLine
          text="average"
          value={(props.good - props.bad) / props.total}
        />
        <StatisticLine
          text="positive"
          value={`${(100 * props.good) / props.total}%`}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (title) => {
    switch (title) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
    }
  };
  const total = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" onClick={() => handleClick("good")} />
      <Button title="neutral" onClick={() => handleClick("neutral")} />
      <Button title="bad" onClick={() => handleClick("bad")} />
      <h1>statistics</h1>
      {(good || bad || neutral) === 0 ? (
        "No feedback given"
      ) : (
        <Statistics good={good} bad={bad} neutral={neutral} total={total()} />
      )}
    </div>
  );
};

export default App;
