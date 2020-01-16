import { Libro } from './libro.entity';

describe('Libro', () => {
  it('should be defined', () => {
    expect(new Libro()).toBeDefined();
  });
});
