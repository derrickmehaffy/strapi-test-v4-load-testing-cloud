import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 1000,
  // A string specifying the total duration of the test run.
  duration: "30s",
};

export default function () {
  http.get("http://127.0.0.1:1337/api/simple-tests?populate=*", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIxMzI1OTAxLCJleHAiOjE3MjM5MTc5MDF9.WFfM50kE9K3OyKV7CBOjA8-IHEgsjq3JxfAhjkgYl0A",
    },
  });
  sleep(1);
}
