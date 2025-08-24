import { useState } from "react"
import "./index.css"

export default function App() {
  const [movie, setMovie] = useState("")
  const [list, setList] = useState([])

  function addMovie(e) {
    e.preventDefault()
    const name = movie.trim()
    if (!name) return
    setList([...list, { id: Date.now(), name }])
    setMovie("")
  }

  function removeMovie(id) {
    setList(list.filter(m => m.id !== id))
  }

  return (
    <div className="wrap">
      <h1>Favorite Movies List</h1>
      <form onSubmit={addMovie} className="row">
        <input value={movie} onChange={e => setMovie(e.target.value)} placeholder="Add a movie" />
        <button type="submit">Add</button>
      </form>
      <ul className="list">
        {list.map(item => (
          <li key={item.id} className="card">
            <span>{item.name}</span>
            <button onClick={() => removeMovie(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
