import app from "../utils/app";
import { sampleQuery } from "./test_helpers";
import supertest from "supertest";

const api = supertest(app);

describe("Test correct answer", () => {
  sampleQuery.forEach((q) =>
    test("Import question", async () => {
      const response = await api.post("/api/qna").send({ kind: "ConversationResult", result: q.question });
      expect(response.statusCode).toBe(201);
    })
  );

  test("Connect to ChatLog Database", async () => {
    const res = await api.get("/api/qna");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  sampleQuery.forEach((q) =>
    test("Return answer", async () => {
      const query = await api.post("/api/qna").send({ kind: "ConversationResult", result: q.question });
      const response = await api.get(`/api/qna/${query.body.qnaId}`);
      expect(response.body.answer).toContain(q.expect);
    })
  );
});