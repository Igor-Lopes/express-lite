const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("app").server;
const stopServer = require("app").stopServer;
should = chai.should();

chai.use(chaiHttp);

describe("Index Page", () => {
  it("should successfully render index page", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  after(function(done) {
    stopServer();
    done();
  });
});
