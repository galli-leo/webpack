module.exports = [
	{
		mode: "production",
		entry: {
			vendor: "./vendor",
			first: "./first",
			second: "./second"
		},
		target: "web",
		output: {
			filename: "[name].js"
		},
		optimization: {
			concatenateModules: false,
			splitChunks: {
				minSize: 1,
				name: "vendor"
			}
		},
		stats: {
			assets: false
		}
	},
	{
		mode: "production",
		entry: {
			vendor: "./vendor",
			first: "./first",
			second: "./second"
		},
		target: "web",
		output: {
			filename: "[name].js"
		},
		optimization: {
			splitChunks: {
				minSize: 1,
				name: "vendor"
			}
		},
		stats: {
			assets: false,
			optimizationBailout: true
		}
	}
];
