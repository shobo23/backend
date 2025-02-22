const bcrypt = require('bcrypt')


const handleError = (res, error) => {
    return res.status(500).json({status: false, message:"An error occured!", error:error.message || error.message, })
}

// create user and empty blog[]
const CreateUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        if (username || email || password) {
            res.status(400).json({message: "All fields are required"})
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const theUser =  await User
    } catch (error) {
        
    }
}