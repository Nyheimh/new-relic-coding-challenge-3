# NR Browser Coding Challenge

## Table of Contents

- [Objective](#objective)
- [Installation and Running Application](#installation-and-running-application)
  - [Getting Started](#getting-started)
  - [Requirements](#requirements)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)
- [Known Issues](#known-issues)

## Objective

Create a JavaScript program executable from the command line that, when given text(s), will return a list of the 100 most common three word sequences.

## Installation and Running Application

This project uses JavaScript for simplicity, ease of use, and to meet requirements.

### Getting Started

Ensure installations are active:

```bash
npm install
```

To run the program:

```bash
node index.js text/intro.txt
node index.js text/moby_dick.txt
node index.js text/counting.txt
node index.js text/unicode.txt
```

Example output for `node index.js text/intro.txt`:

```
│ (index) │ sequence           │ count │
| 0       │ 'welcome to my'    │ 7     │
│ 1       │ 'to my nr'         │ 5     │
│ 2       │ 'this is this'     │ 4     │
│ 3       │ 'test this is'     │ 4     │
│ 4       │ 'my nr code'       │ 3     │
│ 5       │ 'hi this this'     │ 2     │
│ 6       │ 'this this is'     │ 2     │
│ 7       │ 'is this is'       │ 2     │
│ 8       │ 'test file this'   │ 2     │
│ 9       │ 'file this is'     │ 2     │
│ 10      │ 'is this hi'       │ 2     │
│ 11      │ 'welcome to welcome' │ 2   │
│ 12      │ 'to my welcome'    │ 2     │
│ 13      │ 'my welcome to'    │ 2     │
│ 14      │ 'my nr welcome'    │ 2     │
│ 15      │ 'nr welcome to'    │ 2     │
│ 16      │ 'nr code welcome'  │ 2     │
│ 17      │ 'code welcome to'  │ 2     │
│ 18      │ 'this is is'       │ 1     │
│ 19      │ 'this hi hi'       │ 1     │
│ 20      │ 'hi hi this'       │ 1     │
│ 21      │ 'this hi welcome'  │ 1     │
│ 22      │ 'hi welcome welcome' │ 1   │
│ 23      │ 'welcome welcome to' │ 1   │
│ 24      │ 'to welcome to'    │ 1     │
│ 25      │ 'nr code challenge' │ 1   │
│ 26      │ 'code challenge welcome' │ 1 │
│ 27      │ 'challenge welcome to' │ 1 │
```

### Requirements

- [x] The program accepts as arguments a list of one or more file paths (e.g., `./solution.rb file1.txt file2.txt ...`).
- [x] The program also accepts input on stdin (e.g., `cat file1.txt | ./solution.rb`).
- [x] The program outputs a list of the 100 most common three-word sequences.
- [x] The program ignores punctuation, line endings, and is case insensitive (e.g., “I love\nsandwiches.” should be treated the same as "(I LOVE SANDWICHES!!)"). Ensure contractions aren't split into two words (e.g., "shouldn't" should not become "shouldn t").
- [x] The program should be well tested.
- [x] The program should be well structured and understandable.
- [x] The program is capable of processing large files efficiently.

## Testing

To run tests:

```bash
npm test
```

### GitHub Actions

This project uses GitHub Actions for CI/CD. When changes are pushed to the branch, Jest will run before the file can be pushed to the main branch.

### Extra Credit

- [x] The program can process large files efficiently. Consider memory consumption and speed, especially if handling 1,000 Moby Dicks at once.
- [x] The program handles Unicode characters (e.g., the ü in Süsse or ß in Straße).

## Future Enhancements

- (What would you do next, given more time)

- Regex has limitations, after user testing, I realized there were missing edge cases such as the missing apostrophe, which needed to add extra lines. In addition, to the partial matching when coming across dashes/hyphens (-) or (/n) focuses on edge cases to bypass. The limitations of regex made some complexities that needed to be accounted for.
- As this program stands, fully incorporating Docker into the program the program.
- Add a performance metric in Jest tests to measure the program's efficiency.

## Known Issues

- (Bug and Issues)

There are no known issues at this time.
