/**
 * Safely accesses an object using a flattened key
 *
 * @param {Object} obj base object
 * @param {String} key dot delimited access key for the object
 * @param {Object} defaultReturn default return when a match isn't found
 */
 export const get = (obj, key, defaultReturn = null) => {
  const res = key
    .split('.')
    .reduce((returnVal, currentKey) => (returnVal ? returnVal[currentKey] : defaultReturn), obj);
  return res !== null && res !== undefined ? res : defaultReturn;
}