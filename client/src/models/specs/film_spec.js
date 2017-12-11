var Film = require('../film');
var assert = require('assert');

describe('Film', function () {
  var film;

  beforeEach(function () {
    film = new Film({
      title: "Titanic",
      actors: ["Leo DiCaprio"]
    });
  });

  it('should have title titanic', function () {
    assert.equal(film.title, "Titanic");
  });

  it('should have actors', function () {
    assert.strictEqual(film.actors.length, 1);
  });

})
