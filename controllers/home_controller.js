module.exports.home=function(req,res){
    // return res.end('<h1>Express is up for Codeial');
    return res.render('home',{
        title:"Home"
    });
}

//module.exports.actionname=function(REQ,RES){};