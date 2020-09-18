const checkJobCompatibility = (myProfile, userProfile) => {
  switch (myProfile.job) {
    case "science / tech / engineering":
      if (userProfile.job === "science / tech / engineering") {
        userProfile.loveFactor += 20;
      }
      break;
    case "artistic / musical / writer":
      if (userProfile.job === "artistic / musical / writer") {
        userProfile.loveFactor += 20;
      }
      break;
    case "banking / financial / real estate":
      if (userProfile.job === "banking / financial / real estate") {
        userProfile.loveFactor += 20;
      }
      break;
    case "clerical / administrative":
      if (userProfile.job === "clerical / administrative") {
        userProfile.loveFactor += 20;
      }
      break;
    case "computer / hardware / software":
      if (userProfile.job === "computer / hardware / software") {
        userProfile.loveFactor += 20;
      }
      break;
    case "construction / craftsmanship":
      if (userProfile.job === "construction / craftsmanship") {
        userProfile.loveFactor += 20;
      }
      break;
    case "education / academia":
      if (userProfile.job === "education / academia") {
        userProfile.loveFactor += 20;
      }
      break;
    case "entertainment / media":
      if (userProfile.job === "entertainment / media") {
        userProfile.loveFactor += 20;
      }
      break;
    case "executive / management":
      if (userProfile.job === "executive / management") {
        userProfile.loveFactor += 20;
      }
      break;
    case "hospitality / travel":
      if (userProfile.job === "hospitality / travel") {
        userProfile.loveFactor += 20;
      }
      break;
    case "law / legal services":
      if (userProfile.job === "law / legal services") {
        userProfile.loveFactor += 20;
      }
      break;
    case "medicine / health":
      if (userProfile.job === "medicine / health") {
        userProfile.loveFactor += 20;
      }
      break;
    case "military":
      if (userProfile.job === "military") {
        userProfile.loveFactor += 40;
      }
      break;
    case "political / government":
      if (userProfile.job === "political / government") {
        userProfile.loveFactor += 20;
      }
      break;
    case "retired":
      if (userProfile.job === "retired") {
        userProfile.loveFactor += 40;
      }
      break;
    case "sales / marketing / biz dev":
      if (userProfile.job === "sales / marketing / biz dev") {
        userProfile.loveFactor += 20;
      }
      break;
    case "student":
      if (userProfile.job === "student") {
        userProfile.loveFactor += 40;
      }
      break;
    case "unemployed":
      if (userProfile.job === "unemployed") {
        userProfile.loveFactor += 20;
      }
      break;
    case "default":
      break;
  }
};
export default checkJobCompatibility;
