// Fetch initial cart items
export async function getCartItems() {
  const response = await fetch('http://localhost:3000/api/cart', { // Change URL/port if needed
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch cart items');
  }
  return response.json();
}

// Update a cart item's quantity
export async function updateCartItem(id, quantity) {
  const response = await fetch(`http://localhost:3000/api/cart/${id}`, { // Adjust URL/port as necessary
    method: 'PATCH', // or PUT, depending on your API design
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity })
  });
  if (!response.ok) {
    throw new Error('Failed to update cart item');
  }
  return response.json();
}