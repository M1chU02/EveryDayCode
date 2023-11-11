const recipeContainer = document.getElementById("recipe-container");
const generateButton = document.getElementById("generate-recipe");

generateButton.addEventListener("click", getRandomRecipe);

async function getRandomRecipe() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();

    if (data.meals) {
      displayRecipe(data.meals[0]);
    } else {
      recipeContainer.innerHTML = "No recipe found.";
    }
  } catch (error) {
    console.error(error);
    recipeContainer.innerHTML = "An error occurred while fetching the recipe.";
  }
}

function displayRecipe(recipe) {
  recipeContainer.innerHTML = `
        <h2>${recipe.strMeal}</h2>
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        <p>Category: ${recipe.strCategory}</p>
        <p>Area: ${recipe.strArea}</p>
        <h3>Ingredients</h3>
        <ul>
            ${generateIngredientList(recipe)}
        </ul>
        <h3>Instructions</h3>
        <p>${recipe.strInstructions}</p>
    `;
}

function generateIngredientList(recipe) {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`<li>${measure} ${ingredient}</li>`);
    }
  }
  return ingredients.join("");
}
