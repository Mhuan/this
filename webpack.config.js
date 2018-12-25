const path=require('path')
const htmp=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
const webpack=require('webpack')

module.exports={
	mode:'none',
	entry:['babel-polyfill','./src/main.js'],
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'app.js'
	},
	plugins:[
		new htmp({
			template:'./index.html'
		}),
		new VueLoaderPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase:'./',
		hot:true
	},
	externals:{
		vue:'Vue'
	},
	module:{
		rules:[
			{
				test:/.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
                test: /\.less$/,
                use:[
                	'style-loader',
                	'css-loader',
                	'less-loader'
                ]
            },
			{
				test:/.(png|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/.less$/,
				use:[
					'style-loader',
					'css-loader',
					'less-loader'

				]
			},
			{
				test:/\.js$/,
				exclude:/(node_modules|bower_components)/,
				use:{
					loader:'babel-loader',
					options:{
						cacheDirectory:true,
						presets:['env'],
						plugins:['transform-runtime']
					}
				}
			},
			{
				test:/.vue$/,
				use:['vue-loader']
			}

		]
	}
}