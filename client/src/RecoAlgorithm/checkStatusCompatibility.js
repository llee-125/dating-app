const checkStatusCompatibility = (myProfile, userProfile) => {
  switch (myProfile.status) {
    case "default":
      break;
    case "single":
      if (userProfile.status === "single") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.status === "available") {
        userProfile.loveFactor += 8;
      }
      break;
    case "available":
      if (userProfile.status === "available") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.status === "single") {
        userProfile.loveFactor += 8;
      }
      break;

    case "married":
      if (userProfile.status === "married") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.status === "seeing someone") {
        userProfile.loveFactor += 6;
      }
      break;

    case "seeing someone":
      if (userProfile.status === "seeing someone") {
        userProfile.loveFactor += 10;
      }
      if (userProfile.status === "married") {
        userProfile.loveFactor += 4;
      }
      break;
  }
};
export default checkStatusCompatibility;
