import { responseSuccess } from "../common/helpers/response.helper.js";
import { articleService } from "../services/article.service.js"

export const articleController = {
   async findAll(req, res , next){
    // gọi service
        const articles = await articleService.findAll(req);

     const response = responseSuccess({
            data : articles,
            message : "Lấy danh sách articles thành công",
   });
      res.json(response);
    },

    async create(req, res , next){
         const article = await articleService.create(req );
        const response = responseSuccess({
            data : article,
            message : "Tạo  articles thành công",
   });
   res.json(response);
    },
    async update(req, res , next){
         const article = await articleService.update(req);
        const response = responseSuccess({
            data : article,
            message : "Cập nhật articles thành công",
   });
   res.json(response);
    },
     async delete(req, res , next){
        const article = await articleService.delete(req);
        const response = responseSuccess({
            data : article,
            message : "Xóa articles thành công",
   });
   res.json(response);
    }



};