// import '../style.css';

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
    "fields.workName[in]": "BBS",
  })
  .then((response) => console.log(response.items))
  .catch(console.error);
