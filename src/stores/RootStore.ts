import { DashboardStore } from "stores/DashboardStore";

export class RootStore {
  dashboardStore: DashboardStore;
  constructor() {
    this.dashboardStore = new DashboardStore();
  }
}
declare global {
  interface Window {
    _____APP_STATE_____: RootStore;
  }
}

const stores = new RootStore();
window._____APP_STATE_____ = stores;
export { stores };
