// Function to convert 24h time to words
function timeToWords(timeStr) {
    const timeParts = timeStr.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
  
    const hoursInWords = [
      "midnight", "one o’clock am", "two o’clock am", "three o’clock am",
      "four o’clock am", "five o’clock am", "six o’clock am", "seven o’clock am",
      "eight o’clock am", "nine o’clock am", "ten o’clock am", "eleven o’clock am",
      "noon", "one o’clock pm", "two o’clock pm", "three o’clock pm",
      "four o’clock pm", "five o’clock pm", "six o’clock pm", "seven o’clock pm",
      "eight o’clock pm", "nine o’clock pm", "ten o’clock pm", "eleven o’clock pm",
    ];
  
    const minutesInWords = [
      "oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
      "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"
    ];
  
    let timeWords = '';
  
    if (hours === 0 && minutes === 0) {
      timeWords = hoursInWords[0];
    } else if (hours === 12 && minutes === 0) {
      timeWords = hoursInWords[12];
    } else {
      if (hours >= 12) {
        timeWords += hoursInWords[hours - 12] + ' pm';
      } else {
        timeWords += hoursInWords[hours] + ' am';
      }
  
      if (minutes > 0) {
        if (minutes <= 29) {
          timeWords += ` ${minutesInWords[minutes]}`;
        } else {
          timeWords += ` ${minutesInWords[30]} ${minutesInWords[60 - minutes]}`
        }
      }
    }
  
    return timeWords;
  }
  