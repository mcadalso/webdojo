export const MD5RegularExpression = /^[a-fA-F0-9]{32}$/

export function getTodayDate() {
    // Example usage:
    //console.log(getTodayDate()); // e.g. "10/30/2025"
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // months start at 0
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }