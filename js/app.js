//world Cases
let world_conform = document.getElementById("world-conform");
let world_deaths = document.getElementById("world-deaths");
let world_recovered = document.getElementById("world-recovered");

function getData() {
  fetch("https://coronavirus-worlddata.herokuapp.com/total")
    .then(res => {
      return res.json();
    })
    .then(data => {
      world_conform.innerHTML = data.total;
      world_deaths.innerHTML = data.deaths;
      world_recovered.innerHTML = data.cured;
    });
}
getData();

// India Data

let india_total = document.getElementById("india-total");
let india_deaths = document.getElementById("india-deaths");
let india_recovered = document.getElementById("india-recovered");
let india_active = document.getElementById("india-active");
function getIndia() {
  fetch("https://coronavirus-worlddata.herokuapp.com/all")
    .then(res => {
      return res.json();
    })
    .then(data => {
      india_active.innerHTML = data.india.active;
      india_recovered.innerHTML = data.india.cured;
      india_deaths.innerHTML = data.india.deaths;
      india_total.innerHTML = data.india.total;
    });
}
getIndia();

//State Cases
let state_table = document.getElementById("state-table");
function getStates() {
  fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(res => {
      return res.json();
    })
    .then(data => {
      // console.log(data.data.regional);
      let state_data = data.data.regional;
      Array.from(state_data).forEach(state => {
        // console.log(state);
        let html = `
         <tr>
        <td>${state.loc}</td>
        <td>${state.confirmedCasesIndian}</td>
        <td>${state.deaths}</td>
        </tr>`;
        state_table.innerHTML += html;
        // console.log(html);
      });
    });
}
getStates();

// Get COrona News
let news_items = document.getElementById("news");
function getNews() {
  fetch("https://cryptic-ravine-96718.herokuapp.com/")
    .then(res => {
      return res.json();
    })
    .then(data => {
      // news_arr = data.news;
      // news_arr.length =
      data.news.length = 6;
      data.news.forEach(news => {
        // console.log(news);
        let title = news.title;
        let new_title = title.substr(0, 40);
        // console.log(news.title.length);
        html = ` 
        <div class="col m4" >
        <div class="card">
          <div class="card-image">
            <img src="${news.img}">
          </div>
          <div class="card-content">
            <p>${new_title}</p>
          </div>
          <div class="card-action">
            <a href="${news.link}">Read more</a>
          </div>
        </div>
        </div>`;

        news_items.innerHTML += html;
      });
    });
}
getNews();

// map Hover Effect

// function contentLoaded() {
//   //mouse-over event handler
//   $("#21").mouseover(function() {
//     $("#divToolTip").css("display", "inline");
//   });
// }

// contentLoaded();
// import { createPopper } from "@popperjs/core";
// const popcorn = document.getElementById("#21");
// const tooltip = document.getElementById("#tooltip");
// createPopper(popcorn, tooltip, {
//   placement: "right"
// });

let svg = document.querySelectorAll("path");
// console.log(svg);
svg.forEach(data => {
  console.log(Array.from(data.getAttribute("name")));
});
