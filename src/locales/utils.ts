export const flattenMessages = (nestedMessages: object, prefix = '') =>
  Object
    .keys(nestedMessages)
    .reduce((messages, key) => {
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      const flatten = messages;

      if (typeof value === 'string') {
        flatten[prefixedKey] = value;
      } else {
        Object.assign(flatten, flattenMessages(value, prefixedKey));
      }

      return flatten;
    }, {});
