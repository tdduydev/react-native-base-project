/* eslint-disable quotes */
import globalConfig from "./global";
import configureStore from "../config-store";

/**
 * Get method
 * @param url
 * @returns {Promise<R>}
 */
const get = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      ...options,
      method: "GET",
      headers: getHeaders(url),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code) {
          reject(new Error(data.message));
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        return error;
      });
  });
};

/**
 * Post method
 * @param url
 * @param data
 * @param method
 * @returns {Promise<R>}
 */
const post = function (url, body = {}, method = "POST") {
  let headers = getHeaders(url);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      headers: headers,
      body: body,
      withCredentials: false,
    })
      .then(async (result) => {
        console.log("result", result);
        resolve(result);
      })
      .catch(async (error) => {
        reject(error);
      });
  });
};

const postFile = (url, body = {}, method = "POST") => {
  let headers = getHeaders();
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false,
      body: body,
    })
      .then(async (result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getHeaders = () => {
  let Headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
    Referer: "Mobile",
    "X-Token": `${globalConfig.getToken()}`,
  };

  return Headers;
};

export default {
  get,
  post,
  postFile,
  put: (url, data) => post(url, data, "PUT"),
};
