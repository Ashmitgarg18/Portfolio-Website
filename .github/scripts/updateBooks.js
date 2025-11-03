import fs from "fs";
import fetch from "node-fetch";
import { XMLParser } from "fast-xml-parser";

const FEEDS = {
  currentlyReading: "https://oku.club/rss/collection/j06WR",
  read: "https://oku.club/rss/collection/vQXqF"
};

const parser = new XMLParser({ ignoreAttributes: false });

async function fetchFeed(url) {
  const response = await fetch(url);
  const xml = await response.text();
  const data = parser.parse(xml);
  const items = data?.rss?.channel?.item || [];

  return items.map(i => ({
    title: i.title || "Untitled",
    author: i["dc:creator"] || "Unknown Author",
    link: i.link,
    cover: i["oku:cover"] || null
  }));
}

async function main() {
  try {
    const currentlyReading = await fetchFeed(FEEDS.currentlyReading);
    const read = await fetchFeed(FEEDS.read);
    const result = {
      currentlyReading,
      read,
      lastUpdated: new Date().toISOString()
    };

    fs.mkdirSync("public/data", { recursive: true });
    fs.writeFileSync("public/data/books.json", JSON.stringify(result, null, 2));
    console.log("✅ Successfully updated books.json");
  } catch (err) {
    console.error("❌ Error updating books.json:", err);
    process.exit(1);
  }
}

main();
