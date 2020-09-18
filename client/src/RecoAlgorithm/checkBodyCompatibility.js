const checkBodyCompatibility = (myProfile, userProfile) => {
  switch (myProfile.body_type) {
    case "default":
      break;
    case "overweight":
      if (userProfile.body_type === "overweight") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "a little extra") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "full figured") {
        userProfile.loveFactor += 2;
      }
      break;

    case "a little extra":
      if (userProfile.body_type === "a little extra") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "overweight" || "full figured") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "curvy") {
        userProfile.loveFactor += 2;
      }
      break;
    case "full figured":
      if (userProfile.body_type === "full figured") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "a little extra" || "curvy") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "overweight" || "average") {
        userProfile.loveFactor += 2;
      }
      break;

    case "curvy":
      if (userProfile.body_type === "curvy") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "full figured" || "average") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "a little extra" || "fit") {
        userProfile.loveFactor += 2;
      }
      break;

    case "average":
      if (userProfile.body_type === "average") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "curvy" || "fit") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "full figured" || "athletic") {
        userProfile.loveFactor += 2;
      }
      break;

    case "fit":
      if (userProfile.body_type === "fit") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "average" || "athletic") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "curvy" || "jacked") {
        userProfile.loveFactor += 2;
      }
      break;
    case "athletic":
      if (userProfile.body_type === "athletic") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "fit" || "jacked") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "average" || "thin") {
        userProfile.loveFactor += 2;
      }
      break;
    case "jacked":
      if (userProfile.body_type === "jacked") {
        userProfile.loveFactor += 6;
      }
      if (
        userProfile.body_type === "athletic" ||
        userProfile.body_type === "thin"
      ) {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "fit" || "skinny") {
        userProfile.loveFactor += 2;
      }
      break;

    case "thin":
      if (userProfile.body_type === "thin") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "jacked" || "skinny") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "fit" || "used up") {
        userProfile.loveFactor += 2;
      }
      break;

    case "skinny":
      if (userProfile.body_type === "skinny") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "thin" || "used up") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "athletic") {
        userProfile.loveFactor += 2;
      }
      break;

    case "used up":
      if (userProfile.body_type === "used up") {
        userProfile.loveFactor += 6;
      }
      if (userProfile.body_type === "skinny" || "thin") {
        userProfile.loveFactor += 4;
      }
      if (userProfile.body_type === "average") {
        userProfile.loveFactor += 2;
      }
      break;
  }
};
export default checkBodyCompatibility;
