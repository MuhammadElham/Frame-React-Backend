import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure uploads folder exists!
  },
  filename: function (req, file, cb) {
    console.log("Uploaded file:", file.originalname);
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
console.log("Uploads = ", upload);

export default upload;
