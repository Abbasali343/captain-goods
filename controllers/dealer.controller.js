const Dealer = require("../model/dealerSchema");

exports.addDealerInfo = async (req, res, next) => {
  try {
    const {
      id,
      name,
      companyName,
      officeNumber,
      mobileNumber,
      officeAddress,
      city,
    } = req.body;
    const type = "movie";
    if (
      !id ||
      !name ||
      !companyName ||
      !officeNumber ||
      !mobileNumber ||
      !officeAddress ||
      !city
    ) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    Dealer.findOne({ id: id }).then((dealerExist) => {
      if (dealerExist) {
        return res
          .status(403)
          .json({ error: "A Dealer is Already Registered with this Id" });
      }

      const dealer = new Dealer({
        id,
        name,
        companyName,
        officeNumber,
        mobileNumber,
        officeAddress,
        city,
      });

      dealer
        .save()
        .then(() => {
          res.status(201).json({ message: "Dealer Added Successfully" });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to add Dealer" })
        );
    });
  } catch (error) {
    next(error);
  }
};

// exports.addTestimonial = async (req, res, next) => {
//   try {
//     const { name, profession, description } = req.body;
//     const type = "movie";
//     if (!name || !profession || !description) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     Testimonial.findOne({ name: name }).then((useExist) => {
//       if (useExist) {
//         return res.status(403).json({ error: "Testimonial Exist" });
//       }

//       const testimonial = new Testimonial({
//         name,
//         profession,
//         description,
//       });

//       testimonial
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "Testimonial Added Successfully" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Failed to add Testimonial" })
//         );
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.addContactInfo = async (req, res, next) => {
//   try {
//     const { email, phoneNo } = req.body;
//     if (!email || !phoneNo) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     const contact = new Contact({
//       email,
//       phoneNo,
//     });

//     contact
//       .save()
//       .then(() => {
//         res.status(201).json({ message: "Contact Info Added Successfully" });
//       })
//       .catch((err) =>
//         res.status(500).json({ error: "Failed to add Contact Info" })
//       );
//   } catch (error) {
//     next(error);
//   }
// };
// exports.addProfessionalInfo = async (req, res, next) => {
//   try {
//     const { title, description } = req.body;
//     if (!title || !description) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     const profession = new Profession({
//       title,
//       description,
//     });

//     Profession.findOne({ title: title }).then((professionExist) => {
//       if (professionExist) {
//         return res.status(403).json({ error: "Profession Exist" });
//       }

//       profession
//         .save()
//         .then(() => {
//           res
//             .status(201)
//             .json({ message: "Profession Info Added Successfully" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Failed to add Profession Info" })
//         );
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// exports.addEducationInfo = async (req, res, next) => {
//   try {
//     const { title, type, company, description } = req.body;
//     if (!title || !description || !type || !company) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     const education = new Education({
//       title,
//       type,
//       company,
//       description,
//     });

//     education
//       .save()
//       .then(() => {
//         res
//           .status(201)
//           .json({ message: "Education/Experience Info Added Successfully" });
//       })
//       .catch((err) =>
//         res
//           .status(500)
//           .json({ error: "Failed to add Education/Experience Info" })
//       );
//   } catch (error) {
//     next(error);
//   }
// };
// exports.addPortfolioInfo = async (req, res, next) => {
//   try {
//     const { field, links } = req.body;
//     if (!field || !links) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     const portfolio = new Portfolio({
//       field,
//       links,
//     });

//     portfolio
//       .save()
//       .then(() => {
//         res.status(201).json({ message: "Portfolio Info Added Successfully" });
//       })
//       .catch((err) =>
//         res.status(500).json({ error: "Failed to add Portfolio Info" })
//       );
//   } catch (error) {
//     next(error);
//   }
// };
// exports.updatePersonalInfo = async (req, res, next) => {
//   try {
//     const { name, link } = req.body;
//     if (!name || !link) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     User.findOne({ name: name }).then((useExist) => {
//       if (!useExist) {
//         return res.status(403).json({ error: "User does not Exist" });
//       }

//       User.findOneAndUpdate({ name: name }, { link: link })
//         .then(() => {
//           res.status(201).json({ message: "User Info Updated Successfully" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Failed to Update User Info" })
//         );
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.updateProfessionalInfo = async (req, res, next) => {
//   try {
//     const { title, link } = req.body;
//     if (!title || !link) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     Profession.findOne({ title: title }).then((professionExist) => {
//       if (!professionExist) {
//         return res.status(403).json({ error: "Profession does not Exist" });
//       }

//       Profession.findOneAndUpdate({ title: title }, { link: link })
//         .then(() => {
//           res
//             .status(201)
//             .json({ message: "Profession Info Updated Successfully" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Failed to Update Profession Info" })
//         );
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// exports.updateTestimonial = async (req, res, next) => {
//   try {
//     const { name, link } = req.body;
//     if (!name || !link) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }

//     Testimonial.findOne({ name: name }).then((testimonialExist) => {
//       if (!testimonialExist) {
//         return res.status(403).json({ error: "Testimonial does not Exist" });
//       }

//       Testimonial.findOneAndUpdate({ name: name }, { link: link })
//         .then(() => {
//           res
//             .status(201)
//             .json({ message: "Testimonial Info Updated Successfully" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Failed to Update Testimonial Info" })
//         );
//     });
//   } catch (error) {
//     next(error);
//   }
// };

exports.allDealers = async (req, res, next) => {
  try {
    const data = await Dealer.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};
// exports.allTestimonials = async (req, res, next) => {
//   try {
//     const data = await Testimonial.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Data Not Found" });
//   }
// };
// exports.allContacts = async (req, res, next) => {
//   try {
//     const data = await Contact.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Data Not Found" });
//   }
// };
// exports.allEducations = async (req, res, next) => {
//   try {
//     const data = await Education.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Data Not Found" });
//   }
// };
// exports.allPortfolios = async (req, res, next) => {
//   try {
//     const data = await Portfolio.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Data Not Found" });
//   }
// };

// exports.onemedia = async (req, res, next) => {
//   try {
//     const data = await Media.findById(req.body.id);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Data Not Found" });
//   }
// };

exports.deleteDealer = async (req, res, next) => {
  try {
    const id = req.body.id;
    Dealer.findOne({ id: id }).then((dealerExist) => {
      if (!dealerExist) {
        return res
          .status(403)
          .json({ error: "Dealer does not exist with this Id" });
      }

      Dealer.findOneAndDelete({ id: id }).then(() => {
        res.send(`Document has been deleted..`);
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
