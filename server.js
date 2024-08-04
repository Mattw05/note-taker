const express = require('express');
// const html_routes = require('./routes/html-routes')
// const api_routes = api_routes = require('./routes/api-routes')
const Port = process.env.Port || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// app.use(html_routes)
// app.use(api_routes)

app.listen(Port, () => {
    console.log(`server running on http://localhost:${Port}`);
});