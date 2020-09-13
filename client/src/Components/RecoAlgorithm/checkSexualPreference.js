module.exports = checkSexualPreference = (myProfile) => {
  if (myProfile.orientation === "straight") {
    return [myProfile.sex === "men" ? "women" : "men", null];
  }
  if (myProfile.orientation === "gay") {
    return [myProfile.sex === "men" ? "men" : "women", null];
  }
  if (myProfile.orientation === "bisexual") {
    return ["men", "women"];
  }
};
