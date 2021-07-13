export const twoLines = (text: string) => {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    count++;
  }
  if (count >= 20) {
    return true;
  }
  return false;
};
