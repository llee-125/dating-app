module.exports = checkSexualPreference = (myProfile) => {
  if (myProfile.orientation === "straight") {
    return [
      myProfile.sex === "men" ? "women" : "men",
      null,
      "straight",
      "bisexual",
    ];
  }
  if (myProfile.orientation === "gay") {
    return [myProfile.sex === "men" ? "men" : "women", null, "gay", "bisexual"];
  }
  if (myProfile.orientation === "bisexual") {
    return ["men", "women", "gay", "bisexual"];
  }
};
