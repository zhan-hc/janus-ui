const path = require('path')
const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
 
const distPath = path.resolve(__dirname, '../packages/janus-ui/theme-chalk');
const cssDistPath = path.resolve(__dirname, '../packages/theme-chalk');
src(`${cssDistPath}/src/**/*.scss`) // 指定SASS文件路径
.pipe(sass().on('error', sass.logError)) // 编译SASS
.pipe(dest(distPath)); // 输出CSS文件路径