import { Request, Response, NextFunction } from 'express';

const uploader = require("../../utilities/singleUploader");

function avatarUpload(req: Request, res: Response, next: NextFunction) {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed!"
  );

  // call the middleware function
  upload.any()(req, res, (err: any) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = avatarUpload;
