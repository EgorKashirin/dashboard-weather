export class RootStore {
  constructor() {}
}
declare global {
  interface Window {
    _____APP_STATE_____: RootStore;
  }
}

const stores = new RootStore();
window._____APP_STATE_____ = stores;
export { stores };
