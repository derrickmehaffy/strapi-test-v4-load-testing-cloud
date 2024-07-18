const { faker } = require("@faker-js/faker");
const fetch = require("node-fetch");
const { default: slugify } = require("slugify");
const slufigy = require("slugify");

const entries = 10;
const strapiURL = "http://localhost:1337";
const contentType = "simple-tests";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIxMzI1OTAxLCJleHAiOjE3MjM5MTc5MDF9.WFfM50kE9K3OyKV7CBOjA8-IHEgsjq3JxfAhjkgYl0A";

const seed = async () => {
  for (let i = 0; i < entries; i++) {
    const data = {
      data: {
        string: faker.lorem.text(),
        richtext: faker.lorem.paragraph(),
        json: { test: true },
        boolean: faker.datatype.boolean(),
        uid: slugify(faker.lorem.words(2)),
        dz: [{ __component: "test.dz", string: faker.lorem.text() }],
        compo: { string: faker.lorem.text() },
      },
    };

    console.log(`Creating entry ${i + 1} of ${entries}`);

    const response = await fetch(`${strapiURL}/api/${contentType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Failed to create entry ${i + 1}`);
      console.error(await response.json());
    }

    let json = await response.json();

    console.log(`Entry ${i + 1} created with id ${json.data.id}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

seed();
