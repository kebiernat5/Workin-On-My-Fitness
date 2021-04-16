const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => {
      new Date();
    },
  },
  exercises: [
    {
      type: {
        type: Schema.Types.String,
        trim: true,
        required: "Must include type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Must include the type of exercise",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Must include the type of exercise",
      },
    //   distance: {
    //       type: Number,
    //   },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
