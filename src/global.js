var globalData = {
  set (key, value) {
    this[key] = value;
    if (typeof this[key + 'Listen'] === 'function') {
    	this[key + 'Listen']();
    }
  },
  get (key) {
  	return this.key;
  },
  addListen (key, cb) {
  	this[key + 'Listen'] = cb;
  }
};

export default globalData;

