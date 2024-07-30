const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads'); // Directory to save uploaded files
    },
    filename: (req, file, callback) => {
        const filename = `pdf-${Date.now()}-${file.originalname}`; // Unique filename
        callback(null, filename);
    }
});

const fileFilter = (req, file, callback) => {
    const allowedMimeTypes = ['application/pdf'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(new Error('Invalid file type. Only PDF files are allowed.'));
    }
};

const multerConfig = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = multerConfig;
