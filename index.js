const fs = require("fs");
const readline = require("readline");

function isFullWord(word) {
  return (
    word.length > 0 &&
    word.replace(/-/g, "").match(/^\p{L}[\p{L}'-]*$/u) !== null
  );
}

function extractThreeWordSequences(text) {
  let textWithSpaces = text.replace(/\n/g, " ");
  let removeApostropheText = textWithSpaces.replace(/(\w)'\s(\w)/g, "$1'$2");
  removeApostropheText = removeApostropheText.replace(/[--]/g, "");

  const textFix = removeApostropheText
    .toLowerCase()
    .replace(/[^\p{L}\s]+/gu, "")
    .trim();

  const words = textFix.split(/\s+/);
  const sequences = {};

  for (let i = 0; i <= words.length - 3; i++) {
    const word1 = words[i].replace(/^['-]|['-]$/g, "");
    const word2 = words[i + 1].replace(/^['-]|['-]$/g, "");
    const word3 = words[i + 2].replace(/^['-]|['-]$/g, "");

    if (isFullWord(word1) && isFullWord(word2) && isFullWord(word3)) {
      const sequence = `${word1} ${word2} ${word3}`;
      sequences[sequence] = (sequences[sequence] || 0) + 1;
    }
  }

  return sequences;
}

function processFile(filePath) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      output: process.stdout,
      terminal: false,
    });

    let text = "";

    rl.on("line", (line) => {
      text += line + "\n";
    });

    rl.on("close", () => {
      resolve(text.trim());
    });

    rl.on("error", (err) => {
      reject(`Error reading file ${filePath}: ${err}`);
    });
  });
}

async function main() {
  let text = "";

  if (!process.stdin.isTTY) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rl.on("line", (line) => {
      text += line + "\n";
    });

    rl.on("close", () => {
      const sequences = extractThreeWordSequences(text);
      const topSequences = printTopSequences(sequences);
      console.table(topSequences);
    });
  } else {
    const filePaths = process.argv.slice(2);
    try {
      for (const filePath of filePaths) {
        const fileText = await processFile(filePath);
        text += fileText + " ";
      }
      const sequences = extractThreeWordSequences(text);
      const topSequences = printTopSequences(sequences);
      console.table(topSequences);
    } catch (err) {
      console.error(err);
    }
  }
}

function printTopSequences(sequences) {
  const sortedSequences = Object.entries(sequences)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100)
    .map(([sequence, count]) => ({ sequence, count }));

  return sortedSequences;
}

module.exports = {
  isFullWord,
  extractThreeWordSequences,
  processFile,
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.js"],
};

main();
