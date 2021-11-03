export default function findRangeNumberBelongsTo(rangeList, number) {
  for (let index = 0; index < rangeList.length - 1; index++) {
    if (rangeList[index] < number && number <= rangeList[index + 1]) {
      return index;
    }
  }

  return null;
}
