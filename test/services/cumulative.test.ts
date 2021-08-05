import app from '../../src/app';

describe('\'cumulative\' service', () => {
  it('registered the service', () => {
    const service = app.service('cumulative');
    expect(service).toBeTruthy();
  });
});
