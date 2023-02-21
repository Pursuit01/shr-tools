import monent from "moment";
//获取前几天的日期
export function beforeDay(num) {
  return moment(
    new Date(new Date().setDate(new Date().getDate() - num))
  ).format("YYYY-MM-DD");
}
//获取前几天的日期(带时分秒)
export function beforeDay2(num) {
  return moment(
    new Date(new Date().setDate(new Date().getDate() - num))
  ).format("YYYY-MM-DD HH:mm:ss");
}
