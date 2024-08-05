function calculateDaysSinceCreation(creationDateTime: string) {
  const currentDate = new Date();
  const oldDate = new Date(creationDateTime);

  // Calculate the difference in milliseconds
  const timeDifference = currentDate.valueOf() - oldDate.valueOf();

  // Convert the difference to days
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const ndays = Math.ceil(timeDifference / millisecondsInADay);

  return ndays;
}

export default calculateDaysSinceCreation;
