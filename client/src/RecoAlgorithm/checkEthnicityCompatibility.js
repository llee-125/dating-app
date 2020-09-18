const checkEthnicityCompatibility = (myProfile, userProfile) => {
  switch (myProfile.ethnicity) {
    case "asian":
      if (userProfile.ethnicity === "asian") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "asian, white") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.ethnicity === "asian, pacific islander") {
        userProfile.loveFactor += 5;
      }
      break;
    case "black":
      if (userProfile.ethnicity === "black") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "black, white") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "black, hispanic / latin") {
        userProfile.loveFactor += 7;
      }
      break;
    case "hispanic / latin":
      if (userProfile.ethnicity === "hispanic / latin") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "hispanic / latin, white") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "hispanic / latin, white, other") {
        userProfile.loveFactor += 7;
      }
      break;
    case "indian":
      if (userProfile.ethnicity === "indian") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "indian, white") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "indian, hispanic / latin") {
        userProfile.loveFactor += 7;
      }
      break;
    case "middle eastern":
      if (userProfile.ethnicity === "middle eastern") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "middle eastern, white") {
        userProfile.loveFactor += 10;
      }
      if (
        userProfile.ethnicity ===
        "middle eastern, black, native american, white"
      ) {
        userProfile.loveFactor += 7;
      }
      break;
    case "native american, white":
      if (userProfile.ethnicity === "native american, white") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "native american") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "native american, white") {
        userProfile.loveFactor += 7;
      }
      break;
    case "pacific islander":
      if (userProfile.ethnicity === "pacific islander") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "pacific islander, white") {
        userProfile.loveFactor += 10;
      }
      if (
        userProfile.ethnicity === "pacific islander, hispanic / latin, white"
      ) {
        userProfile.loveFactor += 7;
      }
      break;
    case "white":
      if (userProfile.ethnicity === "white") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "white, other") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "asian, white") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.ethnicity === "pacific islander, white") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "native american, white") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.ethnicity === "middle eastern, white") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "indian, white") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "hispanic / latin, white") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.ethnicity === "black, white") {
        userProfile.loveFactor += 10;
      }
      break;
    case "default":
      break;
  }
};
export default checkEthnicityCompatibility;
