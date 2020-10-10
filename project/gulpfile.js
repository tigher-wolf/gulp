
//组从commonJS规范，引入插件
var gulp = require("gulp");
const connect = require("gulp-connect");  //服务器
const concat = require("gulp-concat");    //合并
const rename = require("gulp-rename");    //重命名
const sass = require("gulp-sass");        //scss方法的css
const minifyCss = require("gulp-minify-css"); //压缩css文件
const htmlmin = require("gulp-htmlmin");  //压缩html文件
const uglify = require("gulp-uglify")     //压缩js文件

//拷贝html文件
gulp.task("copy-html",function(){
    return gulp.src("**.html")
    .pipe(gulp.dest("items/"))
    .pipe(connect.reload());

})

//拷贝图片
gulp.task("img",function(){
    return gulp.src("./img/**.{jpg,png}")
    .pipe(gulp.dest("items/img"))
    .pipe(connect.reload());

})

//拷贝json数据
gulp.task("data",function(){
    return gulp.src("./json/*json")
    .pipe(gulp.dest("items/json"))
    .pipe(connect.reload());

})

//拷贝js文件
gulp.task("scripts",function(){
    return gulp.src("./js/*.js")
    .pipe(gulp.dest("items/js"))
    .pipe(connect.reload());

})

//一次性执行多个任务
gulp.task("build",["copy-html","img","data","scripts","sass"],function(){
    console.log("搭建成功")
})

//引入sass,并且压缩css文件
gulp.task("sass",function(){
    return gulp.src(["./scss/*.scss","!_mixin.scss","!_reset.scss"])
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("items/css"))
    // .pipe(minifyCss())
    // .pipe(rename("index.min.css"))
    // .pipe(gulp.dest("items/css"))
    .pipe(connect.reload());

})

//js文件压缩  gulp-uglify
// gulp.task("uglify",function(){
//     return gulp.src('./js*.js')
//     .pipe(concat("index.js"))    //合并后的文件名
//     .pipe(gulp.dest('items/js'))
//     .pipe(uglify())              //压缩
//     .pipe(gulp.dest("items/js"))
// })

//监听器
gulp.task("watch",function(){
    gulp.watch("**.html",['copy-html']);
    gulp.watch("./img/**.{jpg,png}",["img"]);
    gulp.watch("./json/*.json",["data"]);
    gulp.watch("./js/*.js",["scripts"]);
    gulp.watch(["./scss/*.scss","!_mixin.scss","!_reset.scss"],['sass']);
})

//创建服务器
gulp.task("server",function(){
    connect.server({
        root:'items',
        livereload:true,
        port:8888
    })
})

//同时启动服务器和监听器
gulp.task("default",['watch','server'])