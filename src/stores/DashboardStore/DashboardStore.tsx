import { observable, action, reaction } from "mobx";
import { apiManager } from "~/api";

export class DashboardStore {
  @observable isLoading;

  constructor() {
    this.isLoading = false;
  }

  @action.bound
  async init() {
    try {
      this.isLoading = true;
      const { data, minutely } = await apiManager.dashboardManager.getInformationHours({ city: "moscow", key: "98d68139eb4d46bb8fdba5b5a7d8e922" });
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
