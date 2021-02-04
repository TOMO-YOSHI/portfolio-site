import '../style.css';
import $ from "jquery";

const contentful = require("contentful");

// PageTransitionAnimation ****************************************
import { pageTransitionAnimationWithArguments, pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

// pageTransitionAnimationWithArguments("#go_to_welcom", "#profile_body", "./index.html");

pageSlideTransitionAnimationWithArguments("#go_to_works", "#each_work_main", "./works.html", "slide_out_right");
// pageSlideTransitionAnimationWithArguments("#go_to_skill", "#profile_body", "./profile.html");


// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("profile");

// Get Content **************************************
// const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
});

// client.getEntry("47uMEVsOZHp4SxnBvOnkJh").then(function (entry) {
//   // logs the entry metadata
//   console.log(entry.sys);

//   // logs the field with ID title
//   console.log(entry.fields.workName);
// });

// client
//   .getEntries({
//     content_type: "portfolio",
//     "fields.workName[in]": "BBS",
//   })
//   .then((response) => console.log(response.items))
//   .catch(console.error);

const queryString = window.location.search;
// console.log(queryString);

const urlParams = new URLSearchParams(queryString);

let title = urlParams.get("title");
// console.log(title);

// if (title.indexOf(" ") > -1) {
//   title =
//     title.slice(0, title.indexOf(" ")) +
//     "_" +
//     title.slice(title.indexOf(" ") + 1);
// }

// title.replace(" ", "_");

// console.log(title);

client
  .getEntries({
    content_type: "portfolio",
    "fields.workName[in]": title,
  })
  .then((response) => {
    // console.log(response.items);
    response.items.map((item) => {
      // console.log(item);
      const asset = client
        .getAsset(item.fields.image[0].sys.id)
        .then((asset) => {
          const imageUrl = "https:" + asset.fields.file.url;
          // console.log(imageUrl);

          let coreTechnology = ``;
          item.fields.coreTechnology.map((item) => {
            coreTechnology += `<li>&nbsp;${item}</li>`;
          });

          // console.log(coreTechnology);

          let workName = item.fields.workName;

          // if (workName.indexOf("_") > -1) {
          //   workName =
          //     workName.slice(0, workName.indexOf("_")) +
          //     " " +
          //     workName.slice(workName.indexOf("_") + 1);
          // }

          // console.log(item.fields);

          let eachWork = `
            <h2>${workName}</h2>
            <div id="visual_div" ${item.fields.youTubeUrl ? 'class="video-container"' : null}>
                ${item.fields.youTubeUrl ? item.fields.youTubeUrl :
                `<p>Image</p>
                <img src="${imageUrl}" alt="${workName}">`}
            </div>
            <div class="each_work_description">
                <p class="orange">Core technology</p>
                <ul>
                    ${coreTechnology}
                </ul>

                <p class="about_this_work">About this Work</p>
                <p>${item.fields.aboutThisWork}</p>

                <div class="work_links">
                    ${
                      item.fields.webPageUrl ? `<p><a href="${item.fields.webPageUrl}" target="_blank">Visit the Actual Web Page</a></p>` : ""
                    }
                    ${
                      item.fields.githubUrl ? `<p><a href="${item.fields.githubUrl}" target="_blank">Look into the Code (Go to GitHub)</a></p>`
                      : `<p class="orange">Sorry Github is private !</p>`
                    }
                </div>
            </div>
          `;

          $("#each_work_contents").removeClass("loader");

          $("#each_work_contents").append(eachWork);
        });
    });
  })
  .catch(console.error);
