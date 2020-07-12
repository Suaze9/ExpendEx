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

    exps.forEach((exp)=>{
        expArr.push({ id: exp._id, cost: exp.cost, type: exp.type});
    })

    res.status(200).send({expenses: expArr});
    

})

module.exports = router;