import sequelize from "../common/sequelize/connect.sequelize.js"
import Article from "../models/article.model.js"
import { prisma } from "../common/prisma/connect.prisma.js";
export const articleService = {

    async findAll(req){
        // sequelize
       //const res = await Article.findAll()
        let {page , pageSize} = req.query
        console.log(page ,pageSize);

        const pageDefault = 1;
        const pageSizeDefault = 3;

        page = Number(page) || 1;
        pageSize = Number(pageSize) || 3;
        const index = (page -1) * pageSize
        // xử lý trường hợp âm
        if (page < 1) page = 1;
        if (pageSize < 1) pageSize = 3;
       // prisma
      const res = await prisma.articles.findMany({
        where :{
            isDeleted : false,
        },
        skip : index,
        take : pageSize,

      });

      const totalItems = await prisma.articles.count({
        where : {
            isDeleted : false,

        }
      });
      // tính tổng số trang thông qua math.ceil

      const totalPages = Math.ceil(totalItems/ pageSize);
        return {
            items : res,
            totalItems : totalItems,
            totalPages : totalPages,
            page : page,
            pageSize : pageSize
        };
    },

    async create(req){
        // const res = await prisma.articles.findMany();
        const body = req.body;
        console.log ({body});

        const res = await prisma.articles.create({
            data: {
                title: body.title,
                content: body.content,
                userId: body.userId,
            },
            });
        return true;
    },
    async update(req) {
  const { articleId } = req.params;
  const body = req.body;

  await prisma.articles.update({
    where: {
      id: Number(articleId),
    },
    data: {
      title: body.title,
      content: body.content,
      // userId: body.userId,
    },
  });

  return true;
},
    
    async delete(req) {
        const {articleId} = req.params;
    //  const res =   await prisma.articles.delete({
    //          where: {
    //     id: Number(articleId),
    //     }
        
    //     })

    await prisma.articles.update({
        where : {
            id :Number(articleId),
        },
        data  : {
            isDeleted : true,
            deletedAt : new Date(),
            deletedBy : 1,
        }
    })
  return true;
}



    };