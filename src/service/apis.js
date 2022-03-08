import ajax from "./ajax";
import axios from "axios";
import store from "../store";

// import dayjs from "dayjs";

export const getProducts = (qs = "") => ajax({ url: "admin/products" + qs });
