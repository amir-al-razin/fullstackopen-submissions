import { useState } from 'react'

const StatisticLine = (props) => {
  const {text,value} = props;
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  return(
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />     
          <StatisticLine text="bad" value={props.bad} />
        </tbody>
        {/* <tfoot>
         <tr>
            <td>Sum</td>
            <td>$180</td>
          </tr>
        </tfoot> */}
      </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
