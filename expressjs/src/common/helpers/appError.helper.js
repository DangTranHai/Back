import { responseErr } from "./response.helper.js";

export const appError = (err, req, res, next) => {
    console.log("Middleware xử lý lỗi ", err);
    const response = responseErr(err?.message, err?.statusCode, err?.stack);
      res.status(response.statusCode).json(response);
    
    
};