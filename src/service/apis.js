import ajax from "./ajax";
import axios from "axios";
import store from "../store";
import { data } from "autoprefixer";
// import dayjs from "dayjs";

export const getThirdLevel = (qs) => ajax({ url: "maintain/third_level" + qs });

export const putThirdLevel = (data) =>
  ajax({ url: "maintain/third_level", method: "put", data });

export const postThirdLevel = (data) =>
  ajax({ url: "maintain/third_level", method: "post", data });

export const deleteThirdLevel = (data) => {
  const url =
    process.env.NODE_ENV == "development"
      ? "rest/maintain/third_level"
      : "http://172.16.16.76/cs_scada/rest/maintain/third_level";
  return axios.delete(url, {
    data: {
      ...data,
    },
  });
};
