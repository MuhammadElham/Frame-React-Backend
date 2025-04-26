import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    console.log("Uploaded file = ", file.originalname);
    callback(null, file.originalname);
  },
});

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, 'uploads/'); // <-- Folder batana zaruri!
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + '-' + file.originalname);
//   }
// });


const upload = multer({ storage });
console.log("Uploads = ", upload);

export default upload;
