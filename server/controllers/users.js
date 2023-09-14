import UserSocio from "../models/User.js";

// READ
export const getUser= async (req,res) =>{
    try {
        const { id } = req.params;
        const user = await UserSocio.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserFriends = async (req,res) =>{
    try {   
        const { id } = req.params;
        const user = await UserSocio.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => UserSocio.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
      const { firstName, lastName, location, picturePath } = req.body;
      const { id } = req.params;
      const user = await UserSocio.findByIdAndUpdate(
        id,
        { firstName, lastName, location, picturePath },
        { new: true }
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

// UPDATE 
export const addRemoveFriend = async (req,res) =>{
    try{
        const { id, friendId } = req.params;
        const user = await UserSocio.findById(id);
        const friend = await UserSocio.findById(friendId);

        if(user.friends.includes(friendId)){
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => UserSocio.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        
        res.status(200).json(formattedFriends);
    } catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const searchUsers = async (req, res) => {
    try {
      const { firstName, lastName } = req.query;
      const users = await UserSocio.find({ 
        $or: [
          { firstName: new RegExp(firstName, 'i') },
          { lastName: new RegExp(lastName, 'i') },
        ],
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };