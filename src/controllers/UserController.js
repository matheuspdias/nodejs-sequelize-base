const User = require('../models/User');

module.exports = {
    ping: (req, res) => {
        res.json({pong: true});
    },
    getUsers: async (req, res) => {   
         const users = await User.findAll();

         res.json({error: '', users})
    }
};