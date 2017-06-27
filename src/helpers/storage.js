const STORE_KEY = 'mcw-store';

function getStorage() {
  return new Promise((res, rej) => {
    try {
      const store = JSON.parse(localStorage.getItem(STORE_KEY));
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
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
      return true;
    })
  } catch(e) {
    return Promise.reject(false);
  }
}


export default {
  setStorage,
  getStorage,
};