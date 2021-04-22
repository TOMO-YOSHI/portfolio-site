import '../style.css';
import $ from 'jquery';
import 'regenerator-runtime/runtime'

const contentful = require("contentful");


// PageTransitionAnimation ****************************************
import { pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

pageSlideTransitionAnimationWithArguments("#go_to_skills", "#works_main", "./skills.html", "slide_out_right");

pageSlideTransitionAnimationWithArguments("#go_to_contact", "#works_main", "./contact.html", "slide_out_left");

// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("works");

// Get Content **************************************
// const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});

// Get content for personal works
client
  .getEntries({
    content_type: "portfolio",
    "fields.workType[in]": "Personal",
    order: "fields.order",
  })
  .then((response) => {
    const personalWorks = [];

    response.items.map( async (item, index) => {
      client
        .getAsset(item.fields.image[0].sys.id)
        .then((asset) => {
          const imageUrl = "https:" + asset.fields.file.url;

          let coreTechnology = ``;
          item.fields.coreTechnology.map((item) => {
            coreTechnology += `<li>&nbsp;${item}</li>`;
          });

          let workName = item.fields.workName;

          let eachWork = `
            <div class="each_work">
                <img src="${imageUrl}" alt="${asset.fields.title}">
                <h3>${workName}</h3>
                <div class="work_description">
                    <p>Core technology</p>
                    <ul>
                    ${coreTechnology}
                    </ul>
                </div>
                <a href="./each_work.html?title=${workName}">
                    <div class="see_more">
                        <p>See more</p>
                    </div>
                </a>
            </div>
          `;

          personalWorks.push({ index, eachWork });

          if (response.items.length === personalWorks.length) {
            personalWorks.sort(function (a, b) {
              return a.index - b.index;
            });
            $("#personal_works").removeClass("loader");  // ** Need to chage **

            personalWorks.forEach(el => {
              $("#personal_works").append(el.eachWork);  // ** Need to chage **
            })
          }

          // $("#personal_works").removeClass("loader");
          // $("#personal_works").append(eachWork);

        })
  });
})
.catch(console.error);

// Get content for group works
client
  .getEntries({
    content_type: "portfolio",
    "fields.workType[in]": "Group", // ** Need to chage **
    order: "fields.order",
  })
  .then((response) => {
    const groupWorks = [];
    response.items.map((item, index) => {
      client
        .getAsset(item.fields.image[0].sys.id)
        .then((asset) => {
          const imageUrl = "https:" + asset.fields.file.url;

          let coreTechnology = ``;
          item.fields.coreTechnology.map((item) => {
            coreTechnology += `<li>&nbsp;${item}</li>`;
          });

          let workName = item.fields.workName;

          if (workName.indexOf("_") > -1) {
            workName =
              workName.slice(0, workName.indexOf("_")) +
              " " +
              workName.slice(workName.indexOf("_") + 1);
          }

          let eachWork = `
            <div class="each_work">
                <img src="${imageUrl}" alt="${asset.fields.title}">
                <h3>${workName}</h3>
                <div class="work_description">
                    <p>Core technology</p>
                    <ul>
                    ${coreTechnology}
                    </ul>
                </div>
                <a href="./each_work.html?title=${workName}">
                    <div class="see_more">
                        <p>See more</p>
                    </div>
                </a>
            </div>
          `;

          groupWorks.push({index, eachWork});

          if(response.items.length === groupWorks.length) {
            groupWorks.sort(function (a, b) {
              return a.index - b.index;
            });
            $("#group_works").removeClass("loader");  // ** Need to chage **

            groupWorks.forEach(el => {
              $("#group_works").append(el.eachWork);  // ** Need to chage **
            })
          }
          // $("#group_works").removeClass("loader");  // ** Need to chage **

          // $("#group_works").append(eachWork);  // ** Need to chage **
        });
    });
  })
  .catch(console.error);
