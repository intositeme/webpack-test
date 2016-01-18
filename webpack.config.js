module.exports = {
    entry: {
        helloWorld: './assets/main'
    },
    output: {
        filename: 'public/js/[name].js'
    },
    module: {
	    loaders: [
	      {
	        test: /\.scss$/,
	        loaders: ["style", "css", "sass"]
	      }
	    ]
	  }
};
