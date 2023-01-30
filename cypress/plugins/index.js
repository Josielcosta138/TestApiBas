//const { config } = require("bluebird");
const faker = require('faker');
 
 

module.exports = (on, config) => {

    on("task", {
        freshUser() {
            user = {
                nome: faker.name.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                administrador: "true" 
            };
            return user;
        }
    })
    return config
}   

