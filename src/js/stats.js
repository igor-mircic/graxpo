import { CountUp } from "../../node_modules/countup.js/dist/countUp.min";

const projectsCompleted = new CountUp("projects-completed", 1580);
const peopleLoved = new CountUp("people-loved", 2850);
const identifyEarn = new CountUp("identify-earn", 1500);
const businesDonor = new CountUp("busines-donor", 1430);

// Trigger countup animation when 50% of target element is in viewport
let target = document.querySelector(".stats__container");

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!projectsCompleted.error) {
        projectsCompleted.start();
      } else {
        console.error(projectsCompleted.error);
      }

      if (!peopleLoved.error) {
        peopleLoved.start();
      } else {
        console.error(peopleLoved.error);
      }

      if (!identifyEarn.error) {
        identifyEarn.start();
      } else {
        console.error(identifyEarn.error);
      }

      if (!businesDonor.error) {
        businesDonor.start();
      } else {
        console.error(businesDonor.error);
      }
    }
    console.log(entry.isIntersecting);
  });
};

let options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(callback, options);

observer.observe(target);
