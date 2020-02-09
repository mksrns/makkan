const moment = require('moment');
const DailySell = require('../models/dailySell');

// exports.dailySells_get_all = (req, res, next) => {
//     DailySell.find(function(err, result){
//         if(err){
//             res.status(500).json({error: err});
//         } else {
//             if(result.length >= 1){
//                 res.status(200).json({
//                     count: result.length,
//                     dailySell: result
//                 });
//             } else {
//                 res.status(404).json({
//                     message: 'No Entries found'
//                 });
//             }            
//         }
//     });
// }

// exports.dailySells_get_dailySell = (req, res, next) => {
//     DailySell.findById(req.params.dailySellId, function(err, result){
//         if(err){
//             res.status(500).json({error: err});
//         } else {
//             if(result){
//                 res.status(200).json({
//                     dailySell: result,
//                     request: {
//                         type: 'GET',
//                         description: 'Get all dailySell',
//                         url: "http://localhost:8080/dailySells/"
//                     }
//                 });
//             } else {
//                 res.status(404).json({
//                     message: 'No Entries found'
//                 });
//             }            
//         }
//     });
// }

exports.dailySells_create_dailySell = (req, res, next) => {
    const dailySell = new DailySell({
        customer_name: req.body.customer_name,
        mobile: req.body.mobile,
        area: req.body.area,
        locality: req.body.locality,
        district: req.body.district,
        state: req.body.state,
        brick_qty: req.body.brick_qty,
        rate: req.body.rate,
        qty: req.body.qty,
        total_brick_amt: req.body.rate * req.body.qty,
        total_amt: req.body.rate * req.body.qty + req.body.gaddi_bhara,
        gaddi_bhara: req.body.gaddi_bhara,
        vehicle_no: req.body.vehicle_no,
        deposit: req.body.deposit,
        pending: req.body.rate * req.body.qty + req.body.gaddi_bhara - req.body.deposit,
        created_at: new Date()
    });
    dailySell.save((err,result) => {
        if(err){
            res.status(500).json({msg: 'Failed to add daily sell', error: err});
        } else {
            res.status(201).json({
                message: "Daily sell added Successfully",
                createdData: result,
                request: {
                    type: 'GET',
                    url: "http://localhost:8080/dailySells/" + result._id
                }
            });
        }
    });
}

// exports.dailySells_delete_dailySell = (req, res, next) => {
//     DailySell.remove({_id:req.params.dailySellId}, function(err, result){
//         if(err){
//             res.status(500).json({error: err});
//         } else {
//             res.status(200).json({
//                 message: 'dailySell deleted',
//                 request: {
//                     type: 'POST',
//                     url: 'http://localhost:8080/dailySells/'
//                 }
//             });
//         }
//     });
// }

const limit_ = 3;

exports.dailySells_get_all = async function (req, res) {
    let aggregate_options = [];

    //PAGINATION
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || limit_;

    //set the options for pagination
    const options = {
        page, limit,
        collation: {locale: 'en'},
        customLabels: {
            totalDocs: 'totalResults',
            docs: 'dailySells'
        }
    };

    //FILTERING AND PARTIAL TEXT SEARCH -- FIRST STAGE
    let match = {};

    //filter by name - use $regex in mongodb - add the 'i' flag if you want the search to be case insensitive.
    if (req.query.q) match.customer_name = {$regex: req.query.q, $options: 'i'};

    //filter by date
    if (req.query.date) {
        let d = moment(req.query.date);
        let next_day = moment(d).add(1, 'days'); // add 1 day

        match.created_at = {$gte: new Date(d), $lt: new Date(next_day)};
    }

    aggregate_options.push({$match: match});

    //GROUPING -- SECOND STAGE
    if (req.query.group !== 'false' && parseInt(req.query.group) !== 0) {
        let group = {
            _id: {$dateToString: {format: "%Y-%m-%d", date: "$created_at"}}, // Group By Expression
            data: {$push: "$$ROOT"}
        };

        aggregate_options.push({$group: group});
    }

    //SORTING -- THIRD STAGE
    let sortOrder = req.query.sort_order && req.query.sort_order === 'desc' ? -1 : 1;
    aggregate_options.push({$sort: {"data.created_at": sortOrder}});

    //LOOKUP/JOIN -- FOURTH STAGE
    // aggregate_options.push({$lookup: {from: 'interested', localField: "_id", foreignField: "eventId", as: "interested"}});

    // Set up the aggregation
    const myAggregate = DailySell.aggregate(aggregate_options);
    const result = await DailySell.aggregatePaginate(myAggregate, options);
    res.status(200).json(result);
};

const faker = require('faker');
// exports.seed = async function (req, res) {

//     try {
//         let ids = [];
//         let events = [];

//         for (let i = 0; i < ids.length; i++) {
//             //Create 5 events for each user
//             for (let j = 0; j < 50; j++) {
//                 const newEvent = new Event({
//                     name: faker.lorem.word(),
//                     location: faker.address.streetName(),
//                     address: `${faker.address.streetAddress()} ${faker.address.secondaryAddress()}`,
//                     start_date: faker.date.future(),
//                     description: faker.lorem.text(),
//                     image: faker.image.nightlife(),
//                     userId: ids[i]
//                 });

//                 let event = await newEvent.save();
//                 events.push(event);
//             }
//         }

//         res.status(200).json({ids, events, message: 'Database seeded!'});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }

// };
