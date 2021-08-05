import app from '../../src/app';

describe('\'charts\' service', () => {
  it('registered the service', () => {
    const service = app.service('charts');
    expect(service).toBeTruthy();
  });
});
