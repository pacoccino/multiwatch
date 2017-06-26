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
      rej(null);
    }
  });
}

function setStorage({ watchers = [], timePeriod = '4H'}) {
  try {
    const data = {
      watchers, timePeriod,
    };
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
    return true;
  } catch(e) {
    return false;
  }
}


export default {
  setStorage,
  getStorage,
};