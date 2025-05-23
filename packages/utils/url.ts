/**
 * 正则表达式匹配以http://或https://开头的URL
 * @param str 
 * @returns 
 */
export function isUrlWithHttp(str: string) {
  const urlPattern = /^https?:\/\/[^ "]+$/i;
  return urlPattern.test(str);
}