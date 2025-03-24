import React, { useEffect, useState,memo} from 'react'

function App() {
  return (
    <Counter></Counter>
  )
}

function Counter(){
  const [count,setcount]=useState(0);
  useEffect(()=>{
    setInterval(() => {
      setcount(c=>c+1)
    }, 3000);
  },[])
  return <div>
    <CurrentCount></CurrentCount>
    <Increase></Increase>
    <Decrease></Decrease>
  </div>
}

let CurrentCount=memo(function(){
  return <div>
    1
  </div>
})

let Increase=memo(function(){
  return <div>
    <button>Increase</button>
  </div>
})

let Decrease=memo(function(){
  return <div>
    <button>Decrease</button>
  </div>
})

export default App
