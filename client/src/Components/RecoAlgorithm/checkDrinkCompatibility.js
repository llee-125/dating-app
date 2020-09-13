module.exports = checkDrinkCompatibility = (myProfile, userProfile) => {
  switch (myProfile.drinks) {
    case "desperately":
      if (userProfile.drinks === "desperately") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.drinks === "very often") {
        userProfile.loveFactor += 2;
      }
      if (userProfile.drinks === "often") {
        userProfile.loveFactor += 1;
      }
      break;
    case "very often":
      if (userProfile.drinks === "very often") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.drinks === "desperately" || "often") {
        userProfile.loveFactor += 2;
      }
      if (userProfile.drinks === "socially") {
        userProfile.loveFactor += 1;
      }
      break;
    case "often":
      if (userProfile.drinks === "often") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.drinks === "very often" || "socially") {
        userProfile.loveFactor += 2;
      }
      if (userProfile.drinks === "desperately" || "rarely") {
        userProfile.loveFactor += 1;
      }
      break;
    case "socially":
      if (userProfile.drinks === "socially") {
        // userProfile.loveFactor += 3;
      }
      if (userProfile.drinks === "often" || "rarely") {
        userProfile.loveFactor += 2;
      }
      if (userProfile.drinks === "very often" || "not at all") {
        userProfile.loveFactor += 1;
      }
      break;
    case "rarely":
      if (userProfile.drinks === "rarely") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.drinks === "socially" || "not at all") {
        userProfile.loveFactor += 2;
      }
      if (userProfile.drinks === "often") {
        userProfile.loveFactor += 1;
      }
      break;
    case "not at all":
      if (userProfile.drinks === "not at all") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.drinks === "rarely") {
        userProfile.loveFactor += 2;
      }
      if (userProfile.drinks === "socially") {
        userProfile.loveFactor += 1;
      }
      break;
  }
};
