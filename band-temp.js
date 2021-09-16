"use strict";

const hum_icon = document.getElementById("hum_icon");
const close_btn = document.getElementById("close_btn");
const mob_nav_box = document.getElementById("mob_nav_box");
const lift_btn = document.getElementById("lift_btn");
const right_btn = document.getElementById("right_btn");
const personal_card_btn = document.getElementById("personal_card_btn");
const team_card_btn = document.getElementById("team_card_btn");
const enterprise_card_btn = document.getElementById("enterprise_card_btn");
const personal_overlay = document.getElementById("personal_overlay");
const team_overlay = document.getElementById("team_overlay");
const enterprise_overlay = document.getElementById("enterprise_overlay");
const personal_overlay_back = document.getElementById("personal_overlay_back");
const team_overlay_back = document.getElementById("team_overlay_back");
const enterprise_overlay_back = document.getElementById(
  "enterprise_overlay_back"
);
const name_error_msg = document.getElementById("name_error_msg");
const email_error_msg = document.getElementById("email_error_msg");
const mob_error_msg = document.getElementById("mob_error_msg");
const sub_error_msg = document.getElementById("sub_error_msg");
const submit_btn = document.getElementById("submit_btn");
const input_name = document.getElementById("input_name");
const input_email = document.getElementById("input_email");
const input_mob = document.getElementById("input_mob");
const input_sub = document.getElementById("input_sub");
const team_slider_card_inner = document.querySelector(
  ".team_slider_card_inner"
);
/////////////////////////

let check = "hide";
//----------------
let mob_nav_hide_visible = function (ele) {
  //function for hide/show of small screen nav container
  if (ele === "visible") {
    mob_nav_box.classList.remove("dis_block");
    mob_nav_box.classList.add("dis_none");
    check = "hide";
  }
  if (ele === "hide") {
    mob_nav_box.classList.remove("dis_none");
    mob_nav_box.classList.add("dis_block");
    check = "visible";
  }
};

///////////////////////////

close_btn.addEventListener("click", function () {
  //calling hide/show function for close btn in small screen nav container
  mob_nav_hide_visible(check);
});

//----------------

hum_icon.addEventListener("click", function () {
  //calling hide/show function for humburger icon
  mob_nav_hide_visible(check);
});

/////////////////////////////////
// out team scroll scroll functon
const scrollFunOnTeam = function (x, y) {
  team_slider_card_inner.scrollBy(x, y);
};
lift_btn.addEventListener("click", function () {
  scrollFunOnTeam(-320, 0);
});
right_btn.addEventListener("click", function () {
  scrollFunOnTeam(320, 0);
});

////////////////////////////////
// Pricing cards overlay hide/show functions starts
// ==========================
personal_card_btn.addEventListener("click", function () {
  personal_overlay.classList.remove("overlay_hidden");
  personal_overlay.classList.add("overlay_visible");
});
personal_overlay_back.addEventListener("click", function () {
  personal_overlay.classList.remove("overlay_visible");
  personal_overlay.classList.add("overlay_hidden");
});
// ==========================
team_card_btn.addEventListener("click", function () {
  team_overlay.classList.remove("overlay_hidden");
  team_overlay.classList.add("overlay_visible");
});
team_overlay_back.addEventListener("click", function () {
  team_overlay.classList.remove("overlay_visible");
  team_overlay.classList.add("overlay_hidden");
});
// ==========================
enterprise_card_btn.addEventListener("click", function () {
  enterprise_overlay.classList.remove("overlay_hidden");
  enterprise_overlay.classList.add("overlay_visible");
});
enterprise_overlay_back.addEventListener("click", function () {
  enterprise_overlay.classList.remove("overlay_visible");
  enterprise_overlay.classList.add("overlay_hidden");
});
// Pricing cards hide/show functions ends

//Contact form validation starts

//Contact form validation ends
