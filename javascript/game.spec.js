require('./game.js');
const { execSync } = require('child_process');
const fs = require('fs');


describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
  });
});

describe("Golden Master", function() {
  it("should be", function() {
    execSync('node game.js > result1')
    execSync('node game.js > result2')
    const result1 = fs.readFileSync('./result1', 'utf8');
    const result2 = fs.readFileSync('./result2', 'utf8');
    expect(result1).toBe(result2);
  });
});
