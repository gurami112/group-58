export default function MovieDetails({ data, error }) {
  if (error) return <p style={{color:"#ff8080"}}>{error}</p>
  if (!data) return null
  if (data.Response === "False") return <p>{data.Error}</p>
  return (
    <div style={{border:"1px solid #2a2f3f",padding:16,borderRadius:12,display:"grid",gap:8}}>
      <strong>{data.Title}</strong>
      <div>Year: {data.Year}</div>
      <div>Director: {data.Director}</div>
      <div>IMDB: {data.imdbRating}</div>
      <div>Genre: {data.Genre}</div>
      <div>Actors: {data.Actors}</div>
      <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
        {data.Poster && data.Poster !== "N/A" ? <img src={data.Poster} alt={data.Title} style={{height:180,borderRadius:10}}/> : null}
        <p style={{margin:0}}>{data.Plot}</p>
      </div>
    </div>
  )
}
