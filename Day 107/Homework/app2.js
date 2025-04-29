function getGeorgianWeekday(dateStr) {
    const days = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    const date = new Date(dateStr);
    const dayIndex = date.getDay();
    console.log("კვირის დღეა:", days[dayIndex]);
  }
  