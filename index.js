import fetch from "node-fetch";

import "dotenv/config";

const { API_KEY, API_TOKEN } = process.env;

const BOARD_ID = "yl1wjiaX";

const lists = await fetch(
  `https://api.trello.com/1/boards/${BOARD_ID}/lists?key=${API_KEY}&token=${API_TOKEN}`
).then((response) => response.json());

console.log(lists);
