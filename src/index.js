/* global console */
/* eslint-disable no-console */

import express from "express";

const app = express();

app.use(express.static("static"));

app.listen(3000, () => console.log("started on port 3000"));
