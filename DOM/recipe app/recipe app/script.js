const title = document.title;
let isState = false

const greetings = () => {
  window.addEventListener("blur", () => {
    if (!isState) {
      document.title = "Come Back to Recipe App"
      isState = true
    } else {
      document.title = title
      isState = false
    }
  })

  window.addEventListener("focus", () => {
    if (isState) {
      document.title = title
      isState = false
    }
  })
}

greetings()

// Data
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Search button
const searchBtn = document.getElementById("search-btn");

// Input for search
const user = document.getElementById("user-inp")

// Resutl inner html data return
const result = document.getElementById("result")

const getApi = async () => {
  const handleApi = await (await fetch(url)).json()
  const meals = handleApi.meals
  return meals
}


searchBtn.addEventListener("click", async () => {
  const getMeals = await getApi()

  // iser trim value
  const userValue = user.value.toLowerCase().trim()

  const mapping = getMeals.map(item => {
    const { strMeal, strMealThumb, strArea, strInstructions } = item
    if (userValue.length === 0) {
      result.style.marginTop = "10px"
      result.innerHTML = "Enter a Meal"
    } else if (strMeal.toLowerCase().trim().includes(userValue)) {
      result.innerHTML = `
      <img src='${strMealThumb}'>
      <div class="details">
          <h2>${strMeal}</h2>
          <h4>${strArea}</h4>
      </div>
      <div id="ingredient-con">
      
      </ul>
      </div>
      <div id="recipe">
          <button id="hide-recipe">X</button>
          <pre id="instructions"></pre>
      </div>
      <button id="show-recipe">View Recipe</button>
      `
      const ingredientCon = document.getElementById("ingredient-con")
      const ulList = document.createElement("ul")
      ingredientCon.append(ulList)

      for (let i = 1; i <= 20; i++) {
        const ingredientEl = item[`strIngredient${i}`]
        const measuresEl = item[`strMeasure${i}`]
        if (measuresEl !== "" && ingredientEl !== "") {
          let list = document.createElement("li");
          list.innerText = `${measuresEl} ${ingredientEl}`
          ulList.appendChild(list)
        }
      }

      const hideRecipe = document.getElementById("hide-recipe");
      const showRecipe = document.getElementById("show-recipe");
      const instructions = document.getElementById("instructions");
      const recipe = document.getElementById("recipe");

      showRecipe.addEventListener("click", () => {
        recipe.style.display = "block"
        instructions.innerHTML = `${strInstructions}`
      })

      hideRecipe.addEventListener("click", () => {
        recipe.style.display = "none"
      })
    }
  })

  return mapping
})