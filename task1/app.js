;
(function(g) {

	var _input,
		_placeholder,
		_arr = [];

	var Elements = function() {

		if(Elements.prototype._instance === this) {
			return Elements.prototype._instance;
		}

		Elements.prototype._instance = this;

		this.input = function() {
			return document.getElementById('input');
		}

		this.placeholder = function() {
			return document.getElementById('placeholder');
		}
	};

	var isUnique = function(value) {
		return _arr.indexOf(value) === -1;
	};
	
	g.onload = function() { 
		var _elements = new Elements();

		_input = _elements.input();
		_placeholder = _elements.placeholder();
	}

	g.submit = function() {
		var _v = _input.value;
		if(_v !== '') {
			if(isUnique(_v)) {
				_arr.push(_v);
			}
		}

		_placeholder.innerHTML = _arr.sort().join(', ');
		_input.value = '';
	}

})(window);
