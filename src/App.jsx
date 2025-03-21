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

const Statistics =({good,neutral,bad,total,average,positive})=>{
  return(
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>

    </>
  )

}
const App=()=> {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [average,setAverage] = useState(0)
  const [positive,setPositive] = useState(0)


  const handleGood =()=>{
    const goodPluss = good + 1
    const totalPluss = total + 1
    const averagePluss = (goodPluss - bad)/totalPluss
    const positivePluss = goodPluss /totalPluss
    setGood(goodPluss)
    setTotal(totalPluss)
    setAverage(averagePluss)
    setPositive(positivePluss)
  }
  const handleNeutral =()=>{
    const neutralPluss = neutral + 1
    const totalPluss = total + 1
    const averagePluss = (good - bad)/totalPluss
    const positivePluss = good /totalPluss
    setNeutral(neutralPluss)
    setTotal(totalPluss)
    setAverage(averagePluss)
    setPositive(positivePluss)
  }
  const handleBad =()=>{
    const badPluss = bad + 1
    const totalPluss = total + 1
    const averagePluss = (good - badPluss)/totalPluss
    const positivePluss = good /totalPluss
    setBad(badPluss)
    setTotal(totalPluss)
    setAverage(averagePluss)
    setPositive(positivePluss)
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
