// ✅ دوال مساعدة للتعامل مع السلة

function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));
}

function calculateCartTotals(cart) {
  let subtotal = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;
  });

  return { subtotal, totalItems };
}
