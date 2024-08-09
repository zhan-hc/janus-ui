const path = require('path')
const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
 
const distFolder = path.resolve(__dirname, 'dist')

src('src/**/*.scss') // 指定SASS文件路径
.pipe(sass().on('error', sass.logError)) // 编译SASS
.pipe(dest(distFolder)); // 输出CSS文件路径