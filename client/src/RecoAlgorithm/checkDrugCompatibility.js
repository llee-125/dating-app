const checkDrugCompatibility = (myProfile, userProfile) => {
  switch (myProfile.drugs) {
    case "often":
      if (userProfile.drugs === "often") {
        userProfile.loveFactor += 9;
        break;
      }
      if (userProfile.drugs === "sometimes") {
        userProfile.loveFactor += 6;
        break;
      }
      if (userProfile.drugs === "never") {
        userProfile.loveFactor += 1;
        break;
      }

    case "sometimes":
      if (userProfile.drugs === "sometimes") {
        userProfile.loveFactor += 9;
        break;
      }
      if (userProfile.drugs === "often" || "never") {
        userProfile.loveFactor += 6;
        break;
      }

    case "never":
      if (userProfile.drugs === "never") {
        userProfile.loveFactor += 9;
        break;
      }
      if (userProfile.drugs === "sometimes") {
        userProfile.loveFactor += 6;
        break;
      }
      if (userProfile.drugs === "often") {
        userProfile.loveFactor += 1;
        break;
      }
  }
};
export default checkDrugCompatibility;
