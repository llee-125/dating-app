module.exports = checkStatusCompatibility = (myProfile, userProfile) => {
  switch (myProfile.status) {
    case "single":
      if (userProfile.status === "single") {
        userProfile.loveFactor += 5;
        break;
      }
      if (userProfile.status === "available") {
        userProfile.loveFactor += 4;
        break;
      }
    case "available":
      if (userProfile.status === "available") {
        userProfile.loveFactor += 5;
        break;
      }
      if (userProfile.status === "single") {
        userProfile.loveFactor += 4;
        break;
      }

    case "married":
      if (userProfile.status === "married") {
        userProfile.loveFactor += 5;
        break;
      }
      if (userProfile.status === "seeing someone") {
        userProfile.loveFactor += 3;
        break;
      }

    case "seeing someone":
      if (userProfile.status === "seeing someone") {
        userProfile.loveFactor += 5;
        break;
      }
      if (userProfile.status === "married") {
        userProfile.loveFactor += 2;
        break;
      }
  }
};
