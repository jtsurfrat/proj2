import * as express from 'express';

let router = express.Router();

let messages = [
  {id: 1, firstName: 'Barry', lastName: "Felly", title: "NoSchool", summary: "This is suff"},
  {id: 2, firstName: 'Andy', lastName: "Thomas", title: "Who", summary: "Who cares"},
  {id: 3, firstName: 'Tom', lastName: "Whitin", title: "Hi", summary: "nice cool"}
];

router.get("/", (req, res) => {
  res.json(messages);
});

router.post("/", (req, res) => {
  let newPost = req.body;
  messages.push(newPost);
  res.sendStatus(201);
});

export default router;
