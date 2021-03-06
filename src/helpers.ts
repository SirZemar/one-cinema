// Convert time to hours and minutes
export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money: number): string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};
export const changeDateFormat = (prevDate: string) => {
  const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthIndex = new Date(prevDate).getMonth();

  const day = new Date(prevDate).getDate();
  const month = allMonths[monthIndex];
  const year = new Date(prevDate).getFullYear();

  let ordinalNumber = '';
  switch (day) {
    case 1:
      ordinalNumber = 'st';
      break;
    case 2:
      ordinalNumber = 'nd';
      break;
    case 3:
      ordinalNumber = 'rd';
      break;
    default:
      ordinalNumber = 'th';
      break;
  }

  return `${month} ${day}${ordinalNumber}, ${year}`
};
export const calculateAge = (birth: string, death: string, isDead: boolean) => {
  const lastDate = isDead ? new Date(death).getTime() : Date.now();
  const birthDay = new Date(birth).getTime();
  const timeDifference = lastDate - birthDay;
  return new Date(timeDifference).getUTCFullYear() - 1970;
}

export const clamp = (smaller: string, bigger: string, startQueryStr: string, optionsSettings = {}): string => {
  const optionsDefault = {
    rate: 0,
    endQuery: undefined,
    inverse: false,
  };
  const options = Object.assign(optionsDefault, optionsSettings);
  const { rate, endQuery: endQueryStr, inverse } = options;

  let value;
  let b, invertedB;
  let startQuery = parseInt(startQueryStr);

  const minSize = parseFloat(smaller);
  const maxSize = parseFloat(bigger);

  // rem Only for now
  const minSizePx = minSize * 16;
  const maxSizePx = maxSize * 16;

  if (endQueryStr) {
    let endQuery = parseInt(endQueryStr);

    if (inverse) {
      [startQuery, endQuery] = [endQuery, startQuery]
    }

    const sizeDiff = maxSizePx - minSizePx;
    const queryDiff = endQuery - startQuery;

    value = (sizeDiff / queryDiff) * 100;
    b = minSizePx - ((value / 100) * startQuery);

    return (`clamp(${smaller}, ${value}vw + ${b}px , ${bigger})`)
  }

  b = rate * 16;
  value = ((minSizePx + b) / startQuery) * 100;
  invertedB = minSizePx - ((-value / 100) * startQuery);

  return inverse
    ? (`clamp(${smaller}, -${value}vw + ${invertedB}px, ${bigger})`)
    : (`clamp(${smaller}, ${value}vw - ${b}px , ${bigger})`)
}