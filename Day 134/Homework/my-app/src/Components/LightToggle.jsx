import { useState } from "react"

export default function LightToggle() {
  const [on, setOn] = useState(false)
  return (
    <div>
      <h2>{on ? "The Light Is ON" : "The Light Is OFF"}</h2>
      <button onClick={() => setOn(v => !v)}>{on ? "Turn The Light OFF" : "Turn The Light ON"}</button>
    </div>
  )
}
