module.exports ={
    entry: ['./src/main.js',
    ],
    output : {
        filename:'build.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader:"babel"
                }
            }
        ]
    }
}