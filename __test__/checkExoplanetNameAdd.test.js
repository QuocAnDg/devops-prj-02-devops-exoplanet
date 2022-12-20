const { save } = require('../models/Exoplanet');
describe('test add exoplanet', () => {
  it('should return false if uniqueName is not upper', () => {
    expect({ uniqueName: 'TRAPPiST-1-d', hClass: 'Mésoplanète', discoveryYear: 2016 }).toBe(false);
  });
});
