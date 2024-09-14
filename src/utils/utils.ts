export const formatNumber = (numStr: string): string => {
  const match = numStr.match(/\d+(\.\d+)?/);
  const numberStr = match ? match[0] : null;

  if (numberStr) {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(parseFloat(numberStr));
  } else {
    console.error("No number found in the string.");
    return "";
  }
};

export const getDateMinusDays = (days: number): string => {
  const today = new Date(); // Get today's date
  const resultDate = new Date(today); // Create a copy of the date
  resultDate.setDate(today.getDate() - (days - 1)); // Subtract (days - 1) to count today
  return resultDate.toISOString().split("T")[0];
};
