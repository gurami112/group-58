import UsersFetch from "./UsersFetch.jsx"
import ClickEffect from "./ClickEffect.jsx"

export default function App() {
  return (
    <div style={{width:"min(900px,92%)",margin:"40px auto",display:"grid",gap:24}}>
      <UsersFetch />
      <ClickEffect />
    </div>
  )
}
