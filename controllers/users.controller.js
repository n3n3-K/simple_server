const { createUser, getAllUsers, getUserByEmail, updateUser, deleteUser, updateUser } = require("../services/user.services")

const userSignup= async(res, req)=>{
    
    try{
        const userData= req.body
        const userExists= await getUserByEmail(userData.email)
        if (userExists){
            return res.status(400).json({
                message:' User Already Exists'
            });
        }
        if (userData.password.length< 6){
            return res.status(400).json({
                message: ' password must be atleast 6 characters';
            });
        }
    
        const user= await createUser(userData)
            res.status(201).json({
                message: 'user created successfully';
                user
            });
        }
        catch(error){
          return res.status(500).json({
             error:error.message
        });
    }
}


const signIn = async (req, res) => {
    try {
        const { email, password } = req.body 

        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }

        if (password !== user.password) {
            return res.status(400).json({ 
                message: 'Invalid password or Incorrect password' 
            });
        }

        const token = jwt.sign({ email: user.email, id: user._id },  'your_jwt_secret', { expiresIn: '10d' })

        res.status(200).json({ 
            message: 'User logged in successfully', 
            token 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const signOut = async (req, res) => {
    try {
        res.status(200).json({ 
            message: 'User logged out successfully' 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body 

        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }


        res.status(200).json({
            message: 'Password reset link sent successfully'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const resetPassword = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body 

        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }

        if (password.length < 6) {
            return res.status(400).json({ 
                message: 'Password must be at least 6 characters' 
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ 
                message: 'Passwords do not match' 
            });
        }

        if (password === user.password) {
            return res.status(400).json({ 
                message: 'New password must be different from the old password' 
            });
        }
        user.password = password
        await user.save()
        res.status(200).json({
            message: 'Password reset successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body 

        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ 
                message: 'Password must be at least 6 characters' 
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ 
                message: 'Passwords do not match' 
            });
        }
        if (newPassword === user.password) {
            return res.status(400).json({ 
                message: 'New password must be different from the old password' 
            });
        }

        user.password = newPassword
        await user.save()
        res.status(200).json({
            message: 'Password changed successfully'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createUserController = async (req, res) => {
    try {
        const userData = req.body 
        const user = await createUser(userData)

        res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const userName = async (res,req) =>{
    try {
      const userData = await User.findById(userName);
      if (!user) {
        return res.status(400).json({
        message:'User not found',
        });
      }
  
      const usernameExists = await User.findOne({ username: newUsername });
      if (usernameExists) {
        return res.status(400).json({
        message:'Username already exists',
    });
      }
  
      const user= await newUsername()
          return res.status(200).json({
              message: 'user created successfully',
          });
  
      }
      
      catch (error) {
          res.status(500).json({
              error:message.error
          });
      
    }
  }


const phone_number=async(req,res) =>{
    try {
   const userData = await User.findone(phone_number);
   if (!phone_number) {
     return res.status(400).json({
     message:'User not found',
   });
   }

   const phoneExists = await User.findOne(phone_number);
   if (phoneExists) {
     return res.status(400).json({
     message:'Phone number already in use',
   });
   }
   const phone_number= await create.phone_number()
       return res.status(200).json({
   message:'phone number created successfully',
   user
   });

 } 
 catch (error) {
   return {  message: error.message };
 }
}



module.exports = {
    signUp,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    changePassword,
    createUserController
} 