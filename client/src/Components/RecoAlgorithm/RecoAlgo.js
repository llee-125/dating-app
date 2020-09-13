const axios = require("axios");

const getUserProfile = () => {
  axios.get("http://localhost:3000/users/user_data").then(({ data }) => data);
};

const myProfile = {
  _id: 2243,
  first_name: "Ella",
  last_name: "Manning",
  mumble_email: "ella.manning@mumble.com",
  age: 27,
  body_type: "fit",
  diet: "mostly anything",
  drinks: "socially",
  drugs: "never",
  education: "graduated from college/university",
  essay: "",
  ethnicity: "white",
  height: 67,
  income: -1,
  job: "sales / marketing / biz dev",
  location: "san francisco, california",
  offspring: "doesnt have kids",
  orientation: "straight",
  pets: "likes dogs and likes cats",
  religion: "agnosticism",
  sex: "men",
  sign: "cancer and it&rsquo;s fun to think about",
  smokes: "no",
  speaks: "english (fluently), spanish (poorly)",
  status: "single",
  profile_image: "https://randomuser.me/api/portraits/women/60.jpg",
};

const recoAlgo = (profile) => {
  return new Promise((resolve, reject) => {
    let recommendedIds = [];
    const myProfile = profile;
    axios
      .get("http://localhost:3000/profile/all")
      .then(({ data }) => {
        data.map((el) => {
          if (myProfile.sex !== el.sex) {
            recommendedIds.push(el._id);
          }
        });
      })
      .then(() => {
        resolve(recommendedIds);
      });
  });
};

recoAlgo(myProfile).then((res) => console.log(res));
