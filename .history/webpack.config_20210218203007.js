module.exports ={
    entry: ['./src/main.js',
    ],
    output : {
        filenamebuild.js'
    },
    module: {
        rules:[
            {
                test: '/\.js$/',
                use:{
                    loader:"babel-loader",
                }
            }
        ]
    }
}