var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
  type: {
    type: String,
    trim: true,
    required: "Select a workout type"
  },
  name: {
    type: String,
    trim: true,
    required: "Select a name"
  },
  duration: {
    type: Number,
    trim: true,
    required: "Select a duration"
  },
  weight: {
    type: Number,
    trim: true
  },
  reps: {
    type: Number,
    trim: true
  },
  sets: {
    type: Number,
    trim: true
  },
  distance: {
    type: Number,
    trim: true
  }
}
]
},
{
  toJSON: {
    virtuals: true
  }

});

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});




const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
