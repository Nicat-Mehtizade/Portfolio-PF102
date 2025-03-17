const Joi = require("joi");

const joiSchema = Joi.object({
  title: Joi.string().min(3).required(),
  categoryId: Joi.string().required(),
  content: Joi.string().required(),
  date:Joi.string()
});


const validate=async(req,res,next)=>{
    console.log(req.file);
    try {
        const {error}=joiSchema.validate({...req.body})
        // next()
    if(error){
       return res.status(400).json({
            error:error.details[0]
        })
    }

    next()
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}

module.exports=validate