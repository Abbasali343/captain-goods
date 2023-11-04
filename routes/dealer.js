const express = require("express");
const router = express.Router();

const controller = require("../controllers/dealer.controller");

router.route("/addDealer").post(controller.addDealerInfo);
router.route("/allDealers").get(controller.allDealers);
// router.route("/addTestimonial").post(controller.addTestimonial);
// router.route("/addContact").post(controller.addContactInfo);
// router.route("/addProfession").post(controller.addProfessionalInfo);
// router.route("/addEducation").post(controller.addEducationInfo);
// router.route("/addPortfolio").post(controller.addPortfolioInfo);
// router.route("/updateUser").patch(controller.updatePersonalInfo);
// router.route("/updateProfession").patch(controller.updateProfessionalInfo);
// router.route("/updateTestimonial").patch(controller.updateTestimonial);

// router.route("/allTestimonials").get(controller.allTestimonials);
// router.route("/allContacts").get(controller.allContacts);
// router.route("/allEducations").get(controller.allEducations);
// router.route("/allPortfolios").get(controller.allPortfolios);
// // router.route('/onemedia').get(controller.onemedia);
router.route('/deleteDealer').delete(controller.deleteDealer);

module.exports = router;
