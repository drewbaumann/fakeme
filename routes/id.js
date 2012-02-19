
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
  var description = Faker.Occupation.stupidOccupation();
  res.render('id', { title: 'Rule 15', first_name: first_name, last_name: last_name, city: city, state: state, company: company, description: description })
};