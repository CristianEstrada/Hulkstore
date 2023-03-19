import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTU1MDI0ZDc0MGU3MTJlZDNlN2FjOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTI1ODg2OCwiZXhwIjoxNjc5NTE4MDY4fQ.gUmzPJG0AHPQqbKFmXG6I_E65aIA_18VGO_-zgSZSO0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
