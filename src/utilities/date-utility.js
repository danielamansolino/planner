/**
 * Returns the current date in the local time zone as a string in the format 'YYYY-MM-DD'.
 * @returns {string} The current date in the 'YYYY-MM-DD' format.
 */
export const currentDate = () => {
    const currentDate = new Date()
    const offset = currentDate.getTimezoneOffset();
    const currDatecurrTZ  = new Date(currentDate.getTime() - (offset*60*1000)); 
    const dateString = currDatecurrTZ.toISOString().split('T')[0]
    return dateString
}