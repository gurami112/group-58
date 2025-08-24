import { useEffect, useState } from "react"

export default function ClickEffect() {
  const [text, setText] = useState("Click here")

  useEffect(() => {
    const handleClick = () => {
      setText(prev => (prev === "Click here" ? "Clicked" : "Click here"))
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return <p style={{padding:12,border:"1px solid #2a2f3f",borderRadius:10,display:"inline-block"}}>{text}</p>
}
