const seedLaptop = require('./seed')
const seedUser = require('./users')
const db = require('../db/connection')

const seedAll = async () => {
    await db.sync({ force: true });
    await seedLaptop();
    await seedUser();
    // for additional seeds, add functions here
    console.log('Database seeded')
    process.exit(0)
}
seedAll();