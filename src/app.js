/* global document */
import bands from "./bands";
import {formatFile} from "fileFormatter";
//
// const formatFile = name => `img/${name.replace(/ /g, "-")}.jpg`;

const bandsDiv = document.getElementById("bands");

const images = bands.map(band => `<img src=${formatFile(band)} />`).join("");
bandsDiv.innerHTML = images;
