"use strict";
// *NOTE - show meal details function
export class details {
  constructor() {
    $(".closeDetailsBtn").click(() => {
      $("#details").hide()
        $("#home").show();
    });
  }
  async showMealDetails(data) {
    try {
      $("section").not("#Sidebarsec").css("display", "none");
      $("#details").css("display", "block");
      let idAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`);
      let idApiResult = await idAPI.json();
      this.diplayMealDetais(idApiResult);
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      $("#detailsRow").html(`<p class="yellow-color">Oops! Something went wrong. Please try again later.</p>` );
    } }
  diplayMealDetais(data) {
    let ingredients = ``;
    for (let i = 1; i <= 20; i++) {
      if (data.meals[0][`strIngredient${i}`]) {
        ingredients += `<li class=" recipesItem">${data.meals[0][`strMeasure${i}`]} ${data.meals[0][`strIngredient${i}`]}</li>`;
      }}
    let tags = data.meals[0].strTags?.split(",");
    if (!tags) tags = [];
    let tagsStr = "";
    for (let i = 0; i < tags.length; i++) {
      tagsStr += ` <li class="tagItem">${tags[i]}</li>`;
    }
    $(".detailsRow").html(`<div class="col-md-5">
                        <figure><img src=${data.meals[0].strMealThumb} class="w-100 rounded" alt=""></figure>
                        <figcaption id="detailsImgCaption" class="yellow-hover fs-2 mb-md-0 mb-2 cursor-pointer">${data.meals[0].strMeal} </figcaption>
                        </div>
                        <div class="col-md-7">
                        <div class="detailsContainer p-2 pt-0">
                            <h2>Instructions</h2>
                            <p>${data.meals[0].strInstructions}</p>
                            <h3>area :<span id="detailArea"> ${data.meals[0].strArea}</span></h3>
                            <h3>Category :<span id="detailCategory "> ${data.meals[0].strCategory}</span></h3>
                            <h3>Recipes :</h3>
                            <ul class="p-0 recipesContainer flex-wrap d-flex align-items-center list-style-none justify-content-start">
                                ${ingredients}
                            </ul>
                            <h3>Tags :</h3>
                            <ul class="tagsContainer p-0 flex-wrap d-flex align-items-center list-style-none justify-content-start">
                                ${tagsStr}
                            </ul>
                            <a href="${data.meals[0].strYoutube}" target="_blank" class="btn btn-danger">youtube</a>
                            <a href="${data.meals[0].strSource}" target="_blank" class="btn btn-success">source</a>
                        </div>
                    </div>`);
  }}
