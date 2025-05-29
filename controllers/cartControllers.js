// add product to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findbyId(userId);
    console.log(userData);
    
    
  } catch (error) {}
};

// update user cart
const updateCart = async (req, res) => {};

// get user cart data
const getUserCart = async (req, res) => {};

export { addToCart, updateCart, getUserCart };
