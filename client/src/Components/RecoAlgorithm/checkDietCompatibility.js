const checkDietCompatibility = function (myProfile, userProfile) {
  switch (myProfile.diet) {
    case "strictly halal":
      if (userProfile.diet === "strictly halal") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.diet === "mostly halal") {
        userProfile.loveFactor += 7;
        break;
      }
    case "strictly kosher":
      if (userProfile.diet === "strictly kosher") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.diet === "mostly kosher") {
        userProfile.loveFactor += 7;
        break;
      }
    case "strictly vegetarian":
      if (userProfile.diet === "strictly vegetarian" || "strictly vegan") {
        userProfile.loveFactor += 10;
        break;
      }
      if (
        userProfile.diet === "mostly vegetarian" ||
        "mostly vegan" ||
        "vegetarian" ||
        "vegan"
      ) {
        userProfile.loveFactor += 5;
        break;
      }
    case "strictly vegan":
      if (userProfile.diet === "strictly vegetarian" || "strictly vegan") {
        userProfile.loveFactor += 10;
        break;
      }
      userProfile.diet === "mostly vegetarian" ||
        "mostly vegan" ||
        "vegetarian" ||
        "vegan";
    case "mostly vegan":
      if (
        userProfile.diet === "mostly vegetarian" ||
        "mostly vegan" ||
        "vegetarian" ||
        "vegan"
      ) {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.diet === "strictly vegetarian" || "strictly vegan") {
        userProfile.loveFactor += 5;
        break;
      }
    case "mostly vegetarian":
      if (
        userProfile.diet === "mostly vegetarian" ||
        "mostly vegan" ||
        "vegetarian" ||
        "vegan"
      ) {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.diet === "strictly vegetarian" || "strictly vegan") {
        userProfile.loveFactor += 5;
        break;
      }
    case "vegan":
      if (
        userProfile.diet === "mostly vegetarian" ||
        "mostly vegan" ||
        "vegetarian" ||
        "vegan"
      ) {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.diet === "strictly vegetarian" || "strictly vegan") {
        userProfile.loveFactor += 5;
        break;
      }
    case "vegetarian":
      if (
        userProfile.diet === "mostly vegetarian" ||
        "mostly vegan" ||
        "vegetarian" ||
        "vegan"
      ) {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.diet === "strictly vegetarian" || "strictly vegan") {
        userProfile.loveFactor += 5;
        break;
      }
  }
};
export default checkDietCompatibility;
