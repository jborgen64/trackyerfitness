var db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
   db.Workout.find({})
    .then(data => {
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
     .then(data => {
       console.log(data);
       res.json(data);
     });
   });

  app.post("/api/workouts", function(req, res) {
    db.Workout.create({})
    .then(data => {
      console.log(data);
      res.json(data);
    });
  });

 

  app.put("/api/workouts/:id", function({ body, params }, res) {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
  )
    .then(data => {
      console.log(data);
      res.json(data);
    });
  });

  //need put route
};
