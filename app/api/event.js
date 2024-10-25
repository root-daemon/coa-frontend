const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// Mock database
let events = [
  {
    id: 1,
    title: "TechFest 2024",
    organizer: "CS Department",
    date: "2024-11-15",
    type: "Conference",
    registrationOpen: true,
  },
  {
    id: 2,
    title: "AI Workshop",
    organizer: "AI Club",
    date: "2024-11-20",
    type: "Workshop",
    registrationOpen: true,
  },
];

// CREATE
app.post("/events", (req, res) => {
  const newEvent = { id: events.length + 1, ...req.body };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// READ (all events)
app.get("/events", (req, res) => {
  res.json(events);
});

// READ (single event)
app.get("/events/:id", (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// UPDATE
app.put("/events/:id", (req, res) => {
  const index = events.findIndex((e) => e.id === parseInt(req.params.id));
  if (index !== -1) {
    events[index] = { ...events[index], ...req.body };
    res.json(events[index]);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// DELETE
app.delete("/events/:id", (req, res) => {
  const index = events.findIndex((e) => e.id === parseInt(req.params.id));
  if (index !== -1) {
    events.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// For demonstration purposes, let's simulate some CRUD operations
console.log("Initial events:", events);

// CREATE
const newEvent = {
  title: "Hackathon",
  organizer: "Coding Club",
  date: "2024-11-30",
  type: "Hackathon",
  registrationOpen: true,
};
events.push({ id: events.length + 1, ...newEvent });
console.log("After CREATE:", events);

// UPDATE
const updatedEvent = { ...events[0], registrationOpen: false };
events[0] = updatedEvent;
console.log("After UPDATE:", events);

// DELETE
events.splice(1, 1);
console.log("After DELETE:", events);
