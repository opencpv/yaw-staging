function calculateDaysSinceCreation(creationDateTime: string) {
  const currentDate = new Date();
  const oldDate = new Date(creationDateTime);
  var tv1 = oldDate.valueOf(); // msec since 1970
  var tv2 = currentDate.valueOf();

  // Calculate the difference in milliseconds
  var ndays = (tv2 - tv1) / 1000 / 86400;
  ndays = Math.round(ndays - 0.5);
  return ndays;

  return Math.floor(ndays);
}

export default calculateDaysSinceCreation;
