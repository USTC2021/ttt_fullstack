// 模块化控制器
const Model = require('../model');
const { Manufacturer } = Model;

const manufacturerController = {
  create(req, res) {
    // request  response 
    // 逻辑
    // Model
    // View 
    const requestBody = req.body; //
    // mongoose Model new  save 
    console.log(requestBody, '-----'); 
    const newManufacturer = new  Manufacturer(requestBody)// 
    newManufacturer.save((err, saved) => {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(saved);
      // select 
      Manufacturer
        .findOne({_id: newManufacturer._id})
        .exec((err, manufacturer) => res.json(manufacturer))
    })

  },
  all(req, res) {
    Manufacturer.find({}).exec((err, manufacturers) => res.json(manufacturers))
  },
  byId(req, res) {
    const idParams = req.params.id;
    Manufacturer.findOne({_id: idParams}).exec((err, manufacturers) => res.json(manufacturers));
  },
  remove(req, res) {
    // url 删除 
    // /manufacturer/:id DEL
    const idParams = req.params.id;
    Manufacturer.findOne({_id: idParams}).exec((err, removed) => res.json(idParams));
  },
  // 修改
  update(req, res) {
    const idParams = req.params.id;
    let Manufacturer = req.body
    Manufacturer.updateOne({_id: idParams}, {
      ...Manufacturer
    }, (err, updated) => {
      res.json(updated)
    })
  }
}
module.exports = manufacturerController;