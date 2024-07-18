const { faker } = require("@faker-js/faker");
const fetch = require("node-fetch");
const { default: slugify } = require("slugify");

const entries = 10;
const strapiURL = "http://localhost:1337";
const contentType = "simple-tests";
const token = "set your jwt here";

const seed = async () => {
  for (let i = 0; i < entries; i++) {
    const data = {
      data: {
        string: faker.lorem.sentence(5),
        richtext: faker.lorem.paragraph(3),
        json: { test: true },
        boolean: faker.datatype.boolean(),
        uid: slugify(faker.lorem.words(2)),
        dz: [{ __component: "test.dz", string: faker.lorem.sentence(5) }],
        compo: { string: faker.lorem.sentence(5) },
      },
    };

    console.log(`Creating entry ${i + 1} of ${entries}`);

    const response = await fetch(`${strapiURL}/api/${contentType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
