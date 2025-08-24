function Card({ text, bgColor }) {
  return (
    <div style={{backgroundColor: bgColor, padding: "20px", margin: "10px", borderRadius: "10px"}}>
      <h2>{text}</h2>
    </div>
  )
}

export default Card
