//const  Workout  = require("../models");
const path = require("path");
var db = require("../models");
//var Workout = require("../models/workout.js");

module.exports = function(app){
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "./public/index.html"));
      });

      app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/exercise.html"));
      });

      app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/stats.html"));
      });

      app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.get("/all", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

    app.put("/api/workouts/:id", ({body, params}, res) => {
      console.log(params.id);  
      console.log("sup dawg it works!");  
      console.log(body);       
      db.Workout.findByIdAndUpdate( params.id, { $push: { exercises: body } }, { new: true })
         .then(workout => {
           console.log(workout)
           res.json(workout);
         })
         .catch(err => {
           res.json(err);
         });
       })
      

}