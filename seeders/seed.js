let mongoose = require("mongoose");
let db = require("../models/Profile");

mongoose.connect("mongodb://localhost/profile", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let profileSeed = [
  {
    age: 22,
    body_type: "a little extra",
    diet: "strictly anything",
    drinks: "socially",
    drugs: "never",
    education: "working on college/university",
    essay:
      "about me:i would love to think that i was some some kind of intellectual: either the dumbest smart guy, or the smartest dumb guy. cant say i can tell the difference. i love to talk about ideas and concepts. i forge odd metaphors instead of reciting cliches. like the similarities between a friend of mines house and an underwater salt mine. my favorite word is salt by the way (weird choice i know). to me most things in life are better as metaphors. i seek to make myself a little better everyday, in some productively lazy way. got tired of tying my shoes. considered hiring a five year old, but would probably have to tie both of our shoes... decided to only wear leather shoes dress shoes. about you: you love to have really serious, really deep conversations about really silly stuff. you have to be willing to snap me out of a light hearted rant with a kiss. you dont have to be funny, but you have to be able to make me laugh. you should be able to bend spoons with your mind, and telepathically make me smile while i am still at work. you should love life, and be cool with just letting the wind blow. extra points for reading all this and guessing my favorite video game (no hints given yet). and lastly you have a good attention span.",
    ethnicity: "asian, white",
    height: 75,
    income: -1,
    job: "transportation",
    location: "south san francisco, california",
    offspring: "doesnt have kids, but might want them",
    orientation: "straight",
    pets: "likes dogs and likes cats",
    religion: "agnosticism and very serious about it",
    sex: "men",
    sign: "gemini",
    smokes: "sometimes",
    speaks: "english",
    status: "single",
    profile_image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

db.Profile.deleteMany({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
