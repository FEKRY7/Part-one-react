const User = require('./../models/Users.js')
const HTTP = require('./../folderS,F,E/S,F,E.JS')
const httperespons = require('./../utilites/httperespons.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const CreateToken = require('./../Maddewares/CreatToken.js')
const { validationResult } = require('express-validator')

const AllUser = async(req,res)=>{
    try{ 
        const getuser = await User.find({},{'__v':false})
        if(!getuser){
            httperespons.First(res,[],200,HTTP.FAIL)
        }else{
            httperespons.Second(res,getuser,200,HTTP.SUCCESS)
        }
    }catch(err){
        console.log(err);
        httperespons.Third(res,['Error in alluser:'],404,HTTP.ERROR) 
    }
    res.end()
}

const GetUser = async(req,res)=>{
try{ 
    const pid = req.params.GM
    const getuser = await User.findById(pid)
    if(!getuser){
        httperespons.First(res,[],200,HTTP.FAIL)
    }else{
        httperespons.Second(res,getuser,200,HTTP.SUCCESS)
    }
}catch(err){
    console.log(err);
    httperespons.Third(res,['Error in alluser:'],404,HTTP.ERROR) 
}
res.end()
}

const Regster = async(req,res)=>{
try{
    const creatTobk = req.body 
    const err = validationResult(req)
    if(err.errors.length == 0){
        const datasame = await User.find({email:creatTobk.email})
        if(datasame.length !== 0){
             httperespons.First(res, ['Email is already registered'], 200, HTTP.FAIL)
        }else{ 
            const hash = await bcrypt.hash(creatTobk.password,5)
            const postCreat = await User.create({
                username:creatTobk.username,
                email:creatTobk.email,
                password:hash,
                type:creatTobk.type,
            }) 
            httperespons.Second(res, [postCreat], 200, HTTP.SUCCESS)
        }
    }else{
        httperespons.First(res, [err.errors], 200, HTTP.FAIL)
    }
}catch(error){
    console.error(error);
    httperespons.Third(res, ['Internal Server Error'], 404, HTTP.ERROR)
}
res.end()
}
 
const login = async (req, res) => {
    try { 
      let userdata = await req.body;
      let user = await User.find({ email: userdata.email });
      if(user.length == 1) {
        let PassowrdCheck = await bcrypt.compare(
          userdata.password,
          user[0].password
        );
        if(PassowrdCheck) {
            const token = CreateToken(user[0].username, user[0].email, user[0].type);
          httperespons.Second(res,['Login successful',{ token, type: user[0].type , username: user[0].username, email: user[0].email,id: user[0]._id}], 200, HTTP.SUCCESS)
        } else {
            httperespons.First(res,['Incorrect password'],200,HTTP.FAIL)
        }
      } else {
        httperespons.First(res, ['Email is not registered'], 200, HTTP.FAIL)
      }
    } catch (error) {
        console.error(error);
        httperespons.Third(res,['Internal Server Error'],404,HTTP.ERROR)
   }
};  


module.exports = {
    AllUser,
    GetUser,
    Regster,
    login,
}