import QueryModels from "../../types/searchQuery";

export const confidenceScore = (query: QueryModels): number => {
  const sum =
    query.result.prediction.intents[0].confidenceScore +
    query.result.prediction.entities.reduce(
      (prev, curr) => curr.confidenceScore + prev,
      0
    );
  return sum / (query.result.prediction.entities.length + 1);
};
