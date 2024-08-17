const isDateExceeded = (dateStr: string) => {
  const datetime = new Date(dateStr);
  const currentDatetime = new Date();
  if (currentDatetime > datetime) {
    return true;
  } else {
    false;
  }
};

export default isDateExceeded