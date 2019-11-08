import { Connection } from "typeorm";
import * as faker from "faker";

import { User, Job } from "./../../entity";
import { TestClient } from "./../../utils/TestClient";
import { createTestConn } from "./../../testUtils/createTestConn";

let conn: Connection;
const client = new TestClient(process.env.TEST_HOST as string);
faker.seed(Date.now() + 1);
const email = faker.internet.email();
const password = faker.internet.password();

beforeAll(async () => {
  conn = await createTestConn();
});

afterAll(async () => {
  conn.close();
});

describe("job tests", () => {
  test("can create job", async () => {
    await client.register(email, password);
    const customer = await User.find({
      where: {
        email
      }
    });

    const response = await client.createJob(
      "date",
      customer[0].id,
      "type",
      "details",
      "status"
    );

    console.log(JSON.stringify(response));

    /*
        response: { 
                data: {
                createJob: null
            }
        }
    */

    expect(response.data.createJob).toEqual(null);

    const createdJob = await Job.find();

    expect(createdJob[0].date).toEqual('date');
    expect(createdJob[0].customer).toEqual(customer[0].id);
  });
});
