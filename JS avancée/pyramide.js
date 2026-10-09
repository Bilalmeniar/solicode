for (ligne = 1; ligne <= 20; ligne++){
  text = "";

  for (space = 1; space <= 20 - ligne; space++) {
   text = text + " ";
  }

    for (etoile = 1; etoile <= ( 2 * ligne) -1; etoile++){
      text = text+"*";
    }

    console.log(text)
  }
