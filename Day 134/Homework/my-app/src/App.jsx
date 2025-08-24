import MessageSwitcher from "./Components/MessageSwitcher.jsx"
import SecretRevealer from "./Components/SecretRevealer.jsx"
import LightToggle from "./Components/LightToggle.jsx"

export default function App() {
  return (
    <div style={{display:"grid",gap:24,padding:24}}>
      <MessageSwitcher />
      <SecretRevealer />
      <LightToggle />
    </div>
  )
}
