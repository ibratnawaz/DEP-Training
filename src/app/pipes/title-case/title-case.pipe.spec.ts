import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  let pipe: TitleCasePipe;
  beforeEach(() => {
    pipe = new TitleCasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first character of the string', () => {
    const result = pipe.transform('abc');
    expect(result).toEqual('Abc');
  });
});
