function vector() {
	var array = [];
	return {
		get: function get(i){
			return array[i];
		},
		store: function store(i,v){
			array[i] = v;
		},
		append: function append(v){
			array.push(v);
		}
	};
}

var stash;
myvector.store('push',function(){
	stash = this;
});
myvector.append();