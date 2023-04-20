"use strict";
import { mealArea } from "./area.js";
import { categories } from "./Categories.js";
import { validation } from "./contact.js";
import { getHomeMeals } from "./home.js";
import { mealIngredients } from "./Ingredients.js";
import { search } from "./search.js";
import { sidebar } from "./Sidebar.js";
new getHomeMeals();
let Sidebar = new sidebar();
$("#contactLink").click(() => {
    $("#Contact .contactInfo").val("");
    $(".errorInput").css("display","none");
    });
$(".closeDetailsBtn").click(() => {
  $("#details").hide();
  $("#home").show();
     });
// Get the section links
const sectionLinks = $(".sectionLink");
// Hide all sections except the first one
$("section:not(#Sidebarsec)").hide();
// Add a click event listener to each section link
sectionLinks.click(function () {
  // Get the ID of the section to show
  const sectionId = $(this).attr("href");
  // Hide all sections except the one to show
  $("section:not(" + sectionId + ")").hide();
  $("#loader").fadeIn(300);
  $("#Sidebarsec").show();
  $("#loader").fadeOut(300);
  Sidebar.toogleSidebar();
  // Show the section to show
  $(sectionId).show();
  // Call the relevant class to display data for the section to show
  if (sectionId === "#search") {
    new search();
  } else if (sectionId === "#Categories") {
    new categories();
  } else if (sectionId === "#Area") {
    new mealArea();
  } else if (sectionId === "#Ingredients") {
    new mealIngredients();
  } else if (sectionId === "#Contact") {
    new validation();
  }
});
let date = new Date().getFullYear();
$("#currentYear").html(date);