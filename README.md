# NR Browser Coding Challenge

## Table of Contents

- Objective
- Installation and Running Application
  - Getting Started
  - Requirements
- Testing
- What would you do next, given more time (if anything)
- Bugs?/Issues?

## Objective

Create a program in javascript executable from the command line that when given text(s) will return a list of the 100 most common three word sequences

## Installation and Running Application

This project utilizes Javascript for simplicity, ease, and requirements.

### Getting Started

Ensuring installations are active
`npm i`

How to run program:
`node index.js text/intro.txt`
`node index.js text/moby_dick.txt`
`node index.js text/counting.txt`

Output:

Example
node index.js text/intro.txt
```
│ (index) │ sequence │ count │
| 0 │ 'welcome to my' │ 7 │
│ 1 │ 'to my nr' │ 5 │
│ 2 │ 'this is this' │ 4 │
│ 3 │ 'test this is' │ 4 │
│ 4 │ 'my nr code' │ 3 │
│ 5 │ 'hi this this' │ 2 │
│ 6 │ 'this this is' │ 2 │
│ 7 │ 'is this is' │ 2 │
│ 8 │ 'test file this' │ 2 │
│ 9 │ 'file this is' │ 2 │
│ 10 │ 'is this hi' │ 2 │
│ 11 │ 'welcome to welcome' │ 2 │
│ 12 │ 'to my welcome' │ 2 │
│ 13 │ 'my welcome to' │ 2 │
│ 14 │ 'my nr welcome' │ 2 │
│ 15 │ 'nr welcome to' │ 2 │
│ 16 │ 'nr code welcome' │ 2 │
│ 17 │ 'code welcome to' │ 2 │
│ 18 │ 'this is is' │ 1 │
│ 19 │ 'this hi hi' │ 1 │
│ 20 │ 'hi hi this' │ 1 │
│ 21 │ 'this hi welcome' │ 1 │
│ 22 │ 'hi welcome welcome' │ 1 │
│ 23 │ 'welcome welcome to' │ 1 │
│ 24 │ 'to welcome to' │ 1 │
│ 25 │ 'nr code challenge' │ 1 │
│ 26 │ 'code challenge welcome' │ 1 │
│ 27 │ 'challenge welcome to' │ 1
```

### Requirements

- [x] The program accepts as arguments a list of one or more file paths (e.g. ./solution.rb file1.txt file2.txt ...).
- [x] The program also accepts input on stdin (e.g. cat file1.txt | ./solution.rb).
- [x] The program outputs a list of the 100 most common three word sequences.
- [x] The program ignores punctuation, line endings, and is case insensitive (e.g. “I love\nsandwiches.” should be treated the same as "(I LOVE SANDWICHES!!)"). Watch out that contractions aren't changed into 2 words (eg. shouldn't should not become shouldn t).
- [x] The program should be well tested.
- [x] The program should be well structured and understandable.
- [x] The program is capable of processing large files and runs as fast as possible.

### Testing

`npm test`

### Github Actions

Adding Github Actions for CI/CD when changes are pushed to the branch, Jest will run before the file could be pushed to main branch.

### EC

- [x] The program is capable of processing large files and remains performant. Think about if the program needed to handle 1,000 Moby Dicks at once. What would you need to do? Consider memory consumption and speed.
- [x] It handles unicode characters(eg. the ü in Süsse or ß in Straße).

### What would you do next, given more time (if anything)

- The regex had limitations, after user testing realizing there were missing edgeases such as the apostrophe which is missed, which needed to add extra lines. In additon, to the partial
  matching when coming across dashes/hyphen (-) or (/n) focusing on edge cases to bypass. The limitaitons of regex made some complexities that was needed to account for.
- As this program stands, fully incorporating docker into the project to create a container for the program.
- The Jest test to incorpoate a performance metric to show how the process ran.

### Bugs? and Issues?

There were no known issues that presented themselves.
