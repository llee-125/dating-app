const checkReligionCompatibility = (myProfile, userProfile) => {
  switch (myProfile.religion) {
    case "default":
      break;
    case "buddhism":
      if (userProfile.religion === "buddhism") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.religion === "buddhism and somewhat serious about it") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "buddhism and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "buddhism") {
        userProfile.loveFactor += 5;
      }
      break;
    case "agnosticism":
      if (userProfile.religion === "agnosticism") {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.religion === "agnosticism and somewhat serious about it"
      ) {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "agnosticism and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "agnosticism") {
        userProfile.loveFactor += 5;
      }
      break;
    case "atheism":
      if (userProfile.religion === "atheism") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.religion === "atheism") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.religion === "atheism and somewhat serious about it") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "atheism and laughing about it") {
        userProfile.loveFactor += 3;
      }
      break;
    case "catholicism":
      if (userProfile.religion === "catholicism") {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.religion === "catholicism and somewhat serious about it"
      ) {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "catholicism and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "catholicism") {
        userProfile.loveFactor += 15;
      }
      break;
    case "christianity":
      if (userProfile.religion === "christianity") {
        userProfile.loveFactor += 20;
      }
      if (
        userProfile.religion === "christianity and somewhat serious about it"
      ) {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "christianity and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "christianity") {
        userProfile.loveFactor += 15;
      }
      break;
    case "hinduism":
      if (userProfile.religion === "hinduism") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.religion === "hinduism and somewhat serious about it") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "hinduism and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "hinduism") {
        userProfile.loveFactor += 15;
      }
      break;
    case "judaism":
      if (userProfile.religion === "judaism") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.religion === "judaism and somewhat serious about it") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "judaism and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "judaism") {
        userProfile.loveFactor += 15;
      }
      break;
    case "islam":
      if (userProfile.religion === "islam") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.religion === "islam and somewhat serious about it") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "islam and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "islam") {
        userProfile.loveFactor += 15;
      }
      break;
    case "other":
      if (userProfile.religion === "other") {
        userProfile.loveFactor += 20;
      }
      if (userProfile.religion === "other and somewhat serious about it") {
        userProfile.loveFactor += 7;
      }
      if (userProfile.religion === "other and laughing about it") {
        userProfile.loveFactor += 3;
      }
      if (userProfile.religion === "other") {
        userProfile.loveFactor += 15;
      }
      break;
  }
};
export default checkReligionCompatibility;
