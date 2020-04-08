const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从右往左(从下往上)顺序处理loader
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 8KB以下文件用url-loader转换为base64,8KB以上自动用file-loader
            limit: 8192,
            // 默认32位hash，可以自定义为img目录下，[name]原文件名，[hash:8]8位hash防止重名，[ext]原扩展名
            name: 'img/[name].[hash:8].[ext]'
          }
        }
      }
    ]
  }
}