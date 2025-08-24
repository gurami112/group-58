import { useState } from "react"
import MyText from "./MyText.jsx"

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{display:"grid",gap:12,padding:20}}>
      <MyText />
      <p>{count}</p>
      <button onClick={()=>setCount(c=>c+1)}>Increment</button>
    </div>
  )
}
