let umbrella = {
  color: "pink",
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already open!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella";
    }

  },
  close: function() {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  }
};
