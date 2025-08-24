import { useState } from "react"

export default function MessageSwitcher() {
  const [msg, setMsg] = useState("This Is The Message On My Web Page")
  return (
    <div>
      <h2>{msg}</h2>
      <button onClick={() => setMsg("This Is The Second Message On My Web Page")}>Change Message</button>
    </div>
  )
}
