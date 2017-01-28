describe('test lint rules', () => {
  let tested;
  let promiseTested;
  let testedResult;

  beforeEach(() => {
    testedResult = `tested result ${Math.random()}`;
    tested = sinon.stub().returns(testedResult);
    promiseTested = sinon.stub().returns(Promise.resolve(testedResult));
  });

  it('can run tests using sinon', () => {
    expect(tested).to.be.a('function').and.not.to.have.been.called;
    expect(promiseTested).to.be.a('function').and.not.to.have.been.called;
  });

  it('can use sinon assertions', () => {
    const result = tested();

    expect(result).to.equal(testedResult);
  });

  it('can use sinon assertions with chai as promised', () => expect(promiseTested()).to.eventually.equal(testedResult));
});
