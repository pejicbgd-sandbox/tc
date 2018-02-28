class Sort {

  sortItems(e, items) {
    var itemList = items,
    target = e.target.dataset['name'];

    var compare = function (a, b) {
      if (a[target] < b[target]) {
        return -1;
      }
      if (a[target] > b[target]) {
        return 1;
      }
      return 0;
    };

    if (itemList.length) {
      itemList.sort(compare);
    }

    return itemList;
  }
}

export default Sort;