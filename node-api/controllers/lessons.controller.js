const Joi = require("joi");
const mongoose = require("mongoose");
const Lessons = require("../models/Lessons");


const addNew = async(req, res) => {
    const PayloadSchema = Joi.object({
        courseId: Joi.string().required(),
        poster: Joi.string().optional(),
        videoUrl: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().optional(),
        lessonNumber: Joi.number().optional()
    });

    // validating payload
    let reqPayload = PayloadSchema.validate(req.body);

    if(reqPayload.error){
        return res.status(400).json({
            message: reqPayload.error.message || "Bad Request",
            code: 400
        })
    }else{
        reqPayload = reqPayload.value;
    }

    const payload = {
        ...reqPayload,
        status: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }

    try {
        await Lessons.create(payload);
        return res.status(201).send({
            message: 'Course added successfully!',
            status: 201
        })
    } catch (error) {
        console.error('console error: ',error);
        return res.status(500).send({
            message: err.message || 'Internal Server Error!',
            code: 500
        })
    }
}

const getAll = async(req, res) => {
    let filter = {}
    let count = 0;

    const QuerySchema = Joi.object({
        courseId: Joi.string().required(),
        limit: Joi.number().optional().default(20),
        skip: Joi.number().optional().default(0),
        status: Joi.number().default(1).allow(0,1)
    });

    // validating req query 
    let query = QuerySchema.validate(req.query);
    if(query.error){
        return res.status(400).json({
            message: query.error.message || "Bad Request",
            code: 400
        })
    }else{query
        query = query.value;
    }

    filter['status'] = query.status;

    try {
        count = await Lessons.find(filter).count();
        const result = await Lessons.find(filter)
            .skip(query.skip)
            .limit(query.limit)
            .select('-__v');

        if(!result || !result.length ){
            return res.status(204).send({
                message: "No Data Found!",
                status: 204
            })
        }
        return res.status(200).send({
            message: 'success!',
            data: {
                data: result,
                totalCount: count,
            },
            status: 200
        })
        
    } catch (error) {
        console.error('console error: ',error);
        return res.status(500).send({
            message: err.message || 'Internal Server Error!',
            code: 500
        })
    }

}

const getById = async(req, res) => {
    const id = req.params.id;
    try{
        const result = await Lessons.findOne({_id: mongoose.Types.ObjectId(id)}).select('-__v')
        if(!result || !Object.keys(result).length ){
            return res.status(204).send({
                message: "No Data Found!",
                status: 204
            })
        }
        return res.status(200).send({
            message: 'success!',
            data: result,
            status: 200
        })
            
    }catch(err){
        console.error('console error: ',err);
        return res.status(500).send({
            message: err.message || 'Internal Server Error!',
            code: 500
        })
    }
}

const updateById = async(req, res) => {
    const id = req.params.id;
    const PayloadSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().optional(),
        poster: Joi.string().optional()
    });

    // validating payload
    let reqPayload = PayloadSchema.validate(req.body);
    if(reqPayload.error){
        return res.status(400).json({
            message: reqPayload.error.message || "Bad Request",
            code: 400
        })
    }else{
        reqPayload = reqPayload.value;
    }

    try{
        const payload = {}
        for (let p in reqPayload){
            if(reqPayload[p]){
                payload[p] = reqPayload[p]
            }
        }
        const result = await Lessons.findOneAndUpdate(
            {_id: mongoose.Types.ObjectId(id)},
            {$set: payload})
        if(!result){
            res.status(404).send({
                message: "Course doesn't exist with this id!",
                status: 404
            })
        }
        return res.status(201).send({
            message: 'Course updated successfully!',
            status: 201
        })

    }catch(err){
        console.error('console error: ',error);
        return res.status(500).send({
            message: err.message || 'Internal Server Error!',
            code: 500
        })
    }

}

const updateStatus = async(req, res) => {
    const PayloadSchema = Joi.object({
        ids: Joi.array().items(Joi.string()),
        status: Joi.number().required().allow(0,1,4, 100)
    });

    // validating payload
    let reqPayload = PayloadSchema.validate(req.body);
    if(reqPayload.error){
        return res.status(400).json({
            message: reqPayload.error.message || "Bad Request",
            code: 400
        })
    }else{
        reqPayload = reqPayload.value;
    }

    try{
        const filter = {
            _id:{
                $in: reqPayload.ids.map(item=>mongoose.Types.ObjectId(item))
            }
        }
        let result;
        let message;
        if(reqPayload.status == 100){
            result = await Lessons.deleteMany(filter);
            message = "Selected Lessons are permanently deleted successfully!";
        }else{
            result = await Lessons.updateMany(filter, {status: reqPayload.status});
            message = "Selected Lessons status updated successfully!";
        }
        if(!result?.deletedCount && !result?.nModified){
            return res.status(404).send({
                message: "No data found!",
                code: 404
            })
        }
        return res.status(201).send({
            message: message,
            status: 201
        })
    }catch(err){
        console.error('Console Error', err)
        return res.status(500).send({
            message: err.message || 'Internal Server Error!',
            code: 500
        })
    }

}

module.exports = {
    addNew,
    getAll,
    getById,
    updateStatus,
    updateById
}