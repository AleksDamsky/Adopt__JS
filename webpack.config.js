/*Основная настройка webpack*/

const path = require('path');

module.exports = {
    entry : './src/index.js', // это точка входа (основы webpack);

    output : { // это точка выхода, то есть куда webpack будет складывать скооперированные файлы

        filename : 'bundle.js',
        path : path.resolve(__dirname, 'publick'),

    },

    devServer : {  // этот сервер нужен в стадии разработки. Неообходим чтобы перезагружать сервер, на котором работаем.
        port : 3000 
    }
}

/*тут основная настройка закончилась*/