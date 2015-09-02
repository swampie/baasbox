module.exports = {
   entry: "./app/app.js",
   output: {
      filename: "bundle/app.js"
   },
   module:{
      loaders:[	
	      {
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loader:'babel'      
	      }
      ]
   }
};