import Post from "../modelsMySql/OperatingSteps.js";

//MYSQL OPERATING PROCEDURE
export const AddOperatingStep = async(req, res, next) => {
    let {OperatingProcedure} = req.body
    let post = new Post(OperatingProcedure)
    post = await post.save()
    console.log(post)
}