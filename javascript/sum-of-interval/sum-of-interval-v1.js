function sumIntervals(intervals) {
  //TODO
  return intervals.sort().map((interval, i) => {
    console.log(intervals[i]);
    console.log(
      (intervals[i][1] && intervals[i + 1]?.[0]) < intervals[i + 1]?.[1]
    );
    if (intervals[i][1] < intervals[i + 1]?.[0]) {
      return [intervals[i - 1][0], intervals[i][1]];
    } else {
      return interval;
    }
    //   if(interval)
  });
}

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
  ])
);

console.log(
  [
    [1, 4],
    [7, 10],
    [3, 5]
  ].sort()
);
