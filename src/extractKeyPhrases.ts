import * as dotenv from "dotenv";

import {
  AzureKeyCredential,
  TextAnalyticsClient,
} from "@azure/ai-text-analytics";

// import database from "./material.json";

dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<cognitive services endpoint>";
const apiKey = process.env["TEXT_ANALYTICS_API_KEY"] || "<api key>";

const documents = [
  "Raw material for MAT0001",
  // "I need round bar size Diameter 30-50, please list materials",
  // "Material ID for 20MnCr5+A",
  // "List materials with Cr, Mn",
  // "Density for material MAT0001",
  // "Similar material MAT0005",
  // "What is weight for 155mm length MAT0010",
  // "What is cost for 250mm length bar MAT0032 $/kg and $/m",
];

export async function main() {
  console.log("== Extract Key Phrases Sample ==");

  const client = new TextAnalyticsClient(
    endpoint,
    new AzureKeyCredential(apiKey)
  );

  const results = await client.extractKeyPhrases(documents);

  for (const result of results) {
    console.log(`- Document ${result.id}`);
    if (!result.error) {
      console.log("\tKey phrases:");
      for (const phrase of result.keyPhrases) {
        console.log(`\t- ${phrase}`);
      }
    } else {
      console.error("  Error:", result.error);
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
