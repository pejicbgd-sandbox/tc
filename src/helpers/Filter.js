class Filter {

    filter(e, init) {
        var updatedItems = init;

        updatedItems = updatedItems.filter(function (item) {
            var target;
            if (item[e.target.name]) {
                target = item[e.target.name] + '';
                return target.toLowerCase().indexOf(e.target.value) !== -1;
            }
        });

        return updatedItems;
    }
}

export default Filter;