export const UNITS = [
    {
      id: 1,
      title: 'Functions',
      subtitle: '',
      showKeyboard: true,
      lessons: [
        {
          stepId: 1,
          backendLessonId: '8b8fa262-d683-4f9c-a20d-793b1d25b557',
          label: 'Build a function (adaptive)',
          learnText:
            'Start with the function keyword, then build a real JavaScript function one step at a time.',
          targetsByTier: {
            1: [
              'function hello() {',
              '  return "Hello";',
              '}',
              'hello();',
  
              'function greet() {',
              '  return "Hi";',
              '}',
              'greet();',
            ],
            2: [
              'function run() {',
              '  return 1;',
              '}',
              'run();',
  
              'function code() {',
              '  return "Code";',
              '}',
              'code();',
            ],
            3: [
              'function hello() {',
              '  return "Hello";',
              '}',
              '',
              'hello();',
              'hello();',
  
              'function greet() {',
              '  return "Hi";',
              '}',
              '',
              'greet();',
              'greet();',
            ],
          },
          tierRules: {
            minTier: 1,
            maxTier: 3,
            promoteIf: { wpm: 28, accuracy: 0.95, streak: 2 },
            demoteIf: { wpm: 14, accuracy: 0.85, streak: 2 },
          },
        },
        {
          stepId: 2,
          backendLessonId: '36bb7f66-b6db-4939-94b9-d010884520e9',
          label: 'Call the function (adaptive)',
          learnText:
            'Practice calling functions in short JavaScript sequences.',
          targetsByTier: {
            1: [
              'hello();',
              'greet();',
              'run();',
              'code();',
            ],
            2: [
              'function hello() {',
              '  return "Hello";',
              '}',
              'hello();',
  
              'function greet() {',
              '  return "Hi";',
              '}',
              'greet();',
            ],
            3: [
              'function hello() {',
              '  return "Hello";',
              '}',
              'hello();',
              'hello();',
  
              'function run() {',
              '  return 1;',
              '}',
              'run();',
              'run();',
            ],
          },
        },
        {
          stepId: 3,
          backendLessonId: 'f6b7d614-518b-4e45-bb47-f48b5a82d38d',
          label: 'Parameters (adaptive)',
          learnText:
            'Add parameters to functions and return values using those inputs.',
          targetsByTier: {
            1: [
              'function greet(name) {',
              '}',
  
              'function hello(user) {',
              '}',
  
              'function print(msg) {',
              '}',
            ],
            2: [
              'function greet(name) {',
              '  return "Hi " + name;',
              '}',
  
              'function hello(user) {',
              '  return "Hello " + user;',
              '}',
  
              'function print(msg) {',
              '  return msg;',
              '}',
            ],
            3: [
              'function greet(name) {',
              '  return "Hi " + name;',
              '}',
              'greet("Rustic");',
  
              'function hello(user) {',
              '  return "Hello " + user;',
              '}',
              'hello("Logan");',
  
              'function print(msg) {',
              '  return msg;',
              '}',
              'print("Code");',
            ],
          },
        },
        {
          stepId: 4,
          backendLessonId: '75511eb8-551f-431f-8506-980bdd77bd23',
          label: 'Mini program (adaptive)',
          learnText:
            'Combine function creation and calls into short JavaScript programs.',
          targetsByTier: {
            1: [
              'function hello() {',
              '  return "Hello";',
              '}',
              'hello();',
  
              'function greet() {',
              '  return "Hi";',
              '}',
              'greet();',
            ],
            2: [
              'function hello() {',
              '  return "Hello";',
              '}',
              'hello();',
              'hello();',
  
              'function greet() {',
              '  return "Hi";',
              '}',
              'greet();',
              'greet();',
            ],
            3: [
              'function greet(name) {',
              '  return "Hi " + name;',
              '}',
              'greet("Rustic");',
              'greet("Logan");',
  
              'function run() {',
              '  return 1;',
              '}',
              'run();',
              'run();',
              'run();',
            ],
          },
        },
        {
          stepId: 5,
          backendLessonId: '1f010001-1111-4111-8111-111111111111',
          label: 'Return values (adaptive)',
          learnText:
            'Focus on return statements inside real function bodies.',
          targetsByTier: {
            1: [
              'return "Hello";',
              'return 1;',
              'return name;',
            ],
            2: [
              'function hello() {',
              '  return "Hello";',
              '}',
  
              'function getScore() {',
              '  return 1;',
              '}',
  
              'function getName() {',
              '  return "Rustic";',
              '}',
            ],
            3: [
              'function greet(name) {',
              '  return "Hi " + name;',
              '}',
              'greet("Rustic");',
  
              'function getScore() {',
              '  return 10 + 5;',
              '}',
              'getScore();',
  
              'function getLives() {',
              '  return 3;',
              '}',
              'getLives();',
            ],
          },
        },
      ],
      finalChallenge: {
        label: 'Final Challenge',
        language: 'javascript',
        prompt:
          'Write a function named greet that takes a parameter called name and returns "Hello " + name. Call greet with the argument "World" and log the result with console.log.',
        starterCode: '// Write your code here\n',
        expectedOutput: 'Hello World',
      },
    },
  
    {
      id: 2,
      title: 'Variables',
      subtitle: '',
      showKeyboard: true,
      lessons: [
        {
          stepId: 1,
          backendLessonId: '1ea1251b-bb01-4bf0-9484-28aff13dc59e',
          label: 'Make a variable (adaptive)',
          learnText:
            'Build variable declarations into real JavaScript snippets.',
          targetsByTier: {
            1: [
              'let score = 0;',
              'let name = "Rustic";',
              'let level = 1;',
              'let mode = "easy";',
            ],
            2: [
              'let username = "Rustic";',
              'let score = 0;',
  
              'let player = "Logan";',
              'let lives = 3;',
  
              'let mode = "easy";',
              'let points = 10;',
            ],
            3: [
              'let username = "Rustic";',
              'let score = 0;',
              'score = score + 1;',
  
              'let player = "Logan";',
              'let lives = 3;',
              'lives = lives - 1;',
  
              'let points = 10;',
              'points = points + 5;',
            ],
          },
        },
        {
          stepId: 2,
          backendLessonId: '378b809d-a472-40d1-ab80-2621e647f3c5',
          label: 'Numbers (adaptive)',
          learnText:
            'Practice number variables and updating them in actual code.',
          targetsByTier: {
            1: [
              'let score = 0;',
              'score = score + 1;',
  
              'let lives = 3;',
              'lives = lives - 1;',
  
              'let points = 10;',
              'points = points + 5;',
            ],
            2: [
              'let score = 0;',
              'score = score + 1;',
              'score = score + 1;',
  
              'let lives = 3;',
              'lives = lives - 1;',
              'lives = lives - 1;',
            ],
            3: [
              'let score = 0;',
              'score = score + 1;',
              'score = score + 1;',
              'console.log(score);',
  
              'let points = 10;',
              'points = points + 5;',
              'points = points + 5;',
              'console.log(points);',
            ],
          },
        },
        {
          stepId: 3,
          backendLessonId: '24c9be0d-a410-4fb9-8f7f-00dad0580175',
          label: 'const (adaptive)',
          learnText:
            'Use const for fixed values and pair it with let when values change.',
          targetsByTier: {
            1: [
              'const maxLives = 3;',
              'const username = "Rustic";',
              'const levelName = "Easy";',
            ],
            2: [
              'const maxLives = 3;',
              'let lives = maxLives;',
  
              'const startScore = 0;',
              'let score = startScore;',
  
              'const username = "Rustic";',
              'let player = username;',
            ],
            3: [
              'const maxLives = 3;',
              'let lives = maxLives;',
              'lives = lives - 1;',
  
              'const startScore = 0;',
              'let score = startScore;',
              'score = score + 1;',
  
              'const bonus = 5;',
              'let points = 10;',
              'points = points + bonus;',
            ],
          },
        },
        {
          stepId: 4,
          backendLessonId: '3ad6c530-411e-4417-8703-d213955dd7cf',
          label: 'Mini program (adaptive)',
          learnText:
            'Combine strings, numbers, and updates into a short program.',
          targetsByTier: {
            1: [
              'let username = "Rustic";',
              'let score = 0;',
              'score = score + 1;',
  
              'let player = "Logan";',
              'let lives = 3;',
              'lives = lives - 1;',
            ],
            2: [
              'let username = "Rustic";',
              'let score = 0;',
              'score = score + 1;',
              'score = score + 1;',
  
              'let player = "Logan";',
              'let lives = 3;',
              'lives = lives - 1;',
              'lives = lives - 1;',
            ],
            3: [
              'const bonus = 5;',
              'let points = 10;',
              'points = points + bonus;',
              'points = points + bonus;',
              'console.log(points);',
  
              'let username = "Rustic";',
              'let score = 0;',
              'score = score + 1;',
              'score = score + 1;',
              'score = score + 1;',
              'console.log(score);',
            ],
          },
        },
        {
          stepId: 5,
          backendLessonId: '2f020002-2222-4222-8222-222222222222',
          label: 'Strings + numbers (adaptive)',
          learnText:
            'Work with both string and numeric variables in the same lesson.',
          targetsByTier: {
            1: [
              'let username = "Rustic";',
              'let score = 0;',
  
              'let player = "Logan";',
              'let level = 1;',
  
              'let mode = "easy";',
              'let points = 10;',
            ],
            2: [
              'let username = "Rustic";',
              'let score = 0;',
              'console.log(username);',
  
              'let player = "Logan";',
              'let level = 1;',
              'console.log(level);',
            ],
            3: [
              'let username = "Rustic";',
              'let score = 0;',
              'score = score + 1;',
              'console.log(score);',
  
              'let player = "Logan";',
              'let level = 1;',
              'level = level + 1;',
              'console.log(level);',
  
              'let mode = "easy";',
              'let points = 10;',
              'points = points + 5;',
              'console.log(points);',
            ],
          },
        },
      ],
      finalChallenge: {
        label: 'Final Challenge',
        language: 'javascript',
        prompt:
          'Declare a variable score starting at 0. Add 3 to it, then log your updated score with console.log.',
        starterCode: '// Write your code here\n',
        expectedOutput: '3',
      },
    },
  
    {
      id: 3,
      title: 'If Statements',
      subtitle: '',
      showKeyboard: true,
      lessons: [
        {
          stepId: 1,
          backendLessonId: '61af8e09-7372-4fac-8688-816db04e99c6',
          label: 'If basics (adaptive)',
          learnText:
            'Start with simple if syntax, then add bodies and real JavaScript structure.',
          targetsByTier: {
            1: [
              'if (score >= 10) {',
              '}',
  
              'if (lives > 0) {',
              '}',
  
              'if (ready === true) {',
              '}',
            ],
            2: [
              'if (score >= 10) {',
              '  console.log("win");',
              '}',
  
              'if (lives > 0) {',
              '  console.log("keep going");',
              '}',
  
              'if (ready === true) {',
              '  console.log("start");',
              '}',
            ],
            3: [
              'if (score >= 10) {',
              '  console.log("win");',
              '} else {',
              '  console.log("try again");',
              '}',
  
              'if (lives > 0) {',
              '  console.log("keep going");',
              '} else {',
              '  console.log("game over");',
              '}',
            ],
          },
        },
        {
          stepId: 2,
          backendLessonId: '7eda3673-a238-4a5a-8cc6-6156eb08a9e0',
          label: 'If + else (adaptive)',
          learnText:
            'Practice branching between two outcomes with full code blocks.',
          targetsByTier: {
            1: [
              'if (score >= 10) {',
              '} else {',
              '}',
  
              'if (lives > 0) {',
              '} else {',
              '}',
            ],
            2: [
              'if (score >= 10) {',
              '  console.log("win");',
              '} else {',
              '  console.log("try again");',
              '}',
  
              'if (lives > 0) {',
              '  console.log("keep going");',
              '} else {',
              '  console.log("game over");',
              '}',
            ],
            3: [
              'let score = 9;',
              'if (score >= 10) {',
              '  console.log("win");',
              '} else {',
              '  console.log("try again");',
              '}',
  
              'let lives = 0;',
              'if (lives > 0) {',
              '  console.log("keep going");',
              '} else {',
              '  console.log("game over");',
              '}',
            ],
          },
        },
        {
          stepId: 3,
          backendLessonId: 'e47f9d60-f788-443a-9338-417a62c9e0e9',
          label: 'Exact match (===) (adaptive)',
          learnText:
            'Use exact comparison for strings and values.',
          targetsByTier: {
            1: [
              'if (username === "Rustic") {',
              '}',
  
              'if (mode === "easy") {',
              '}',
  
              'if (name === "Logan") {',
              '}',
            ],
            2: [
              'if (username === "Rustic") {',
              '  console.log("welcome");',
              '}',
  
              'if (mode === "easy") {',
              '  console.log("easy mode");',
              '}',
  
              'if (name === "Logan") {',
              '  console.log("hello");',
              '}',
            ],
            3: [
              'if (username === "Rustic" && score >= 10) {',
              '  console.log("high score");',
              '}',
  
              'if (mode === "easy" && lives > 0) {',
              '  console.log("ready");',
              '}',
            ],
          },
        },
        {
          stepId: 4,
          backendLessonId: '2c1aec10-115b-4610-86bf-5afe0229e62a',
          label: 'Mini program (adaptive)',
          learnText:
            'Set variables first, then use them in branching logic.',
          targetsByTier: {
            1: [
              'let score = 9;',
              'if (score >= 10) {',
              '} else {',
              '}',
  
              'let lives = 0;',
              'if (lives > 0) {',
              '} else {',
              '}',
            ],
            2: [
              'let score = 9;',
              'if (score >= 10) {',
              '  console.log("win");',
              '} else {',
              '  console.log("try again");',
              '}',
  
              'let lives = 0;',
              'if (lives > 0) {',
              '  console.log("keep going");',
              '} else {',
              '  console.log("game over");',
              '}',
            ],
            3: [
              'let username = "Rustic";',
              'let score = 9;',
              'if (score >= 10) {',
              '  console.log("win");',
              '} else {',
              '  console.log("try again");',
              '}',
  
              'let mode = "easy";',
              'let lives = 0;',
              'if (lives > 0) {',
              '  console.log("keep going");',
              '} else {',
              '  console.log("game over");',
              '}',
            ],
          },
        },
        {
          stepId: 5,
          backendLessonId: '3f030003-3333-4333-8333-333333333333',
          label: 'Conditions with && (adaptive)',
          learnText:
            'Combine two conditions for more specific logic.',
          targetsByTier: {
            1: [
              'if (score >= 10 && lives > 0) {',
              '}',
  
              'if (ready === true && mode === "easy") {',
              '}',
            ],
            2: [
              'if (score >= 10 && lives > 0) {',
              '  console.log("continue");',
              '}',
  
              'if (ready === true && mode === "easy") {',
              '  console.log("start");',
              '}',
            ],
            3: [
              'let score = 10;',
              'let lives = 1;',
              'if (score >= 10 && lives > 0) {',
              '  console.log("continue");',
              '}',
  
              'let ready = true;',
              'let mode = "easy";',
              'if (ready === true && mode === "easy") {',
              '  console.log("start");',
              '}',
            ],
          },
        },
      ],
      finalChallenge: {
        label: 'Final Challenge',
        language: 'javascript',
        prompt:
          'Declare a variable score and set it to 15. Write an if/else statement: if score is greater than or equal to 10, log "You win!" — otherwise log "Try again".',
        starterCode: '// Write your code here\n',
        expectedOutput: 'You win!',
      },
    },
  
    {
      id: 4,
      title: 'Loops (for)',
      subtitle: '',
      showKeyboard: true,
      lessons: [
        {
          stepId: 1,
          backendLessonId: '127db732-8cad-4152-8edf-0ea67d17be20',
          label: 'For loop header (adaptive)',
          learnText:
            'Learn the shape of a for loop, then grow into full loop bodies.',
          targetsByTier: {
            1: [
              'for (let i = 0; i < 5; i = i + 1) {',
              '}',
  
              'for (let x = 0; x < 3; x = x + 1) {',
              '}',
            ],
            2: [
              'for (let i = 0; i < 5; i = i + 1) {',
              '  console.log(i);',
              '}',
  
              'for (let x = 0; x < 3; x = x + 1) {',
              '  console.log(x);',
              '}',
            ],
            3: [
              'let score = 0;',
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '}',
  
              'let lives = 3;',
              'for (let x = 0; x < 3; x = x + 1) {',
              '  lives = lives - 1;',
              '}',
            ],
          },
        },
        {
          stepId: 2,
          backendLessonId: 'a78136b7-ba5d-494d-b572-80002dad67cb',
          label: 'Loop body (adaptive)',
          learnText:
            'Put repeated work inside the loop body.',
          targetsByTier: {
            1: [
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '}',
  
              'for (let x = 0; x < 3; x = x + 1) {',
              '  lives = lives - 1;',
              '}',
            ],
            2: [
              'let score = 0;',
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '}',
  
              'let lives = 3;',
              'for (let x = 0; x < 3; x = x + 1) {',
              '  lives = lives - 1;',
              '}',
            ],
            3: [
              'let score = 0;',
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '}',
              'console.log(score);',
  
              'let lives = 3;',
              'for (let x = 0; x < 3; x = x + 1) {',
              '  lives = lives - 1;',
              '}',
              'console.log(lives);',
            ],
          },
        },
        {
          stepId: 3,
          backendLessonId: '75df32e6-1117-40d5-b88e-9f2c459f1cda',
          label: 'Mini program (adaptive)',
          learnText:
            'Build short full programs using loops and variables.',
          targetsByTier: {
            1: [
              'let score = 0;',
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '}',
  
              'let lives = 3;',
              'for (let x = 0; x < 3; x = x + 1) {',
              '  lives = lives - 1;',
              '}',
            ],
            2: [
              'let score = 0;',
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '}',
              'score = score + 1;',
  
              'let points = 10;',
              'for (let x = 0; x < 3; x = x + 1) {',
              '  points = points + 5;',
              '}',
            ],
            3: [
              'let score = 0;',
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '}',
              'score = score + 1;',
              'console.log(score);',
  
              'let points = 10;',
              'for (let x = 0; x < 3; x = x + 1) {',
              '  points = points + 5;',
              '}',
              'points = points + 5;',
              'console.log(points);',
            ],
          },
        },
        {
          stepId: 4,
          backendLessonId: '4f040004-4444-4444-8444-444444444444',
          label: 'Loop + logging (adaptive)',
          learnText:
            'Practice loop structure alongside console logging.',
          targetsByTier: {
            1: [
              'console.log(i);',
              'console.log(score);',
              'console.log(points);',
            ],
            2: [
              'for (let i = 0; i < 5; i = i + 1) {',
              '  console.log(i);',
              '}',
  
              'for (let x = 0; x < 3; x = x + 1) {',
              '  console.log(x);',
              '}',
            ],
            3: [
              'let score = 0;',
              'for (let i = 0; i < 5; i = i + 1) {',
              '  score = score + 1;',
              '  console.log(score);',
              '}',
  
              'let points = 10;',
              'for (let x = 0; x < 3; x = x + 1) {',
              '  points = points + 5;',
              '  console.log(points);',
              '}',
            ],
          },
        },
      ],
      finalChallenge: {
        label: 'Final Challenge',
        language: 'javascript',
        prompt:
          'Declare a variable score starting at 0. Write a for loop that runs 5 times and adds 1 to score each iteration using score = score + 1. On each iteration log score with console.log.',
        starterCode: '// Write your code here\n',
        expectedOutput: '1\n2\n3\n4\n5\n',
      },
    },
  ]