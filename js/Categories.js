"use strict";
import { details } from "./details.js";
export class categories {
  constructor() {
    this.mealDetails = new details();
    this.getCategories();
  }
  async getCategories() {
    try {
      let catAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php` );
      let catApiResult = await catAPI.json();
      this.displayCategories(catApiResult);
    } catch {
      console.error(error);
      $(".mainCat").html(`<p class="yellow-color">Oops! Something went wrong. Please try again later.</p>`);
    }
  }
  displayCategories(api) {
    let catBox = ``;
    for (let i = 0; i < api.categories.length && i < 20; i++) {
      catBox += `<div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="catContainer cursor-pointer rounded overflow-hidden position-relative" id=${api.categories[i].strCategory
                    }>
                        <figure class="m-0">
                            <img src="${
                              api.categories[i].strCategoryThumb
                            }" alt="${
        api.categories[i].strCategoryThumb
      }" class="w-100 catImg" id=${api.categories[i].strCategory}>
                        </figure>
                        <figcaption  class="catLabel d-flex flex-column justify-content-around" id=${
                          api.categories[i].strCategory
                        }>
                            <h3 class="catName" id=${
                              api.categories[i].strCategory
                            }>
                            ${api.categories[i].strCategory}
                            </h3>
                            <p class="m-0 p-2 catName" id=${
                              api.categories[i].strCategory
                            }>
                                ${api.categories[i].strCategoryDescription
                                  .split(" ")
                                  .slice(0, 20).join(" ")}
                            </p>
                        </figcaption>
                    </div>
                </div>`;
    }
    document.querySelector(".mainCat").innerHTML = catBox;
    let selectedCat = $(".catContainer");
    $(selectedCat).click((e) => {
      let targetCat = $(e.target).attr("id");
      this.getMealByCat(targetCat);
    });
  }
  async getMealByCat(cat) {
    try {
      let mealsCatAPI = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
      );
      let mealsCatApiResult = await mealsCatAPI.json();
      this.displayMealsByCat(mealsCatApiResult);
    } catch {
      console.error(error);
      $(".mainCat").html(
        `<p class="yellow-color">Oops! Something went wrong. Please try again later.</p>`
      );
    }
  }
  displayMealsByCat(data) {
    $("section").not("#Sidebarsec").css("display", "none");
    $("#mealByCat").css("display", "block");
    let mealBox = ``;
    for (let i = 0; i < data.meals.length && i < 20; i++) {
      mealBox += `<div class="col-lg-3 col-md-4 col-sm-6">
                      <div class="mealContainer cursor-pointer rounded overflow-hidden position-relative" id=${data.meals[i].idMeal}>
                          <figure class="m-0" id=${data.meals[i].idMeal}>
                              <img src="${data.meals[i].strMealThumb}" alt="${data.meals[i].strMealThumb}" class="w-100 maelImg">
                          </figure>
                          <figcaption id=${data.meals[i].idMeal} class="mealLabel">
                              <p class="m-0 ps-2 mealName" id=${data.meals[i].idMeal}>
                                  ${data.meals[i].strMeal}
                              </p>
                          </figcaption>
                      </div>
                  </div>`;
    }
    document.querySelector(".targetCat").innerHTML = mealBox;
    $(".mealContainer").click((e) => {
      let targetMeal = $(e.target).attr("id");
      this.mealDetails.showMealDetails(targetMeal);
    });
  }
}
