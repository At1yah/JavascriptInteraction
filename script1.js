function generate(name) {
    var messages = [
      "today you will embody the spirit of an OG pimp, dress down in fur and pull out your best cane",
      "who said the 70's is dead? Wear your biggest flares and funkies top!",
      "black. Wear all black. You can never go wrong with that.",
      "embrace the casual vibes today. Throw on your favorite jeans and a comfy tee for a relaxed and stylish look",
      "It's a floral kind of day. Floral pattern and pastel hues anyone?",
      "throw on some sexy leather and stilettos. Channel that 2004 Catwoman in all of us.  ",
      "what is the most NYC outfit you can think of? Yes you're right! Nothing! Nothing but a pair of timbs. Go be a menace to society and run amuck in the streets on NYC ",
      "listen hear me out. You can be Cruella Deville but with a coat made from NYC subway rats. Trust me no one will alert PETA",
      "out hip the hipsters. Go steal clothes from the homeless for that real rugged look and accessorize with a $10 drink :)",

    ];

    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = `${name}, ${messages[randomIndex]}`;
    var outText = document.getElementById('output');
    outText.innerText = message;
  
    restyle(outText);
  }

  function restyle(outText) {
    var colors = ["#3461eb", "#83339c", "#ba6334", "#34872e", "#4d2e87"];
    var fonts = ["'Courier New', Courier, monospace", "'Lucida Console', Monaco, monospace", "Arial, sans-serif", "Tahoma, Geneva, sans-serif"];
    var fontSizes = ["21px", "26px", "30px", "36px"];
  
    var colorIndex = Math.floor(Math.random() * colors.length);
    var fontIndex = Math.floor(Math.random() * fonts.length);
    var fontSizeIndex = Math.floor(Math.random() * fontSizes.length);
  
    outText.style.color = colors[colorIndex];
    outText.style.fontFamily = fonts[fontIndex];
    outText.style.fontSize = fontSizes[fontSizeIndex];
  }

  