const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ambesa:Euphoria%40%23_24@cluster0.vzldj9p.mongodb.net/giftlink?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function seedData() {
  try {
    await client.connect();
    const db = client.db('giftlink');
    const collection = db.collection('items');

    const items = [
      { title: "Chair", category: "Furniture", description: "Wooden chair" },
      { title: "Table", category: "Furniture", description: "Dining table" },
      { title: "Sofa", category: "Furniture", description: "Comfortable sofa" },
      { title: "Bed", category: "Furniture", description: "Queen size bed" },

      { title: "Laptop", category: "Electronics", description: "Used laptop" },
      { title: "Phone", category: "Electronics", description: "Smartphone" },
      { title: "TV", category: "Electronics", description: "Flat screen TV" },
      { title: "Headphones", category: "Electronics", description: "Wireless headphones" },

      { title: "Shirt", category: "Clothing", description: "Men shirt" },
      { title: "Dress", category: "Clothing", description: "Women dress" },
      { title: "Jacket", category: "Clothing", description: "Winter jacket" },
      { title: "Shoes", category: "Clothing", description: "Running shoes" },

      { title: "Books", category: "Education", description: "School books" },
      { title: "Notebook", category: "Education", description: "Unused notebook" },
      { title: "Backpack", category: "Education", description: "School bag" },
      { title: "Calculator", category: "Education", description: "Scientific calculator" }
    ];

    const result = await collection.insertMany(items);
    console.log(result); // ✅ This is what you submit
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

seedData();