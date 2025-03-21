import { useState } from "react"

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

const Statistics =({good,neutral,bad})=>{
  return(
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </>
  )

}
const App=()=> {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  
  const handleGood =()=>{
    const goodPluss = good + 1
    setGood(goodPluss)
  }
  const handleNeutral =()=>{
    const neutralPluss = neutral + 1
    setNeutral(neutralPluss)
  }
  const handleBad =()=>{
    const badPluss = bad + 1
    setBad(badPluss)
  }
  return (
    <>
    <Title something={"give feedback"}/>
    <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
    <Title something={"statistics"}/>
    <Statistics good={good} neutral={neutral} bad={bad}/>

    </>
  )
}

export default App
