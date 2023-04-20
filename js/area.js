"use strict";
import { categories } from "./Categories.js";
export class mealArea {
  constructor() {
    this.getAreaApi();
  }
  async getAreaApi() {
    try {
      let areaAPI = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      let areaApiResult = await areaAPI.json();
      this.displayAllAreas(areaApiResult);
    } catch {
      console.error(error);
      $(".areaRow").html(
        `<p class="yellow-color">Oops! Something went wrong. Please try again later.</p>`
      );
    }
  }
  displayAllAreas(api) {
    let areaBox = ``;
    for (let i = 0; i < api.meals.length && i < 20; i++) {
      areaBox += `<div class="col-md-3 text-center  text-white">
                    <div class="areaConent cursor-pointer" id=${api.meals[i].strArea}>
                        <i class="fa-solid fa-house-flag fs-1" id=${api.meals[i].strArea}></i>
                        <h2 id=${api.meals[i].strArea}>${api.meals[i].strArea}</h2>
                    </div>
                </div>`;
    }
    document.querySelector(".areaRow").innerHTML = areaBox;
    let selectedArea = $(".areaConent");
    $(selectedArea).click((e) => {
        let targetArea = $(e.target).attr("id");
      this.getMealByArea(targetArea , `a`);
    });
  }
  async getMealByArea(area , dep) {
    try {
      let mealsCatAPI = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${dep}=${area}`
      );
      let mealsCatApiResult = await mealsCatAPI.json();
      let mealArea = new categories();
      mealArea.displayMealsByCat(mealsCatApiResult);
    } catch {
      console.error(error);
      $(".mainCat").html(
        `<p class="yellow-color">Oops! Something went wrong. Please try again later.</p>`
      );
    }
  }
}
