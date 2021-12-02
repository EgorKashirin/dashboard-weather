import { InformationHoursProps, MinutelyProps } from "api/dashboardManager";
import { observable, action } from "mobx";
import { apiManager } from "~/api";
import { AxiosResponse } from "axios";

export class DashboardStore {
  @observable isLoading;
  @observable dataWeather;
  @observable minutely;

  constructor() {
    this.isLoading = false;
    this.dataWeather = {};
    this.minutely = {};
  }

  @action.bound
  async init(CITY: string, API_KEY: string) {
    try {
      this.isLoading = true;
      const { data, minutely }: AxiosResponse<InformationHoursProps> = await apiManager.dashboardManager.getInformationHours({ city: CITY, key: API_KEY });
      this.dataWeather = data[0] ?? {};

      this.minutely = {
        labels: this.convertTime(minutely),
        data: [
          {
            label: "Изменение температуры по минутам",
            data: minutely.map((item: MinutelyProps) => {
              return String(item.temp);
            }),
          },
        ],
      };
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  convertTime(time: [{ timestamp_local: string }]) {
    return time.map((item) => `${new Date(item.timestamp_local).getHours()}:${new Date(item.timestamp_local).getMinutes()}`);
  }
}
