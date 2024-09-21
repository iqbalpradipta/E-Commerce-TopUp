import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../backend/src/UploadFile");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Math.round(Math.random() * 1e9)}`);
  },
});

const Upload = multer({ storage: storage });
export default Upload