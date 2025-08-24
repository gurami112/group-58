import { useEffect, useState } from "react"

export default function UsersFetch() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function run() {
      try {
        const res = await fetch("https://fakestoreapi.com/users")
        const data = await res.json()
        setUsers(data)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div style={{display:"grid",gap:12}}>
      {users.map(u => (
        <div key={u.id} style={{border:"1px solid #2a2f3f",padding:12,borderRadius:12}}>
          <div>{u.name.firstname} {u.name.lastname}</div>
          <div>{u.email}</div>
          <div>{u.phone}</div>
        </div>
      ))}
    </div>
  )
}
