#! /usr/bin/env node     
// this is shebang,it tells the os to run it with nodejs

// import inquirer from inquirer module which is a commond line interface from node.js
import inquirer from "inquirer";

// declare a const answer and assign it to the result of inquirer.prompt function

const answers :{

    Sentence:string

}=await inquirer.prompt([{
  name :"Sentence",
  type:"input",
  message:"Enter your sentence to count the word:"

}])
const words=answers.Sentence.trim().split(" ");

// print the array of words to console

// console.log(words);  shows words in an array

// print the word count of sentencs

console.log(`Your word count is ${words.length}`);