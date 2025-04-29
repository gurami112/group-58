function birthdayInfo(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const today = new Date();
  
    const age = today.getFullYear() - birthDate.getFullYear();
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
  
    const diffTime = nextBirthday - today;
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    console.log("Age:", age);
    console.log("Days left until next birthday:", daysLeft);
  }
  