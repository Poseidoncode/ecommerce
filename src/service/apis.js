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

export const getOrders = (qs = "") => ajax({ url: "admin/orders" + qs });

export const putOrders = (data, id) =>
  ajax({
    url: `admin/order/${id}`,
    method: "put",
    data,
  });

export const deleteOneOrders = (id) =>
  ajax({
    url: `admin/order/${id}`,
    method: "delete",
  });

export const deleteAllOrders = (id) =>
  ajax({
    url: `admin/orders/all`,
    method: "delete",
  });

export const getCoupons = (qs = "") => ajax({ url: "admin/coupons" + qs });

export const postCoupons = (data) =>
  ajax({
    url: "admin/coupon",
    method: "post",
    data,
  });

export const putCoupons = (data, id) =>
  ajax({
    url: `admin/coupon/${id}`,
    method: "put",
    data,
  });

export const deleteCoupons = (id) =>
  ajax({
    url: `admin/coupon/${id}`,
    method: "delete",
  });

export const getArticles = (qs = "") => ajax({ url: "admin/articles" + qs });

export const getSingleArticle = (id) => ajax({ url: `admin/article/${id}` });

export const postArticles = (data) =>
  ajax({
    url: "admin/article",
    method: "post",
    data,
  });

export const putArticles = (data, id) =>
  ajax({
    url: `admin/article/${id}`,
    method: "put",
    data,
  });

export const deleteArticles = (id) =>
  ajax({
    url: `admin/article/${id}`,
    method: "delete",
  });
