// import express from "express"
// import rootRouter from "./src/routers/root.router.js";


// const app = express()
// // console.log("log app ", app)

// const PORT = 3069;

// app.get("/", rootRouter )

// app.listen(PORT, () => {


//     // sau khi server chạy sẽ tiếp tục thực hiện các logic cod bên trong callback
//     console.log(`server online at port: ${PORT}` )
// } )



import express from "express";
import rootRouter from "./src/routers/root.router.js";
import { appError } from "./src/common/helpers/appError.helper.js";
import cors from "cors";

const app = express();

// app.use ( (req,res, next) => {

//   console.log(req.headers)

//   res.setHeader("access-control-allow-method", "GET, POST, PUT, DELETE");
//   res.setHeader("access-control-allow-headers", "content-type");
//   res.setHeader("access-control-allow-origin", "http://localhost:3000");

//   next()
//  })

app.use(cors({origin : "http://localhost:3000"})) //middleware xử lý CORS cho phép truy cập từ localhost:3000, có thể thay đổi origin thành * để cho phép tất cả các nguồn truy cập, tuy nhiên không nên sử dụng trong môi trường production vì lý do bảo mật.

const PORT = 3069;  

app.use(express.json())


app.use("/api", rootRouter);

app.use ( appError);

app.listen(PORT, () => {
  console.log(`server online at port: ${PORT}`);
});
