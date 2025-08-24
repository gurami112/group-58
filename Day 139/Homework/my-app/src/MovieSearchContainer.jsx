import { useState } from "react"
import MovieDetails from "./MovieDetails.jsx"

export default function MovieSearchContainer() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState(null)
  const [error, setError] = useState("")

  async function onSubmit(e) {
    e.preventDefault()
    setError("")
    setData(null)
    const q = query.trim()
    if (!q) return
    try {
      const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(q)}&plot=full&apikey=YOUR_API_KEY`)
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError("Network error")
    }
  }

  return (
    <div style={{width:"min(900px,92%)",margin:"40px auto",display:"grid",gap:16}}>
      <form onSubmit={onSubmit} style={{display:"flex",gap:8}}>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search movie title" style={{flex:1,padding:12,borderRadius:10,border:"1px solid #2a2f3f",background:"#0c0f15",color:"#e6e8ee"}}/>
        <button type="submit" style={{padding:"12px 16px",borderRadius:10,border:"none",background:"#6c8cff",color:"#fff"}}>Search</button>
      </form>
      <MovieDetails data={data} error={error} />
    </div>
  )
}
