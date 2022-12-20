const exoplanetsTable = [
  { uniqueName: 'TRAPPIST-1-d', hClass: 'Mésoplanète', discoveryYear: 2016 },
  { uniqueName: 'KOI-1686.01', hClass: 'Mésoplanète', discoveryYear: 2011 },
  { uniqueName: 'LHS 1723 b', hClass: 'Mésoplanète', discoveryYear: 2017 },
];

module.exports.list = () => exoplanetsTable;

module.exports.save = (data) => {
  /*
   * uppercase made by Duong Quoc An
   * special characters made by Yi Nghi Ke Man
   *  regex idea by Nguyen Trong
   */
  const match = data.uniqueName.match('^[A-Z 0-9.-]*$');
  if (match !== null) {
    exoplanetsTable.push(data);
    return true;
  }
  return false;
};

module.exports.search = (uniqueName) => {
  const exoplanetList = [];
  for (let exoplanet of exoplanetsTable) {
    if (
      exoplanet.uniqueName.toUpperCase().startsWith(uniqueName.toUpperCase())
    ) {
      console.log('found ' + JSON.stringify(exoplanet));
      exoplanetList.push(exoplanet);
    }
  }
  return exoplanetList;
};
