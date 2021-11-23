let chai = require("chai");
let chaiHttp = require("chai-http");
let expect = chai.should;

chai.use(chaiHttp);

describe('GET DM', function (){

    it('Testando GET OK', () => {
        chai.request('http://challengeqa.staging.devmuch.io/')
            .get('/10')
            .end((err, res) => {
                res.should.have.body.extenso("dez");
            });
    });

    it('Testando GET OK - English', () => {
        chai.request('http://challengeqa.staging.devmuch.io/')
            .get('/en/10')
            .end((err, res) => {
                res.should.have.body.full("ten");
            });
    });

    it('Testando GET BAD REQUEST', () => {
        chai.request('http://challengeqa.staging.devmuch.io/')
            .get('/10001')
            .end((err, res) => {
                err.should.have.body.extenso("Invalid data");
            });
    });
});
