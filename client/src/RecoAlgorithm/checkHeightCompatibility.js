const checkHeightCompatibility = (myProfile, userProfile) => {
  if (
    userProfile.height > myProfile.height - 9 &&
    userProfile.height < myProfile.height + 9
  ) {
    userProfile.loveFactor += 3;
    if (
      userProfile.height > myProfile.height - 6 &&
      userProfile.height < myProfile.height + 6
    ) {
      userProfile.loveFactor += 3;
      if (
        userProfile.height > myProfile.height - 3 &&
        userProfile.height < myProfile.height + 3
      ) {
        userProfile.loveFactor += 3;
      }
    }
  }
};
export default checkHeightCompatibility;
