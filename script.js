let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    person: "Steve Jobs",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "The best way to predict the future is to create it.",
    person: "Peter Drucker",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "The best revenge is massive success.",
    person: "Frank Sinatra",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
