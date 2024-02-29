export function formatNumberWithoutCommas(number) {
  const numberString = String(number);
  let formattedNumber = "";
  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && i % 3 === 0) {
      formattedNumber = " " + formattedNumber;
    }
    formattedNumber =
      numberString[numberString.length - 1 - i] + formattedNumber;
  }
  return formattedNumber;
}
