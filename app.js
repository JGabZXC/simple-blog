import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Static
app.use(express.static('public'));


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressEjsLayouts);
app.set('layout', './layouts/main-layout.ejs'); // Reroute the main layout

// Route
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Listening on Port 3000
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});