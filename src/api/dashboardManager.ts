import { axiosInstance as api } from "lib/axios";

export const getInformationHours = ({ city, key }: { city: string; key: string }) => {
  return api.get(`https://api.weatherbit.io/v2.0/current?&city=${city}&key=${key}&include=minutely&lang=ru`);
};
