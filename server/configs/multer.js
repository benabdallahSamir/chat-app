import multer from "multer";
import path from "path";

// Set storage engine
const storage = multer.diskStorage({
  destination: "../uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("myImage");

// Check file type
function checkFileType(file, cb) {
  if (true) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

export default upload;
