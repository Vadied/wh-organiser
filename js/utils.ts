export const generateRandomNumbers = (
  range: number,
  n: number,
  randoms: number[] = []
): number[] => {
  if (range < n) return [];

  const newId = Math.floor(Math.random() * range);
  if (randoms.includes(newId)) return generateRandomNumbers(range, n, randoms);
  randoms.push(newId);

  if (randoms.length < n) return generateRandomNumbers(range, n, randoms);

  return randoms;
};

export const generateRandomIds = (data: { id: string }[], n: number) => {
  const indexes = generateRandomNumbers(data.length, n);
  return indexes.map((index) => data[index].id);
};

export const parseParamsObjectToString = (
  obj: Record<string, string>
): string =>
  Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
