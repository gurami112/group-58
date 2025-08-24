import { useContext } from "react"
import RoleContext from "./RoleContext"

export default function ShowRole() {
  const role = useContext(RoleContext)
  if (role === "admin") return <p>Hello Admin! You have full access.</p>
  if (role === "member") return <p>Welcome back, Member!</p>
  return <p>Hello Guest! Feel free to explore.</p>
}
