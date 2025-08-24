import { useState } from "react"

export default function SecretRevealer() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(true)}>Show The Secret Message</button>
      {show && <p>You Have Revealed The Secret Message</p>}
    </div>
  )
}
