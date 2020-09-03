let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  age: { type: Number },
  body_type: { type: String },
  diet: { type: String },
  drinks: { type: String },
  drugs: { type: String },
  education: { type: String },
  essay: { type: String },
  ethnicity: { type: String },
  height: { type: Number },
  income: { type: Number },
  job: { type: String },
  location: { type: String },
  offspring: { type: String },
  orientation: { type: String },
  pets: { type: String },
  religion: { type: String },
  sex: { type: String },
  sign: { type: String },
  smokes: { type: String },
  speaks: { type: String },
  status: { type: String },
  profile_image: { type: String },
});

// const workoutSchema = new Schema({
//   day: {
//     type: Date,
//     default: Date.now(),
//   },
//   totalDuration: {
//     type: Number,
//     default: 0,
//   },
//   exercises: [exerciseSchema],
// });

const Profile = mongoose.model("Profile", profileSchema);
module.exports = { Profile };

// =CONCATENATE("{age: ", C3, ", body_type: '", D3,"', diet: '", E3, "', drinks: '", F3,"', drugs: '", G3,"', education: '", H3,"', essay: '", I3,"', ethnicity: '", J3,"', height: ", K3,", income: ", L3,", job: '", M3,"', location: '", N3,"', offspring: '", O3,"', orientation: '", P3,"', pets: '", Q3,"', religion: '", R3,"', sex: '", S3,"', sign: '", T3, "', smokes: '", U3, "', speaks: '", V3, "', status: '", W3, "', profile_image: '", X3, "',}")

// age:
// body_type:
// diet:
// drinks:
// drugs:
// education:
// essay:
// ethnicity:
// height:
// income:
// job:
// location:
// offspring:
// orientation:
// pets:
// religion:
// sex:
// sign:
// smokes:
// speaks:
// status:
// profile_image:
