function calculateWorkHours(startTime, endTime) {
    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);
  
    const start = new Date(0, 0, 0, startH, startM);
    const end = new Date(0, 0, 0, endH, endM);
  
    let diff = (end - start) / (1000 * 60 * 60);
    if (diff < 0) diff += 24; 
  
    console.log("Total work hours:", diff);
  }
  