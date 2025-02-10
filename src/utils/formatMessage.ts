export function formatAMPM(timeStamp: string) {
    const date = new Date(timeStamp)
    const hours = (date.getHours()) % 12;
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hoursAMPM = hours ? hours : 12; // the hour '0' should be '12'
    const minutesAMPM = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hoursAMPM + ':' + minutesAMPM + ' ' + ampm;
    return strTime;
}
