
/*
 * GET fake ID.
 */

exports.id = function(req, res){
  console.log("FUUUUUUUUCK");
  var Faker = require('Faker');
  var first_name = Faker.Name.maleFirstName();
  var last_name = Faker.Name.lastName();
  var city = Faker.Address.city();
  var state = Faker.Address.usState();
  var company = Faker.Company.companyName();
  res.render('id', { title: 'The Fake me', first_name: first_name, last_name: last_name, city: city, state: state, company: company  })
};