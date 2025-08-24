function UserCard() {
  function handleClick() {
    alert("გური, მოხარული ვარ გაგიცნო!")
  }

  return (
    <div style={{maxWidth: 360, margin: "40px auto", padding: 20, border: "1px solid #eee", borderRadius: 12, fontFamily: "system-ui, sans-serif"}}>
      <img src="/me.jpg" alt="My photo" style={{width: "100%", height: 200, objectFit: "cover", borderRadius: 12}} />
      <h1 style={{fontSize: 24, marginTop: 16}}>გურამი</h1>
      <p style={{opacity: 0.8, lineHeight: 1.5}}>სტუდენტი და პროგრამისტი. მიყვარს სწავლება და გიტარა. ვაკეთებ ვებ-აპებს და ვეხმარები ბავშვებს კოდინგში.</p>
      <button onClick={handleClick} style={{marginTop: 12, padding: "10px 16px", borderRadius: 10, background: "#111", color: "white", border: "none", cursor: "pointer"}}>გამარჯობა თქვი</button>
    </div>
  )
}

export default UserCard
