import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const blogPost = [
  {
    id: 1,
    title: "The Dream of Sovereign: Navigating Complex Geopolitics",
    preview:
      "In the ever-evolving landscape of international relations, the concept of sovereignty remains a central theme. Recent events have brought this issue to the forefront, prompting discussions and decisions that could shape the future of nations and their citizens.",
  },
  {
    id: 2,
    title: "Quantum Teleportation: Bridging Space and Time",
    preview:
      "In the realm of science fiction, teleportation has always captured our imaginations. From “Star Trek” to “Harry Potter,” the idea of instantly moving from one place to another without traversing the space in between is both fascinating and mysterious. But what if I told you that teleportation isn’t just the stuff of fantasy? Enter quantum teleportation—a mind-bending phenomenon that challenges our understanding of reality.",
  },
  {
    id: 3,
    title: "The Beauty of Fractals: A Journey into Infinite Complexity",
    preview:
      "Fractals are captivating mathematical objects that exhibit self-similarity at different scales. From the intricate patterns of a snowflake to the mesmerizing shapes of the Mandelbrot set, fractals reveal a hidden order within chaos. Join me on a journey into the world of fractals—a place where mathematics meets art.",
  },
];

// Static
app.use(express.static("public"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressEjsLayouts);
app.set("layout", "./layouts/main-layout.ejs"); // Reroute the main layout

// Route
app.get("/", (req, res) => {
  const title = "Home";
  res.render("index.ejs", { title, blogPost });
});

app.get("/blog", (req, res) => {
  const title = "Blog";
  res.render("subs/blog.ejs", { title, blogPost });
});

app.get("/blog/pages/:id", (req, res) => { // Route to Designated Blog Post
  const id = parseInt(req.params.id);
  const post = blogPost.find((post) => post.id === id);
  const title = post.title;
  if (post) {
    res.render(`pages/page${post.id}.ejs`, { title, blogPost, post });
  } else {
    res.status(404).send("error");
  }
});

app.get("/about", (req, res) => {
  const title = "About";
  res.render("subs/about.ejs", { title });
});

// Listening on Port 3000
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
