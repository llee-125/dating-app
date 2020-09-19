const checkPetCompatibility = (myProfile, userProfile) => {
  switch (myProfile.pets) {
    case "has dogs":
      if (
        userProfile.pets === "has dogs" ||
        "has dogs and has cats" ||
        "likes dogs and has cats" ||
        "has dog and likes cats" ||
        "has cat"
      ) {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.pets === "likes dogs" ||
        "likes dogs and likes cats" ||
        "likes cats"
      ) {
        userProfile.loveFactor += 7;
      }
      if (
        userProfile.pets === "dislikes dogs" ||
        "dislikes cats" ||
        "dislikes dogs and dislikes cats" ||
        "dislikes dogs and likes cats"
      ) {
        userProfile.loveFactor -= 10;
      }
      break;
    case "has cats":
      if (
        userProfile.pets === "has dogs" ||
        "has dogs and has cats" ||
        "likes dogs and has cats" ||
        "has dog and likes cats" ||
        "has cat"
      ) {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.pets === "likes dogs" ||
        "likes dogs and likes cats" ||
        "likes cats"
      ) {
        userProfile.loveFactor += 7;
      }
      if (
        userProfile.pets === "dislikes dogs" ||
        "dislikes cats" ||
        "dislikes dogs and dislikes cats" ||
        "dislikes dogs and likes cats"
      ) {
        userProfile.loveFactor -= 10;
      }
      break;
    case "dislikes dogs":
      if (
        userProfile.pets === "has dogs" ||
        "has dogs and has cats" ||
        "likes dogs and has cats" ||
        "has dog and likes cats" ||
        "has cat"
      ) {
        userProfile.loveFactor -= 20;
      }
      if (
        userProfile.pets === "likes dogs" ||
        "likes dogs and likes cats" ||
        "likes cats"
      ) {
        userProfile.loveFactor -= 7;
      }
      if (
        userProfile.pets === "dislikes dogs" ||
        "dislikes cats" ||
        "dislikes dogs and dislikes cats" ||
        "dislikes dogs and likes cats"
      ) {
        userProfile.loveFactor += 20;
      }
      break;
    case "dislikes cats":
      if (
        userProfile.pets === "has dogs" ||
        "has dogs and has cats" ||
        "likes dogs and has cats" ||
        "has dog and likes cats" ||
        "has cat"
      ) {
        userProfile.loveFactor -= 20;
      }
      if (
        userProfile.pets === "likes dogs" ||
        "likes dogs and likes cats" ||
        "likes cats"
      ) {
        userProfile.loveFactor -= 7;
      }
      if (
        userProfile.pets === "dislikes dogs" ||
        "dislikes cats" ||
        "dislikes dogs and dislikes cats" ||
        "dislikes dogs and likes cats"
      ) {
        userProfile.loveFactor += 20;
      }
      break;
    case "dislikes dogs and dislikes cats":
      if (
        userProfile.pets === "has dogs" ||
        "has dogs and has cats" ||
        "likes dogs and has cats" ||
        "has dog and likes cats" ||
        "has cat"
      ) {
        userProfile.loveFactor -= 20;
      }
      if (
        userProfile.pets === "likes dogs" ||
        "likes dogs and likes cats" ||
        "likes cats"
      ) {
        userProfile.loveFactor -= 7;
      }
      if (
        userProfile.pets === "dislikes dogs" ||
        "dislikes cats" ||
        "dislikes dogs and dislikes cats" ||
        "dislikes dogs and likes cats"
      ) {
        userProfile.loveFactor += 20;
      }
      break;
    case "likes dogs":
      if (
        userProfile.pets === "has dogs" ||
        "has dogs and has cats" ||
        "likes dogs and has cats" ||
        "has dog and likes cats" ||
        "has cat"
      ) {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.pets === "likes dogs" ||
        "likes dogs and likes cats" ||
        "likes cats"
      ) {
        userProfile.loveFactor += 7;
      }
      if (
        userProfile.pets === "dislikes dogs" ||
        "dislikes cats" ||
        "dislikes dogs and dislikes cats" ||
        "dislikes dogs and likes cats"
      ) {
        userProfile.loveFactor -= 10;
      }
      break;
    case "likes cats":
      if (
        userProfile.pets === "has dogs" ||
        "has dogs and has cats" ||
        "likes dogs and has cats" ||
        "has dog and likes cats" ||
        "has cat"
      ) {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.pets === "likes dogs" ||
        "likes dogs and likes cats" ||
        "likes cats"
      ) {
        userProfile.loveFactor += 7;
      }
      if (
        userProfile.pets === "dislikes dogs" ||
        "dislikes cats" ||
        "dislikes dogs and dislikes cats" ||
        "dislikes dogs and likes cats"
      ) {
        userProfile.loveFactor -= 10;
      }
      break;
    case "default":
      break;
  }
};

export default checkPetCompatibility;
