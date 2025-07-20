import Cart from '../models/Cart.js';
import ProductPrices from '../models/Prices.js';

//add product to cart
export const addToCart = async (req, res) => {
  try {
    const {recipe_id, title, image_url, source_url, quantity} = req.body;
    const userId = req.userId;
    console.log(userId);

    const priceDoc = await ProductPrices.findOne({ recipe_id });
    if (!priceDoc) {
      return res.status(404).json({ message: 'Price not found' });
    }

    const price = priceDoc.price;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: []
      });
    }
    
    const existingItem = cart.items.find(item => item.recipe_id === recipe_id);

    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.items.push({
        recipe_id,
        title,
        image_url,
        source_url,
        quantity: quantity || 1,
        price
      });
    }

    await cart.save();
    res.json({ message: 'Item added to cart successfully', cart });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


//get cart for user
export const getCart = async (req, res) => {
  const userId = req.userId;
  const cart = await Cart.findOne({ userId });
  if(cart){
  res.json(cart);
  }
  else{
    res.status(404).json({ message: 'Cart not found' });
  }
};


//update quantity 
export const updateCart = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const { quantity } = req.body;
    const userId = req.userId;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find(item => item.recipe_id === recipeId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    item.quantity = quantity;
    await cart.save();

    res.json({ message: 'Cart item updated', cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

//remove product from cart
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const recipeId = req.params.recipeId;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.recipe_id !== recipeId);

    await cart.save();

    res.json({ message: 'Item removed from cart', cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error' });
  }
};

// get cart for one user
export const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart" });
  }
};


//display carts for admins
export const getCartAdmin = async (req, res) => {
  const userId = req.id;
  const cart = await Cart.findOne({ userId });
  console.log("UserID from req:", req.userId);
  res.json(cart);
};