const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What\'s your name? (Nicknames are also acceptable)', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.question('What\'s an activity you like doing?', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`)});

//   rl.close();
// });

rl.question('What\'s your name? Nicknames are also acceptable : ', (answer1) => {
  rl.question('What\'s an activity you like doing? : ', (answer2) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) : ', (answer3) => {
      rl.question('What\'s your favourite thing to eat for that meal? : ', (answer4) => {
        rl.question('Which sport is your absolute favourite? : ', (answer5) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! : ', (answer6) => {
   
            console.log(`\nHi my name is ${answer1}, one of my many hobbies is ${answer2}. When I'm not doing ${answer2} I like to play or watch ${answer5}.\n${answer3} is my favorrite meal time and at that time I enjoy eating ${answer4}.\nA little known secret is ${answer6} is my super power\n`);
            rl.close();

          });
        });
      });
    });
  });
});