const cooks = new Map();
const dishes = new Map();
const orders = new Map();
const client1Order = new Set();
const client2Order = new Set();
const client3Order = new Set();

const client1 = {
  name: "Alexey",
};
const client2 = {
  name: "Mariya",
};

const client3 = {
  name: "Irina",
};

cooks.set("Виктор", "Пицца");
cooks.set("Ольга", "Суши");
cooks.set("Дмитрий", "Десерты");

dishes.set('Пицца "Маргарита"', "Виктор");
dishes.set('Пицца "Пепперони"', "Виктор");
dishes.set('Суши "Филадельфия"', "Ольга");
dishes.set('Суши "Калифорния"', "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

client1Order.add('Пиццу "Пепперони"');
client1Order.add("Тирамису");
client2Order.add('Суши "Калифорния"');
client2Order.add('Пиццу "Маргарита"');
client3Order.add("Чизкейк");

orders.set(client1, client1Order);
orders.set(client2, client2Order);
orders.set(client3, client3Order);

console.log(`Клиент ${client1.name} заказал: ${[...orders.get(client1)]}`);
console.log(`Клиент ${client2.name} заказала: ${[...orders.get(client2)]}`);
console.log(`Клиент ${client3.name} заказала: ${[...orders.get(client3)]}`);
