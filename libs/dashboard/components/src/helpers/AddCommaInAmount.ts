export function numberWithCommas(x: any) {
  return x && x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
