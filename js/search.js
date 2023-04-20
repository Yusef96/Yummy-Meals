"use strict";
/// <reference types="../@types/jquery" />
import { getHomeMeals } from "./home.js";
export class search {
  constructor() {
        this.mealFirstLetter = $("#serchByLetter");
        this.mealName = $("#serchByName");
        $(this.mealName).keyup(() => {
          let searchBNameTerm = this.mealName.val();
          let valueWithoutSpaces = searchBNameTerm.replace(/\s/g, "");
          if (valueWithoutSpaces !== "") {
            this.nameApi = new getHomeMeals();
            this.nameApi.getApi(`search.php?s=`, searchBNameTerm);
          }
        });
        $(this.mealFirstLetter).keyup(() => {
          let searcBLetterTerm = this.mealFirstLetter.val();
          this.nameApi.getApi(`search.php?f=`, searcBLetterTerm);
        });
    this.mealFirstLetter.attr("maxlength", 1); // set the max length to 1
  }}
