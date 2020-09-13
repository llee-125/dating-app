module.exports = checkEduCompatibility = (myProfile, userProfile) => {
  switch (myProfile.education) {
    case "graduated from ph.d program":
      if (userProfile.education === "graduated from ph.d program") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "graduated from masters program") {
        userProfile.loveFactor += 7;
        break;
      }
      if (userProfile.education === "graduated from college/university") {
        userProfile.loveFactor += 5;
        break;
      }
    case "graduated from masters program":
      if (userProfile.education === "graduated from ph.d program") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "graduated from masters program") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.education === "graduated from college/university") {
        userProfile.loveFactor += 7;
        break;
      }
    case "graduated from college/university":
      if (userProfile.education === "graduated from ph.d program") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "graduated from masters program") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.education === "graduated from college/university") {
        userProfile.loveFactor += 7;
        break;
      }
    case "working on college/university":
      if (userProfile.education === "working on college/university") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "graduated from masters program") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.education === "graduated from college/university") {
        userProfile.loveFactor += 7;
        break;
      }
    case "graduated from med school":
      if (userProfile.education === "graduated from ph.d program") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "graduated from masters program") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.education === "graduated from college/university") {
        userProfile.loveFactor += 7;
        break;
      }
    case "working on ph.d program":
      if (userProfile.education === "graduated from ph.d program") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "graduated from masters program") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.education === "graduated from college/university") {
        userProfile.loveFactor += 7;
        break;
      }
    case "working on med school":
      if (userProfile.education === "working on med school") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "working on ph.d program") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.education === "graduated from college/university") {
        userProfile.loveFactor += 7;
        break;
      }
    case "working on masters program":
      if (userProfile.education === "working on med school") {
        userProfile.loveFactor += 20;
        break;
      }
      if (userProfile.education === "working on ph.d program") {
        userProfile.loveFactor += 10;
        break;
      }
      if (userProfile.education === "working on masters program") {
        userProfile.loveFactor += 7;
        break;
      }
  }
};
