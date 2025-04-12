export const holidays = {
    christmas: { month: 12, startDay: 1, endDay: 25, theme: 'christmas' },
    easter: { month: 4, day: 17, theme: 'easter' }, // Replace with the correct Easter date
    halloween: { month: 10, day: 31, theme: 'halloween' },
    thanksgiving: { month: 11, day: 24, theme: 'thanksgiving' }, // Example fixed date
    valentines: { month: 2, day: 14, theme: 'valentines' },
    newYear: { month: 1, day: 1, theme: 'newYear' },
  };
  
  export const getHolidayTheme = () => {
    const today = new Date();
    const month = today.getMonth() + 1; // Months are 0-indexed, so we add 1
    const day = today.getDate();
  
    for (const holiday in holidays) {
      const { month: hMonth, startDay, endDay, day: hDay, theme } = holidays[holiday];
      if (
        hMonth === month &&
        ((startDay && endDay && day >= startDay && day <= endDay) || day === hDay)
      ) {
        return theme;
      }
    }
  
    return 'default'; // Return 'default' if no holiday matches
  };
  
  
  