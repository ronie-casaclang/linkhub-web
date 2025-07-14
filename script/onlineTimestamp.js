// Fetch PH time from reliable internet source
async function onlineTimestamp() {
    try {
        // Extract and format values
        const response = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Manila');
        const data = await response.json();
        const { year, month, day, hour, minute, seconds, milliSeconds } = data;
        const formatted = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} `
                        + `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
                        + `.${String(milliSeconds).padStart(3, '0')}`;
        console.log('online ts');
        return formatted;
    } catch (error) {
        console.error('Error fetching internet time:', error);
        console.error('Get local device time instead.');

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
        console.log('local ts');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
}

// Usage example
/*
getFormattedTimestamp().then(timestamp => {
    console.log('Current timestamp:', timestamp);
});
*/
