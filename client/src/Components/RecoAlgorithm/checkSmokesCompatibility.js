module.exports = checkSmokesCompatibility = (myProfile, userProfile) => {
  switch (myProfile.smokes) {
    case "yes":
      if (userProfile.smokes === "yes") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.smokes === "when drinking") {
        userProfile.loveFactor += 2;
        break;
      }
      if (userProfile.smokes === "sometimes") {
        userProfile.loveFactor += 1;
        break;
      }

    case "when drinking":
      if (userProfile.smokes === "when drinking") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.smokes === "yes" || "sometimes") {
        userProfile.loveFactor += 2;
        break;
      }
      if (userProfile.smokes === "trying to quit") {
        userProfile.loveFactor += 1;
        break;
      }

    case "sometimes":
      if (userProfile.smokes === "sometimes") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.smokes === "when drinking" || "trying to quit") {
        userProfile.loveFactor += 2;
        break;
      }
      if (userProfile.smokes === "yes" || "no") {
        userProfile.loveFactor += 1;
        break;
      }
    case "trying to quit":
      if (userProfile.smokes === "trying to quit") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.smokes === "sometimes" || "no") {
        userProfile.loveFactor += 2;
        break;
      }
      if (userProfile.smokes === "when drinking") {
        userProfile.loveFactor += 1;
        break;
      }
    case "no":
      if (userProfile.smokes === "no") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.smokes === "trying to quit") {
        userProfile.loveFactor += 2;
        break;
      }
      if (userProfile.smokes === "sometimes") {
        userProfile.loveFactor += 1;
        break;
      }
  }
};
