import React from "react";
import axios from "axios";

const BASE_URL = "http://numbersapi.com/";
class FactApi {
  static async getTodaysFact() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    let resp = await axios.get(`${BASE_URL}${month}/${day}/date`);

    return resp.data;
  }
}
export default FactApi;
