var mongoose = require('mongoose');

var user = mongoose.model('user');
module.exports={
  show:function(req, res){      user.find({name: req.body.name}).then( user => {
                if(user){
                    console.log("found user")
                    res.status(500).json("found user")
                } else {
                    console.log("in controller else")
                    let newUser = new User(req.body)
                    newUser.save()
                        .then(() => {
                            req.session.name = newUser.name;
                            res.json(true)
                        });
                }
  })
        .catch(err=>res.status(500).json(err))
    
  },
add : 
function(req, res){  
    let add=new user({name: req.session.name, title: req.body.title, description: req.body.description});
    console.log("name"+req.session.name);
    console.log("Added"+add);
    add.save().then(res.json(true)).catch(err=>res.status(500).json(err));

    
  },
  showLists:
  function(req,res){
      user.find({name:req.session.name})
     .then(data=>res.json(data));

  }
}
