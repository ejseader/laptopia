const seedLaptop = require('./seed')
const db = require('../config/connection')
const seedAll = async () => {
    await db.sync({ force: true });
    await seedLaptop();
    // for additional seeds, add functions here
    console.log('Database seeded')
    process.exit(0)
}
seedAll();