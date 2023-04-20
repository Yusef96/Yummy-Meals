"use strict";
/// <reference types="../@types/jquery" />
import { details } from "./details.js";
// *ANCHOR - Random meals class in Home page and export it to other classes to get API and display data in some sections which have same UI we can consider it THE MAIN CLASS 
export class getHomeMeals {
  constructor() {
    // *NOTE - loader page
    this.loader = $("#loader");
    $(document).ready(() => {
      this.loader.fadeOut(500, () => {
        $("body").css("overflow", "auto");
        $("#sidebarSec").fadeIn();
      
      //*NOTE -  call function that responsible for return data in home page
      this.getApi(`search.php?s=`, ` `);
      this.details = new details();
    });});
  }
  // *LINK - calling API and git data
  async getApi(api, name) {
    try {
      let randomApi = await fetch(`https://www.themealdb.com/api/json/v1/1/${api}${name}`);
      let randomApiResult = await randomApi.json();
      this.displayData(randomApiResult);
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      $("#allMealsContainer").html(`<p class="yellow-color">Oops! Something went wrong. Please try again later.</p>`);
    }
  }
  // *LINK - display data from API function:
  displayData(data) {
    $("#home").show(500); // show the home section when the user types in a search term
    let cartona = ``;
    if (data.meals && data.meals.length > 0) {
      for (let i = 0; i < data.meals.length && i < 20; i++) {
        cartona += `<div class="col-lg-3 col-md-4 col-sm-6">
                      <div class="mealContainer cursor-pointer rounded overflow-hidden position-relative">
                          <figure class="m-0"><img src="${data.meals[i].strMealThumb}" alt="${data.meals[i].strMealThumb}" class="w-100 maelImg"></figure>
                          <figcaption id=${data.meals[i].idMeal} class="mealLabel"><p class="m-0 ps-2 mealName">${data.meals[i].strMeal}</p></figcaption>
                      </div>
                  </div>`;
      }
    } else {
      cartona = `<p class="yellow-color">No results found</p>`;
    }
    document.querySelector("#allMealsContainer").innerHTML = cartona;
    $("#allMealsContainer").click((e) => {
      $("#loader").fadeIn(300);
      this.mealId = $(e.target).attr("id");
      // this.showMealDetails(this.mealId);
      this.details.showMealDetails(this.mealId);
      $("#loader").fadeOut(300);
    })
  }
}