const judgeVegetable = function(vegetables, metric) {
  let veg = {
    vegetables: vegetables,
    metric: DataTransferItemList.sort(function(a, b) {
      return b.metric - a.metric;
    }),
    submitter: function(name) {
      vegetables.submitter(name);
    },
    return: submitter
  };
};