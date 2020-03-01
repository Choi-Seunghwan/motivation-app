import axios from "axios";

function getRandomQuote() {
  console.log("call getRandomQuote API");
  return new Promise(resolve => {
    axios.get("https://api.quotable.io/random").then(result => {
      console.log("success getRandomQuote API", result);
      const data = { content: result.data.content, author: result.data.author };
      resolve(data);
    });
  });
}

export { getRandomQuote };
