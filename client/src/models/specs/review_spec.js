var Review = require("../review");
var assert = require('assert');

describe("Review", function() {
  var review;

  beforeEach(function() {
    titanicReview = new Review({
      comment: "It sunk, who knew?",
      rating: 6,
      author: "John"
    });
  });

  it("should contain a comment", function() {
    assert.strictEqual(titanicReview.comment, "It sunk, who knew?");
  });

  it("should have a numerical rating", function() {
    assert.strictEqual(titanicReview.rating, 6);
  });

  it("should have an author", function() {
    assert.strictEqual(titanicReview.author, "John");
  });

});
