const { save } = require('../models/Exoplanet');
describe('test add exoplanet', () => {
  it('should return false if uniqueName is not upper', () => {
    expect(
      save({
        uniqueName: 'TRAPPiST-1-d',
        hClass: 'Mésoplanète',
        discoveryYear: 2016,
      })
    ).toBe(false);
  });
  it('should return true if uniqueName is upper', () => {
    expect(
      save({
        uniqueName: 'TRAPPIST-01',
        hClass: 'Mésoplanète',
        discoveryYear: 2016,
      })
    ).toBe(true);
  });
});
