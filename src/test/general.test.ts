import app from "../utils/app";
import supertest from "supertest";

const api = supertest(app);

describe("Material test", () => {
  test("Connect to Material Database", async () => {
    const res = await api.get("/api/material");
    expect(res.status).toBe(200);
  });

  test("Connect to ChatLog Database", async () => {
    const res = await api.get("/api/qna");
    expect(res.status).toBe(200);
  });
});