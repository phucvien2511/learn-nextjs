export const getWorkDates = (month: number, year: number) => {
    const workDates = [];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Adjust the month to be zero-indexed
    month = month - 1;

    // Iterate through the month
    let currentDate = new Date(year, month, 1);
    while (currentDate.getMonth() === month) {
        const dayOfWeek = currentDate.getDay();
        // Check if the day is Mon-Fri
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            const day = currentDate.getDate().toString().padStart(2, "0");
            const monthString = (month + 1).toString().padStart(2, "0");
            const formattedDate = {
                date: `${day}/${monthString}/${year}`,
                day: days[dayOfWeek],
            };
            workDates.push(formattedDate);
        }

        if (dayOfWeek === 5) {
            currentDate.setDate(currentDate.getDate() + 3); // Current is Fri => Skip Sat and Sun
        } else {
            currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
        }
    }
    return workDates;
};
