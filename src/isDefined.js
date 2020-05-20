export function isDefined(obj) {
  return 'undefined' !== typeof obj;
}

export function isNotDefined(obj) {
  return !isDefined(obj)
}
