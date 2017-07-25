
var user=require('../controllers/user.js')
module.exports=function(app){
    app.get('/dashboard', function(req,res){
        console.log("getting user");
       // req.session.name=req.body.user.name;
        console.log(req.body.user.name);
user.show(req,res);
}),
app.post('/dashboard',function(req,res){
user.add(req,res);
})
app.get('/lists',function(req,res){
    user.showLists(req,res);
})
// app.get('/otter/new', function(req,res){
//  res.render('addOtter');

// });
// app.post('/otters',function(req,res){
//     console.log(req.body);
//     otters.add(req,res);
// });

// app.get('/otter/:id', function(req,res){
//    otters.search(req,res);
   
// });

// app.get('/otters/edit/:id',function(req,res){
//     res.render("edit");

//     });
// app.post('/otters/:id',function(req,res){
//     console.log(req.params.id);
//     otters.updateOtter(req,res);

// });

// app.post('/otters/destroy/:id', function(req,res)
// {
//     otters.removeOtter(req,res);

// });
app.all('*', (req,res,next) => {
        console.log("in root route.js")
        res.sendfile(path.resolve("./client/dist/index.html"))
    })

}