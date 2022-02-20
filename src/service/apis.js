import ajax from "./ajax";
import axios from "axios";
import store from "../store";
import { data } from "autoprefixer";
// import dayjs from "dayjs";

export const getGroupList2 = () =>
  ajax({
    url: "gatewayList",
    data: { params: { locationId: store.state.user.locationId } },
  });

export const getListStatusCode = () => ajax({ url: "listStatusCode" });

export const getListAlarmType = () => ajax({ url: "listAlarmType" });

export const notifySetting = (datas) =>
  ajax({ url: "notifySetting", method: "put", data: datas });

export const getDataTagList = (query) =>
  ajax({ url: "dataTagList", data: { params: { ...query } } });

export const getDeviceTypeList = () => ajax({ url: "deviceTypeList" });

export const getLocationLst = () => ajax({ url: "locationList" });

export const getDroupList = () => ajax({ url: "groupList" }); //父群組下拉

export const getAlarms = (query) =>
  ajax({ url: "alarms", data: { params: { ...query } } }); //告警參數維護資料

export const putAlarms = (datas) =>
  ajax({ url: "alarm", method: "put", data: datas }); //編輯告警參數維護資料

export const getGatewayList = () =>
  ajax({
    url: "gatewayList",
    data: { params: { locationId: store.state.user.locationId } },
  }); //主機位置下拉

export const getAlarmConfigs = (query) =>
  ajax({ url: "alarmConfigs", data: { params: { ...query } } }); //查詢告警設定

export const putAlarmConfig = (datas) =>
  ajax({ url: "alarmConfig", method: "put", data: datas }); //編輯告警設定
// return axios.get("/cs_scada/rest/groupList").then((res) => res.data.data);

//主機維護
export const getWays = (pageStart, limit, sitem) =>
  ajax({ url: "gateways", data: { params: { pageStart, limit, ...sitem } } });

export const getWays2 = (qs) => ajax({ url: "gateways" + qs });

export const putGateWay = (data) =>
  ajax({ url: "gateway", method: "put", data });

export const postGateWay = (data) => {
  return ajax({
    url: "gateway",
    method: "post",
    data: { ...data, locationId: store.state.user.locationId },
  });
};

export const postGateWay2 = (data) =>
  ajax({ url: "gateway", method: "post", data });

export const getChildGroups = (parentId) =>
  ajax({
    url: "childGroups",
    data: { params: { parentId } },
  });

//偵測器維護
export const getDevices = (pageStart, limit, sItem) =>
  ajax({
    url: "devices",
    data: {
      params: {
        pageStart,
        limit,
        ...sItem,
        locationId: store.state.user.locationId,
      },
    },
  });

export const getDevices2 = (qs) => ajax({ url: "devices" + qs });

export const deleteDevice = (id) =>
  ajax({ url: "device", method: "delete", data: { params: { id } } });

export const putDevice = (data) => ajax({ url: "device", method: "put", data });

export const postDevice = (data) =>
  ajax({ url: "device", method: "post", data });

//偵測器ID維護
export const getDataTag = (query) =>
  ajax({ url: "dataTags", data: { params: { ...query, limit: 999 } } });

export const getDataTag2 = (qs) => ajax({ url: "dataTags" + qs });

export const postDataTag = (query) =>
  ajax({ url: "dataTag", method: "post", data: query });

export const putDataTag = (query) =>
  ajax({ url: "dataTag", method: "put", data: query });

export const deleteDataTag = (query) =>
  ajax({ url: "dataTag", method: "delete", data: { params: { ...query } } });

export const getDeviceVal = (sItem) =>
  ajax({
    url: "deviceValue",
    data: { params: { ...sItem } },
  });

export const getListHardwareType = () => ajax({ url: "listHardwareType" });

export const getNextStationId = (query) =>
  ajax({ url: "nextStationId", data: { params: { ...query } } });

export const gethardwareAddr = (query) =>
  ajax({ url: "hardwareAvailableAddr", data: { params: { ...query } } });

const _authUrl = "http://192.168.1.201/Auth/Auth/";

export const authLogin = (data) =>
  ajax({ url: `${_authUrl}Login`, data, method: "post" });

export const authCaptcha = (length = 5) =>
  axios.get(`${_authUrl}GetCaptcha?length=${length}`);

export const getEnvLocation = (query) =>
  ajax({ url: "envLocation", data: { params: { ...query } } });

export const searchStat = (query) =>
  ajax({
    url: "/stat/report",
    data: { params: { ...query, intervalMilliseconds: 900000 } },
  });

//歷史資料
export const summaryReport = (query) =>
  ajax({
    url: "/stat/summary_report",
    data: { params: { ...query, locationId: 0 } },
  });

//告警統計
export const alarmummaryReport = (query) =>
  ajax({
    url: "alarmStat",
    data: { params: { ...query, tagId: "iSN_101_4_1_di_1639472528859" } },
  });

export const getListHardwareType2 = () =>
  ajax({ url: "maintain/dropdown_hardware_id" });

export const getWarnings = () => ajax({ url: "warnings" });

export const getPosition = () => ajax({ url: "devicePositionList" });

export const getRtDevice = (pageStart, limit, query) =>
  ajax({
    url: "realtimeDevices",
    data: {
      params: {
        pageStart,
        limit,
        locationId: store.state.user.locationId,
        ...query,
      },
    },
  });
export const getSecondLevel = (qs) =>
  ajax({ url: "maintain/second_level" + qs });

export const putSecondLevel = (data) =>
  ajax({ url: "maintain/second_level", method: "put", data });

export const postSecondLevel = (data) =>
  ajax({ url: "maintain/second_level", method: "post", data });

export const deleteSecondLevel = (data) => {
  const url =
    process.env.NODE_ENV == "development"
      ? "rest/maintain/second_level"
      : "http://172.16.16.76/cs_scada/rest/maintain/second_level";
  return axios.delete(url, {
    data: {
      ...data,
    },
  });
};

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

export const getBull = (pageStart, limit, startDate) =>
  ajax({
    url: "alarmBulletin",
    data: {
      params: {
        pageStart,
        limit,
        locationId: store.state.user.locationId,
        startDate,
      },
    },
  });
