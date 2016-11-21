import path from 'path';

export default {
  entry:'./lib/app.js',
  output:{
    path:path.join(__dirname, 'static'),
    filename:'bundle.js'
  }
}
