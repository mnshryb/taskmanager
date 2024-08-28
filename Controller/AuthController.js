const bcrypt = require('bcrypt');


const signup = async (req,res) => {
  try {
    const{name, email, password} = req.body;
    const user = await UserModel.findone({ email });
    if(user){
        return res.status (409)
            .json({message: "User already exist, you can login", sucess: false});

    }
    const UserModel = new UserModel({name, email, password});
    UserModel.password = await bycrypt.hash(password, 10);
    await UserModel.save();
    res.status(201)
        .json({
            message: "Signup successfull", success: true
        })
  } catch (error) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
  }
}
module.exports = {
 signup
}