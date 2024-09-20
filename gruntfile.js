module.exports = function
(grunt) {
 grunt.initConfig({
 pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
        // Opções do UglifyJS aqui
         },
         target: {
            files: {
            'dev/script/script.js': 'src/script/*.js'
            }
        }
    },
            

    less: {
        development: {
            files: {
                // arquivo de destino e arquivo de origem
                'dev/styles/main.css': 'src/styles/*.less'
            }
        },

        // fazer o ambiente de produção (internet)
        production: {
            options: {
                compress: true,
            },
            files: {
                // arquivo de destino e arquivo de origem
                'dist/styles/main.min.css': 'src/styles/*.less'
            }
        }
    }
});
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');


grunt.registerTask('default', ['less:development', 'uglify']);
}
