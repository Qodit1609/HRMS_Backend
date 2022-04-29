

//Date Format is YYYY-mm-dd 
function get_days(str_day, end_day){
    const date1 = new Date(str_day);
    const date2 = new Date(end_day);
      // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays + 1;//+1 for including the end day as 1 day. 
 }

 module.exports= {get_days}