export const withdraw = (clients, balances, client, amount) => {
  let clientIndex = clients.indexOf(client);
  let result = balances[clientIndex] - amount;
  if (result < 0) {
    return -1;
  }
  return result;
};
