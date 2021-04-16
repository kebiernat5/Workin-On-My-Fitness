const router = require("express").Router();
const Workout = require("../Models/workout");

router.get('/workout', (req, res) => {
        console.log("here")
        Workout.find().then(data => {
            res.json(data);
        })
});

router.put("/workouts/:id", (req, res) => {
    const id = req.params.id;
    console.log("id", id)
    const body = req.body;
    // Workout.findByIdAndUpdate
    // updateOne
    Workout.findByIdAndUpdate({ _id: id }, { $push: { exercises: body } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  });

  router.post('/workouts', (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // router.post("/api/workouts", (req, res) => {
  //   const body = req.body;
  //   Workout.create({})
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => console.log(err));
  // });
  
  router.get("/workouts/range", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  });
  
module.exports = router;