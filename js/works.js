import '../style.css';
import $ from 'jquery';

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
  space: "cggsnbtxpwpk",
  accessToken: "OWFLFySicDm2GDH9jnz3VLOdN8_2ojMCgcM64S0Mirs",
});

// client.getEntry("47uMEVsOZHp4SxnBvOnkJh").then(function (entry) {
//   // logs the entry metadata
//   console.log(entry.sys);

//   // logs the field with ID title
//   console.log(entry.fields.workName);
// });

client
  .getEntries({
    content_type: "portfolio",
    "fields.workType[in]": "Personal",
  })
  .then((response) => {
    console.log(response.items);
    // console.log(response.items[0].sys.id);
    // console.log(response.items[0].fields);
    response.items.map((item) => {
      console.log(item)
      const asset = client
        .getAsset(item.fields.image[0].sys.id)
        .then((asset) => {
          const imageUrl = "https:" + asset.fields.file.url;
          // console.log(imageUrl);

          let coreTechnology = ``;item.fields.coreTechnology.map(item => {
            coreTechnology += `<li>&nbsp;${item}</li>`;
          })

          // console.log(coreTechnology);

          let workName = item.fields.workName.toLowerCase();

          if (workName.indexOf(" ") > -1) {
            workName =
              workName.slice(0, workName.indexOf(" "))
              + "_" +
              workName.slice(workName.indexOf(" ") + 1);
          }

          console.log(workName);

          const eachWork = `
            <div class="each_work">
                <h3>${item.fields.workName}</h3>
                <img src="${imageUrl}" alt="${asset.fields.title}">
                <div class="work_description">
                    <p>Core technology</p>
                    <ul>
                    ${coreTechnology}
                    </ul>
                </div>
                <a href="./each_work.html?category=${item.fields.workType}?title=${workName}">
                    <div class="see_more">
                        <p>See more</p>
                    </div>
                </a>
            </div>
          `;

          $("#personal_works").append(eachWork);
        });
    })
  })
  .catch(console.error);
