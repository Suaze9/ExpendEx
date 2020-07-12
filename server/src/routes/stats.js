const express = require('express');
const router = express.Router();
const validate = require('../helpers/tokenauth');

const { isValidObjectId } = require('mongoose');

const Expenses = require('../models/Expenses');
const ExpenseTypes = require('../models/ExpenseTypes');
const Categories = require('../models/Categories');

router.post('/total/', validate, async (req, res) => {
    const body = req.body;

    if(!body.filter){
        res.status(400).send('No filter provided');
        return;
    }

    let query = { user: req.auth._id };

    switch(body.filter){
        case 'month':{
            const now = new Date();
            const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            query.date = {"$gte": startDate, "$lt": endDate};
            break;
        }
        case 'range':{
            if(!body.range){
                res.status(400).send('No filter provided');
                return;
            }
            try{
                const startDate = new Date(body.range.start);
                const endDate = new Date(body.range.end);
                endDate.setHours(23,59,59,999);
                query.date = {"$gte": startDate, "$lt": endDate};
            }catch(err){
                res.status(400).send('Bad filter provided');
                return;
            }
            break;
        }
        case 'all':{
            break;
        }
        default:{
            res.status(400).send('Invalid filter provided');
            return;
        }
    }

    let exps = await Expenses.find(query);
    if(!exps){
        res.status(500).send('Internal Error...');
        return;
    }

    const expArr = [];
    const total = exps.reduce((sum, exp)=> sum + exp.cost);

    res.status(200).send({ filter: body.filter, total });

})

router.post('/total/category/:id', validate, async (req, res) => {
    const body = req.body;
    const findId = req.params.id;

    if(!isValidObjectId(findId)){
        res.status(400).send('Invalid Category id');
        return;
    }
    
    const cat = await Categories.findOne({ _id: findId, user: req.auth._id});
    if(!cat){
        res.status(404).send('Category not found');
        return;
    }

    if(!body.filter){
        res.status(400).send('No filter provided');
        return;
    }

    let query = { user: req.auth._id, category: findId };

    switch(body.filter){
        case 'month':{
            const now = new Date();
            const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            query.date = {"$gte": startDate, "$lt": endDate};
            break;
        }
        case 'range':{
            if(!body.range){
                res.status(400).send('No filter provided');
                return;
            }
            try{
                const startDate = new Date(body.range.start);
                const endDate = new Date(body.range.end);
                endDate.setHours(23,59,59,999);
                query.date = {"$gte": startDate, "$lt": endDate};
            }catch(err){
                res.status(400).send('Bad filter provided');
                return;
            }
            break;
        }
        case 'all':{
            break;
        }
        default:{
            res.status(400).send('Invalid filter provided');
            return;
        }
    }

    let exps = await Expenses.find(query);
    if(!exps){
        res.status(500).send('Internal Error...');
        return;
    }

    const expArr = [];
    const total = exps.reduce((sum, exp)=> sum + exp.cost);

    res.status(200).send({ filter: body.filter, total });

})

router.post('/total/expenseType/:id', validate, async (req, res) => {
    const body = req.body;
    const findId = req.params.id;

    if(!isValidObjectId(findId)){
        res.status(400).send('Invalid ExpenseType id');
        return;
    }
    
    const exp = await ExpenseTypes.findOne({ _id: findId, user: req.auth._id});
    if(!exp){
        res.status(404).send('ExpenseType not found');
        return;
    }

    if(!body.filter){
        res.status(400).send('No filter provided');
        return;
    }

    let query = { user: req.auth._id, category: findId };

    switch(body.filter){
        case 'month':{
            const now = new Date();
            const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            query.date = {"$gte": startDate, "$lt": endDate};
            break;
        }
        case 'range':{
            if(!body.range){
                res.status(400).send('No filter provided');
                return;
            }
            try{
                const startDate = new Date(body.range.start);
                const endDate = new Date(body.range.end);
                endDate.setHours(23,59,59,999);
                query.date = {"$gte": startDate, "$lt": endDate};
            }catch(err){
                res.status(400).send('Bad filter provided');
                return;
            }
            break;
        }
        case 'all':{
            break;
        }
        default:{
            res.status(400).send('Invalid filter provided');
            return;
        }
    }

    let exps = await Expenses.find(query);
    if(!exps){
        res.status(500).send('Internal Error...');
        return;
    }

    const expArr = [];
    const total = exps.reduce((sum, exp)=> sum + exp.cost);

    res.status(200).send({ filter: body.filter, total });

})

module.exports = router;