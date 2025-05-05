// Fetch initial cart items
export const getCartItems = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/cart');
    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

// Update a cart item's quantity
export const updateCartItem = async (id, quantity) => {
  try {
    const response = await fetch(`http://localhost:5000/api/cart/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
      throw new Error('Failed to update cart item');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};