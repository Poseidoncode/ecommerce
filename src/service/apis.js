import ajax from "./ajax";
import axios from "axios";
import store from "../store";

// import dayjs from "dayjs";

// export const getProducts = (qs = "") => ajax({ url: "admin/products" + qs });
export const getProductsAll = (qs = "") =>
  ajax({ url: "admin/products/all" + qs });

export const postProducts = (data) =>
  ajax({
    url: "admin/product",
    method: "post",
    data,
  });

export const deleteProducts = (id) =>
  ajax({
    url: `admin/product/${id}`,
    method: "delete",
  });

export const putProducts = (data, id) =>
  ajax({
    url: `admin/product/${id}`,
    method: "put",
    data,
  });

export const addFileImage = (data) =>
  ajax({
    url: "admin/upload",
    method: "post",
    data,
  });

// (data) =>
//   ajax({
//     url: `admin/products/${data.id}`,
//     method: "put",
//   });
