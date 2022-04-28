const express = require("express")

const router=express.Router();
const controller=require("../controller/controller")
const getController=require("../controller/getcontrollers")
const blogController=require("../controller/Blogs")





router.get("/get",function(req,res){
    res.send("hello")
})

router.post("/authors",controller.Author);
router.post("/blogs",controller.blog);
router.get("/blogs",controller.getblog);
router.delete("/blogs/:blogId",controller.deleted);
router.delete("/blogs",controller.deletequery);
//router.put("/blogs/:blogId",controller.updateblog)
router.get("/getfilterblog",getController.getFilterBlog)
router.put("/blogs/:blogId",blogController.updateBlog)












module.exports=router;