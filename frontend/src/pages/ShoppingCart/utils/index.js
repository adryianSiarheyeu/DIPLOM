export const isAlreadyAdded = (itemsList, currentItemId) => {
  return !!itemsList.find((item) => item.id === currentItemId);
};

export const calculateCartItemPrice = (quantity, price) => {
  console.log(quantity);
  return (+quantity * +price).toFixed(2);
};

export const calculateTotalPrice = (itemsList) =>
  itemsList.reduce((accumulator, item) => accumulator + item.price, 0);
