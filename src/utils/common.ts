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
