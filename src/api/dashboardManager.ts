import { axiosInstance as api } from "lib/axios";

export interface MinutelyProps {
  temp: string;
  timestamp_local: string;
}

export interface InformationHoursProps {
  data?: [string];
  minutely?: [MinutelyProps];
}

export const getInformationHours = ({ city, key }: { city: string; key: string }) => {
  return api.get<InformationHoursProps>(`https://api.weatherbit.io/v2.0/current?&city=${city}&key=${key}&include=minutely&lang=ru`);
};
