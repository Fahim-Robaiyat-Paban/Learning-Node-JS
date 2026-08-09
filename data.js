const productapi = {
  products: [
    {
      id: 1,
      name: "Mechanical Keyboard",
      category: "electronics",
      price: 79.99,
      stock: 24,
      rating: 4.6,
      brand: "KeyForge",
      inStock: true,
      tags: ["keyboard", "gaming", "mechanical"],
    },
    {
      id: 2,
      name: "Leather Backpack",
      category: "fashion",
      price: 64.99,
      stock: 12,
      rating: 4.8,
      brand: "UrbanTrail",
      inStock: true,
      tags: ["bag", "leather", "travel"],
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "footwear",
      price: 89.99,
      stock: 0,
      rating: 4.5,
      brand: "SprintX",
      inStock: false,
      tags: ["shoes", "running", "sports"],
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      category: "electronics",
      price: 49.99,
      stock: 31,
      rating: 4.7,
      brand: "SoundWave",
      inStock: true,
      tags: ["speaker", "bluetooth", "music"],
    },
  ],
};

const peopleapi = {
  people: [
    {
      id: 1,
      name: "Arif Rahman",
      age: 24,
      job: "Software Developer",
    },
    {
      id: 2,
      name: "Nadia Ahmed",
      age: 29,
      job: "Graphic Designer",
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      age: 35,
      job: "Marketing Manager",
    },
    {
      id: 4,
      name: "Sara Khan",
      age: 21,
      job: "University Student",
    },
  ],
};


module.exports = {productapi, peopleapi}