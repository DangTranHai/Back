import express, { response } from "express"
import { articleController } from "../controllers/article.controller.js"
import { responseErr, responseSuccess } from "../common/helpers/response.helper.js"
import { badRequestError } from "../common/helpers/exception.helper.js"

const articleRouter = express.Router()


articleRouter.get ( "/" , 
(req , res, next) => {console.log("middleware 1"); const resultA = "Kết quả A";req.payload= resultA; next();}, 
(req , res, next) => {console.log("middleware 2"); next();}, 
(req , res, next) => {console.log("middleware 3"), next();},
(req , res, next) => {console.log("middleware 4");
//      if (true) {
//    const errorResponse = responseErr();
//     res.status(errorResponse.statusCode).json(errorResponse);
//     console.log("middleware4", errorResponse)
// } else { next() ;}},
// throw new badRequestError()
next();},
(req , res, next) => {console.log("middleware 5"), next();},
(req , res, next) => {console.log("middleware 6");console.log(req.payload); next();},

 articleController.findAll )


 // create article
articleRouter.post("/", articleController.create); 


// update 
articleRouter.put( "/:articleId", articleController.update);

// delete
articleRouter.delete("/:articleId", articleController.delete);
export default articleRouter;

