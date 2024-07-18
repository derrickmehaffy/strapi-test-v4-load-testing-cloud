import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 1000,
  // A string specifying the total duration of the test run.
  duration: "30s",
};

const domain = "http://localhost:1337";
const contentType = "simple-tests";
const params = "populate=*";
const token = "set your jwt here";

export default function () {
  http.get(`${domain}/api/${contentType}?${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  sleep(1);
}
