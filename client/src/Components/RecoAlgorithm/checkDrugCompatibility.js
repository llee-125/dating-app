module.exports = checkDrugCompatibility = (myProfile, userProfile) => {
  switch (myProfile.drugs) {
    case "often":
      if (userProfile.drugs === "often") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.drugs === "sometimes") {
        userProfile.loveFactor += 2;
        break;
      }
      if (userProfile.drugs === "never") {
        userProfile.loveFactor += 1;
        break;
      }

    case "sometimes":
      if (userProfile.drugs === "sometimes") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.drugs === "often" || "never") {
        userProfile.loveFactor += 2;
        break;
      }

    case "never":
      if (userProfile.drugs === "never") {
        userProfile.loveFactor += 3;
        break;
      }
      if (userProfile.drugs === "sometimes") {
        userProfile.loveFactor += 2;
        break;
      }
      if (userProfile.drugs === "often") {
        userProfile.loveFactor += 1;
        break;
      }
  }
};
