
import { fetchJoke } from "./index.js";

import { jokeHolder, jokeButton } from "./elements.js";
import { randomItemFromArray } from "./utils.js";
import buttonText from "../data/buttonText.js";

export async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}