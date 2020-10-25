//const  Workout  = require("../models");
const path = require("path");
var db = require("../models");
var { Workout } = require("../models");

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
        db.Workout.create(body)
          .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.put("/api/workouts/:id",(req, res) => {

        Workout.findOneAndUpdate(
          { _id: req.params.id }, 
          { $push: { exercises: req.body  } },
      
        )
      
      .then(data=>{
          console.log("data", data)
          res.json(data)
        })
        .catch(err => {
          res.json(err);
        });
      
         
       
      });

    // app.put("/api/workouts/:id", ({body, params}, res) => {
    //     db.Workout.findByIdAndUpdate( params.id, { $push: {exercises: body} }, { new: true })
    //      .then(workout => {
    //        res.json(workout);
    //      })
    //      .catch(err => {
    //        res.json(err);
    //      });
    //    })
      

}