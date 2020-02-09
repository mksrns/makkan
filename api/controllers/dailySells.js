const DailySell = require('../models/dailySell');

exports.dailySells_get_all = (req, res, next) => {
    DailySell.find(function(err, result){
        if(err){
            res.status(500).json({error: err});
        } else {
            if(result.length >= 1){
                res.status(200).json({
                    count: result.length,
                    dailySell: result
                });
            } else {
                res.status(404).json({
                    message: 'No Entries found'
                });
            }            
        }
    });
}

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