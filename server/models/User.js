const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");
const { Movie } = require("./Index");

const userSchema = new Schema({
  userName: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    minlength: 6,
    maxlength: 12,
    type: String,
    required: true,
  },
  movies: {type: [Movie.schema], isWatched: Boolean},
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isCorrectPassword = async (password) => {
    return bcrypt.compare(this.password, password)
};
const User = model("user", userSchema);

module.exports = User;
