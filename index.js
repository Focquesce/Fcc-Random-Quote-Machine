window.onload = init;
const QUOTEDEPOT = [
  {
    quote: '"Give orange me give eat orange me eat orange give me eat orange give me you."',
    author: "Nim Chimpskey"
  },
  {
    quote: '"What is a mechanical keyboard? Mechanical keyboards are the keyboards that most people picture when they think about keyboards."',
    author: "Google"
  },
  {
    quote: '"Is this a pigeon?"',
    author: "Guy who mistook a butterfly for a goddamn pigeon"
  },
  {
    quote: '"What did the pianist say to the violist? You\'re shit."',
    author: "Eddy"
  },
  {
    quote: '"What did the violist say to the violist? We\'re shit."',
    author: "Brett"
  }
];
function init() {
  generateQuote();
}
function generateQuote() {
  let quoteMagnitude = QUOTEDEPOT.length;
  let aleatoryIndex = Math.floor(Math.random() * quoteMagnitude)
  document.getElementById("text").innerText = QUOTEDEPOT[aleatoryIndex].quote;
  document.getElementById("author").innerText = QUOTEDEPOT[aleatoryIndex].author;
}
