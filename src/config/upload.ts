import * as multer from "multer";
import crypto from "crypto";
import path from "path";


export default {

    dest: path.resolve(__dirname, "..", "..", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "uploads"))
        },
        filename: (req, file, cb) => {
            const hash = crypto.randomBytes(16).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            cb(null, fileName);
        }
    }),
    limits: {
        fileSize: 4 * 1024 * 1024
    },
};