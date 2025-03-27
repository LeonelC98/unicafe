import { useState } from "react"
import { useEffect } from "react"

const Title =({something}) => <h1>{something}</h1>

const Buttons =({handleGood,handleNeutral,handleBad}) =>{
  return(
    <>
    <button onClick={handleGood}>good</button>
    <button onClick={handleNeutral}>neutral</button>
    <button onClick={handleBad}>bad</button>
    </>

  )
}

const StatisticLine = ({text, value, text2}) => {
  return(
    <tbody>
      <tr>
        <td>{text}</td> 
        <td>{value}</td> 
        <td>{text2} </td>
      </tr>
    </tbody>
  )

}


const Statistics =({good,neutral,bad,total,average,positive})=>{
  
  if(total>0){
    return(
      <table>
        <StatisticLine text={'good'} value={good}/>
        <StatisticLine text={'neutral'} value={neutral}/>
        <StatisticLine text={'bad'} value={bad}/>
        <StatisticLine text={'total'} value={total}/>
        <StatisticLine text={'average'} value={average}/>
        <StatisticLine text={'positive'} value={positive} text2={'%'}/>

      </table>
    )
  }else{
    return(
      <p>No feedback give</p>
    )
  }

}
const App=()=> {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [average,setAverage] = useState(0)
  const [positive,setPositive] = useState(0)

  const handleTotal=(averagePluss,positivePluss,totalPluss) => {
    setTotal(totalPluss)
    setAverage(averagePluss.toFixed(1))
    setPositive(positivePluss.toFixed(1))
    }

  const handleGood =()=>{
    const goodPluss = good + 1
    const totalPluss = total + 1
    const averagePluss = (goodPluss - bad)/totalPluss
    const positivePluss = (goodPluss / totalPluss) * 100
    setGood(goodPluss)
    handleTotal(averagePluss,positivePluss,totalPluss)
  }
  const handleNeutral =()=>{
    const neutralPluss = neutral + 1
    const totalPluss = total + 1
    const averagePluss = (good - bad)/totalPluss
    const positivePluss = (good /totalPluss) * 100
    setNeutral(neutralPluss)
    handleTotal(averagePluss,positivePluss,totalPluss)
  }
  const handleBad =()=>{
    const badPluss = bad + 1
    const totalPluss = total + 1
    const averagePluss = (good - badPluss)/totalPluss
    const positivePluss = (good /totalPluss) * 100
    setBad(badPluss)
    handleTotal(averagePluss,positivePluss,totalPluss)

  }
  return (
    <>
    <Title something={"give feedback"}/>
    <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
    <Title something={"statistics"}/>
    <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </>
  )
}

export default App
