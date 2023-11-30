module.exports.profile=function(req,res){
    // res.end('<h1>User Profile</h1>')
    return res.render('user_profile',{
        title:"Profile"
    });
}

module.exports.signup=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}

module.exports.signin=function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}