const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    // totalDuration: Number,
    exercises: [
      {
        type: {
          type: String,
          enum: ['cardio', 'resistance'],
          required: "Enter an exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name",
        },
        duration: {
          type: Number,
          //trim: true,
          required: "Enter the duration in minutes",
        },
        weight: {
          type: Number,
          // required: function(){
          //     return this.type === "resistance"
          // }
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((a, x) => (a += x.duration), 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
