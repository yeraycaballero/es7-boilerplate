const gulp = require(`gulp`);
const sourcemaps = require(`gulp-sourcemaps`);
const babel = require(`gulp-babel`);
const nodemon = require(`gulp-nodemon`);

const src = `src/**/*.js`;
const dest = `dist`;

gulp.task(`watch`, () => {
  gulp.watch([src, [`build`]]);
});

gulp.task(`build`, () => {
  return gulp.src(src)
  .pipe(sourcemaps.init())
	.pipe(
    babel({
      presets: [`es2015-node5`],
      plugins: [`transform-async-to-generator`],
    })
  )
	.pipe(sourcemaps.write(`.`))
	.pipe(gulp.dest(dest));
});

// Complete every task before starting nodemon
gulp.task(
  `develop`,
  [
    `build`,
    `watch`,
  ],
  () => {
    nodemon({ script: 'dist/index.js' })
    .on('restart', () => {
      console.log('restarted!');
    });
  }
);

gulp.task(`default`, [
  `build`,
  `watch`,
  `develop`,
]);
