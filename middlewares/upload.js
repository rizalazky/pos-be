const multer = require('multer')
const maxSize = 10 * 1024 * 1024;
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,  file.originalname)
    }
})

const upload = multer({ 
    storage: storage , 
    fileFilter: (req, file, cb) => {
        
        // let files = fs.readdirSync('/uploads');
        // if(files.includes(file.originalname)){
        //     fs.unlinkSync('/uploads/'+ file.originalname);
        // }
        
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true)
        } else {
            cb(new Error("image should be png or jpeg extension"), false)
        }
    },
    limits: {fileSize: maxSize},
})

module.exports = upload