//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export default class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    let newSliceLength = sliceLength;
    if (this.series.length < newSliceLength && this.series.length !== 0) {
      throw new Error('slice length cannot be greater than series length');
    } else if (newSliceLength === 0) {
      throw new Error('slice length cannot be zero');
    } else if (newSliceLength < 0) {
      throw new Error('slice length cannot be negative');
    } else if (this.series.length === 0) {
      throw new Error('series cannot be empty');
    } else {
      const arr = this.series.split('').map(Number);
      const result = [];
      for (let i = 0; i <= arr.length; i += 1) {
        result.push(arr.slice(i, newSliceLength));
        newSliceLength += 1;
        if (newSliceLength > arr.length) {
          break;
        }
      }
      return result;
    }
  }
}
