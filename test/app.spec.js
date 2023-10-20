// server.spec.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require("../src/app");
const expect= chai.expect;
chai.use(chaiHttp)

describe('HEX to RGB API', () => {
  it('should convert a valid HEX color to RGB', (done) => {
      chai.request(app)
          .get('/hex-to-rgb/FF5733')
          .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.have.property('hex').to.equal('FF5733');
              expect(res.body).to.have.property('rgb').to.deep.equal({ r: 255, g: 87, b: 51 });
              done();
          });
  });

  it('should handle an invalid HEX color', (done) => {
      chai.request(app)
          .get('/hex-to-rgb/invalid')
          .end((err, res) => {
              expect(res).to.have.status(400);
              expect(res.body).to.have.property('error').to.equal('Invalid HEX color code');
              done();
          });
  });
});