const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Profile = require('../../models/profile');

module.exports = {
  create,
  login,
  checkToken
};

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const profile = await Profile.create({ user: user._id, name: user.name });
    const updatedUser = await User.findOneAndUpdate({_id: user._id}, {profile: profile._id}, {new: true})
    const token = createJWT(updatedUser);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const profile = await Profile.findOne({ user: user._id })
    if (!profile) {
      let pro = await Profile.create({ user: user._id, name: user.name });
      const updatedUser = await User.findOneAndUpdate({_id: user._id}, {profile: pro._id}, {new: true})
      console.log(updatedUser);
    } else {
      const updatedUser = await User.findOneAndUpdate({_id: user._id}, {profile: profile._id}, {new: true})
    }
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    console.log(err)
    res.status(400).json('Bad Credentials');
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}