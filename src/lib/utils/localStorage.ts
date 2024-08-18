function setLocalStorageWithExpiry(key: string, value: any, ttl: number) {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.setHours(now.getHours() + ttl),
  };
  window.localStorage.setItem(key, JSON.stringify(item));
}

function getLocalStorageWithExpiry(key: string) {
  const itemStr = window.localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // if the item is expired, return null
  if (now > item.expiry) {
    window.localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export { setLocalStorageWithExpiry, getLocalStorageWithExpiry };
