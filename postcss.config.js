const autoprefixer = require('autoprefixer');
module.exports = {
    plugins : [
        autoprefixer({ browsers: ['last 7 versions', '> 1%'] })
    ]
};
