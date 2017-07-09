const STORE_KEY = 'mcw-store';

const _get = localStorage.getItem.bind(localStorage);
const _set = localStorage.setItem.bind(localStorage);

function get(key, defaultValue) {
  try {
    return JSON.parse(_get(key));
  } catch(e) {
    return defaultValue || null;
  }
}
function set(key, value) {
  try {
    const raw = JSON.stringify(value);
    _set(key, raw);
  } catch(e) {
    return null;
  }
}

const clear = localStorage.clear.bind(localStorage);

function getStorage() {
  return new Promise((res, rej) => {
    try {
      const store = get(STORE_KEY);
      const hasStore = store.watchers && store.timePeriod;
      return res({
        ...store,
        hasStore,
      });
    } catch(e) {
      res({});
    }
  });
}

function setStorage({ watchers = null, timePeriod = null}) {
  try {
    return getStorage().then(storage => {
      const data = {
        watchers: watchers || storage.watchers || [],
        timePeriod: timePeriod || storage.timePeriod || '4H',
      };
      set(STORE_KEY, data);
      return true;
    })
  } catch(e) {
    return Promise.reject(false);
  }
}


export default {
  get,
  set,
  clear,
  setStorage,
  getStorage,
};