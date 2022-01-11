import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  let pipe: FullNamePipe;
  beforeEach(() => {
    pipe = new FullNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return concatenated string', () => {
    const fullName = pipe.transform('John', 'Doe');
    expect(fullName).toBe('John Doe');
  });
});
