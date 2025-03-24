import React from 'react'
import {RecoilRoot,atom, useRecoilValue, useSetRecoilState} from 'recoil'
import { counteratom } from './Store/atoms/counter'


function App() {
  return (
    <RecoilRoot>
      <Counter></Counter>
    </RecoilRoot>
  )
}

function Counter(){
  return <div>
  <CurrentCount></CurrentCount>
  <Increase></Increase>
  <Decrease></Decrease>
  </div>
}

function CurrentCount(){
  const count=useRecoilValue(counteratom)
  return <div>
    {count}
  </div>
}


function Increase(){
  const setCount=useSetRecoilState(counteratom)
  function increasevalue(){
    setCount((c)=>c+1)
  }
  return <div>
    <button onClick={increasevalue}>Increase value</button>
  </div>
}

function Decrease(){
  const setCount=useSetRecoilState(counteratom)
  function decreasevalue(){
    setCount((c)=>c-1)
  }
  return <div>
    <button onClick={decreasevalue}>Decrease value</button>
  </div>
}




export default App
