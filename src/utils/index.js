/**
 * 格式化时间戳
 * @param {Date} timestamp
 */
export function timestampToTime(timestamp, formats) {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || "Y-m-d H:i:s";

  const zero = function(value) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };

  // const myDate = timestamp * 1000 ? new Date(timestamp * 1000): new Date();
  const myDate = new Date(timestamp);

  const year = myDate.getFullYear();
  const month = zero(myDate.getMonth() + 1);
  const day = zero(myDate.getDate());

  const hour = zero(myDate.getHours());
  const minute = zero(myDate.getMinutes());
  const second = zero(myDate.getSeconds());

  return formats.replace(/Y|m|d|H|i|s/gi, function(matches) {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minute,
      s: second
    }[matches];
  });
}
