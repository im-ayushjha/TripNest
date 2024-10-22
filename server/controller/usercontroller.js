const User = require("../model/user");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password,phoneNumber } = req.body;
  // console.log(email);
  const emailCheck = await User.findOne({ email });
  if (emailCheck) {
    return res.json({ msg: "email already used", status: false });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    name,
    password: hashedPassword,
    phoneNumber,
  });
  delete user.password;
  return res.json({status:true,user});
  } catch (error) {
    return res.json({status:false});
  }
};

module.exports.login = async (req, res) => {
    console.log(req.body);
    try {
      const { email, password } = req.body;
    // console.log(email);
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ msg: "user not exist", status: false });
    }
    const isvalid = await bcrypt.compare(password,user.password);
    if(!isvalid){
        return res.json({ msg: "Invalid password", status: false });
    }
    
    delete user.password;
    return res.json({status:true,user});
    } catch (error) {
      return res.json({status:false});
    }
  };

  module.exports.fileupload=async (req,res)=>{
      try{
        
      }
      catch{

      }
  }
