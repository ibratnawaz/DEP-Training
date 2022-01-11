import { CheckActiveUserPipe } from './check-active-user.pipe';

describe('CheckActiveUserPipe', () => {
  let pipe: CheckActiveUserPipe;
  beforeEach(() => {
    pipe = new CheckActiveUserPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return status active', () => {
    const status = pipe.transform(false);
    expect(status).toEqual('Active');
  });

  it('should return status deleted', () => {
    const status = pipe.transform(true);
    expect(status).toEqual('Deleted');
  });
});
