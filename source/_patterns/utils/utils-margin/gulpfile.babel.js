import gulp from 'gulp';
import postcss from 'gulp-postcss';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import connect from 'gulp-connect';
import ava from 'gulp-ava';
import mochaPhantomJS from 'gulp-mocha-phantomjs';
import plumber from 'gulp-plumber';

const processors = [
  require('postcss-import'),
  require('postcss-url'),
  require('postcss-custom-properties'),
  require('postcss-calc'),
  require('postcss-color-function'),
  require('postcss-custom-media'),
  require('postcss-pseudoelements'),
  require('autoprefixer'),
];

gulp.task('build:css', () => {
  gulp.src('lib/index.css')
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('lint:css', () => gulp.src('lib/index.css')
  .pipe(plumber())
  .pipe(stylelint(
    {
      reporters: [
        {
          formatter: 'string',
          console: true,
        },
      ],
    }
  )
));

gulp.task('lint:js', () => gulp.src(['lib/index.js', 'gulpfile.js'])
  .pipe(plumber())
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('start', () => {
  connect.server({
    root: 'build',
    livereload: true,
  });
});

gulp.task('test:unit', () =>
  gulp.src('test/unit/unit.js')
    .pipe(ava())
);

gulp.task('test:browser', () =>
  gulp.src('test/behavior/behavior.html')
    .pipe(mochaPhantomJS())
);

// bundlejs

import sourcemaps from 'gulp-sourcemaps';
import exit from 'gulp-exit';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babel from 'babelify';

function compileJS(flag) {
  const bundler = watchify(browserify('./lib/index.js', { debug: true }).transform(babel));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', (err) => {
        console.error(err);
        this.emit('end');
      })
      .pipe(plumber())
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
      // .pipe(exit()); // REVIEW
  }

  if (flag) {
    bundler.on('update', () => {
      console.log('-> bundling...');
      rebundle();
    });

    rebundle();
  } else {
    rebundle().pipe(exit()); // REVIEW
  }
}

gulp.task('build:js', () => compileJS());
gulp.task('watch:js', () => compileJS(true));

import rename from 'gulp-rename';

gulp.task('build:test', () => {
  gulp.src('test/visual/visual.html')
    .pipe(plumber())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());

  gulp.src('test/visual/visual.css')
    .pipe(plumber())
    .pipe(rename('test.css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

/*
 * Watch task
 */

gulp.task('watch:css', () => {
  gulp.watch([
    'lib/**/*.css',
  ], ['build:css']);
});

gulp.task('watch:test', () => {
  gulp.watch([
    'test/visual/**/*.*',
  ], ['build:test']);
});

gulp.task('default', [
  'watch:css',
  'watch:js',
  'watch:test',
  'start',
]);
