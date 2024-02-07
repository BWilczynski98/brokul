import { v4 as uuidv4 } from "uuid";
import { fakerPL as faker } from "@faker-js/faker";

function generateRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

const generateRandomQuantity = (): number => Math.floor(Math.random() * 15) + 1;

const DUMMY_ORDERS = Array.from({ length: 15 }, () => ({
  id: uuidv4(),
  date: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 1, 7))
    .toISOString()
    .split("T")[0],
  quantity: generateRandomQuantity(),
  client: {
    id: uuidv4(),
    name: faker.company.name(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    street: faker.location.street(),
    buildingNumber: faker.location.buildingNumber(),
  },
  products: [
    {
      id: "kurczak-1",
      name: "Kurczak w sosie słodko-kwaśnym",
      price: 14.99,
      quantity: generateRandomQuantity(),
    },
    {
      id: "tarta-1",
      name: "Tarta z serem i brokułem",
      price: 8.99,
      quantity: generateRandomQuantity(),
    },
  ],
}));

export { DUMMY_ORDERS };
