const axios = require("axios");
const checkDrinkCompatibility = require("./checkDrinkCompatibility");
const checkDrugCompatibility = require("./checkDrugCompatibility");
const checkBodyCompatibility = require("./checkBodyCompatibility");
const checkHeightCompatibility = require("./checkHeightCompatibility");
const checkSexualPreference = require("./checkSexualPreference");
const checkSmokesCompatibility = require("./checkSmokesCompatibility");
const checkStatusCompatibility = require("./checkStatusCompatibility");
const checkDietCompatibility = require("./checkDietCompatibility");
const checkEduCompatibility = require("./checkEduCompatibility");
const checkEthnicityCompatibility = require("./checkEthnicityCompatibility");
const checkPetCompatibility = require("./checkPetCompatibility");
const checkReligionCompatibility = require("./checkReligionCompatibility");
const checkOffspringCompatibility = require("./checkOffspringCompatibility");
const checkJobCompatibility = require("./checkJobCompatibility");

const getUserProfile = () => {
  axios.get("http://localhost:3000/users/user_data").then(({ data }) => data);
};

const myProfile = {
  _id: 2243,
  first_name: "Ella",
  last_name: "Manning",
  mumble_email: "ella.manning@mumble.com",
  age: 22,
  body_type: "thin",
  diet: "strictly kosher",
  drinks: "desperately",
  drugs: "often",
  education: "graduated from ph.d program",
  essay: "",
  ethnicity: "black",
  height: 75,
  income: -1,
  job: "military",
  location: "san francisco, california",
  offspring: "has kids",
  orientation: "bisexual",
  pets: "has dogs",
  religion: "catholicism but not too serious about it",
  sex: "women",
  sign: "cancer and it&rsquo;s fun to think about",
  smokes: "sometimes",
  speaks: "english (fluently), spanish (poorly)",
  status: "single",
  profile_image: "https://randomuser.me/api/portraits/women/60.jpg",
};

const recoAlgo = (myProfile) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/profile/all")
      .then(({ data }) => {
        let sexualPreference = checkSexualPreference(myProfile);
        return data.filter(
          (Data) =>
            (sexualPreference[0] === Data.sex ||
              sexualPreference[1] === Data.sex) &&
            (sexualPreference[2] === Data.orientation ||
              sexualPreference[3] === Data.orientation) &&
            Data.age > myProfile.age - 20 &&
            Data.age < myProfile.age + 20
        );
      })
      .then((rightData) => {
        rightData.map((userProfile) => {
          userProfile.loveFactor = 0;
          calculateLoveFactor(myProfile, userProfile);
        });
        return rightData;
      })
      .then((recommendedProfiles) => {
        resolve(
          recommendedProfiles
            .sort((a, b) => b.loveFactor - a.loveFactor)
            .slice(0, 10)
        );
      });
  });
};

const calculateLoveFactor = (myProfile, userProfile) => {
  checkDrinkCompatibility(myProfile, userProfile);
  checkDrugCompatibility(myProfile, userProfile);
  checkBodyCompatibility(myProfile, userProfile);
  checkHeightCompatibility(myProfile, userProfile);
  checkSmokesCompatibility(myProfile, userProfile);
  checkStatusCompatibility(myProfile, userProfile);
  checkDietCompatibility(myProfile, userProfile);
  checkEduCompatibility(myProfile, userProfile);
  checkEthnicityCompatibility(myProfile, userProfile);
  checkPetCompatibility(myProfile, userProfile);
  checkReligionCompatibility(myProfile, userProfile);
  checkOffspringCompatibility(myProfile, userProfile);
  checkJobCompatibility(myProfile, userProfile);
};

recoAlgo(myProfile).then((res) => console.log(res));
