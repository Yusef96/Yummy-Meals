"use strict";
import { mealArea } from "./area.js";
export class mealIngredients {
  constructor() {
    this.getIngredientsApi()
  }
  async getIngredientsApi() {
    try {
      let IngredientAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
      let IngredientApiResult = await IngredientAPI.json();
      this.displayAllIngredient(IngredientApiResult);
    } catch {
      console.error(error);
      $(".ingredientRow").html(
        `<p class="yellow-color">Oops! Something went wrong. Please try again later.</p>`
      );
    }
  }
  displayAllIngredient(api) {
    let ingredientBox = ``;
    for (let i = 0; i < api.meals.length && i < 20; i++) {
      ingredientBox += `<div class="col-md-3 text-center  text-white">
                    <div class="ingredientConent cursor-pointer text-white" id=${api.meals[i].strIngredient
        }>
                        <i class="fa-solid fa-utensils fs-2" id=${api.meals[i].strIngredient
        }></i>
                        <h2 id=${api.meals[i].strIngredient
        } >${api.meals[i].strIngredient
        }</h2>
        <p id=${api.meals[i].strIngredient} >${api.meals[
          i
        ].strDescription
          .split(" ")
          .slice(0, 20)
          .join(" ")} </p>
                    </div>
                </div>`;
    }
    $(".ingredientRow").html(ingredientBox);
    document.querySelector(".ingredientRow").innerHTML = ingredientBox;
      let selectedIngredient = $(".ingredientConent");
      $(selectedIngredient).click((e) => {
        let targetIngredient = $(e.target).attr("id");
        let getMealByIngredient = new mealArea();
        getMealByIngredient.getMealByArea(targetIngredient , "i");
      })
    }
  }