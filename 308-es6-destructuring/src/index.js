import animals, { useAnimal } from "./data";
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [cat, dog] = animals;

const [animal, makeSound] = useAnimal(cat);
console.log(animal);
makeSound();

// const { name, sound } = cat;

// const { name: catName, sound: catSound } = cat;

// const {name = "Fluffy", sound = "Purr"} = cat;

const {
    name,
    sound,
    foodRequirement: { food, water },
} = cat;

console.log(name, sound, food, water);

const [honda, tesla] = cars;

const {
    coloursByPopularity: [hondaTopColour],
    speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
    coloursByPopularity: [teslaTopColour],
    speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);
