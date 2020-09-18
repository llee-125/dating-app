const checkOffspringCompatibility = (myProfile, userProfile) => {
  switch (myProfile.offspring) {
    case "doesnt have kids":
      if (userProfile.offspring === "doesnt have kids" || "doesnt want kids") {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.offspring === "doesnt have kids, but might want them" ||
        "doesnt have kids, and doesnt want any" ||
        "doesnt have kids, and doesnt want any"
      ) {
        userProfile.loveFactor += 7;
      }
      if (
        userProfile.offspring === "has kids" ||
        "has a kid" ||
        "has kids, but doesnt want more" ||
        "has kids, and might want more"
      ) {
        userProfile.loveFactor -= 10;
      }
      break;

    case "has kids":
      if (userProfile.offspring === "doesnt have kids" || "doesnt want kids") {
        userProfile.loveFactor -= 10;
      }
      if (
        userProfile.offspring === "doesnt have kids, but might want them" ||
        "doesnt have kids, and doesnt want any" ||
        "doesnt have kids, and doesnt want any"
      ) {
        userProfile.loveFactor -= 7;
      }
      if (
        userProfile.offspring === "has kids" ||
        "has a kid" ||
        "has kids, but doesnt want more" ||
        "has kids, and might want more"
      ) {
        userProfile.loveFactor += 20;
      }
      break;

    case "has a kid":
      if (userProfile.offspring === "doesnt have kids" || "doesnt want kids") {
        userProfile.loveFactor -= 10;
      }
      if (
        userProfile.offspring === "doesnt have kids, but might want them" ||
        "doesnt have kids, and doesnt want any" ||
        "doesnt have kids, and doesnt want any"
      ) {
        userProfile.loveFactor -= 7;
      }
      if (
        userProfile.offspring === "has kids" ||
        "has a kid" ||
        "has kids, but doesnt want more" ||
        "has kids, and might want more"
      ) {
        userProfile.loveFactor += 20;
      }
      break;
    case "default":
      break;
  }
};
export default checkOffspringCompatibility;
