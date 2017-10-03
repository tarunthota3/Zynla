module.exports = (function() {
  let neo4j = require('neo4j-driver').v1;
  let driver = neo4j.driver('bolt://52.14.238.159', neo4j.auth.basic('neo4j', '9455338161'));
  return driver;
}());
