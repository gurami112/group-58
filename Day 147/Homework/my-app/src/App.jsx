import { useState } from "react"
import RoleContext from "./RoleContext"
import ShowRole from "./ShowRole"

export default function App() {
  const [role, setRole] = useState("guest")
  return (
    <RoleContext.Provider value={role}>
      <div style={{display:"grid",gap:12,padding:20}}>
        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>setRole("guest")}>guest</button>
          <button onClick={()=>setRole("member")}>member</button>
          <button onClick={()=>setRole("admin")}>admin</button>
        </div>
        <ShowRole />
      </div>
    </RoleContext.Provider>
  )
}
