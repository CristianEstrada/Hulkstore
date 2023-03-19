import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTU1MDI0ZDc0MGU3MTJlZDNlN2FjOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTE4NzUwMCwiZXhwIjoxNjc5NDQ2NzAwfQ.mNKut0-P_RkUwisaiGn3yTew4i58xNTS4dfP_T-0eVo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
