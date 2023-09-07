module.exports = {
    apps: [
        {
            name: 'frontend',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        }
    ],
    deploy : {
        production: {
            "user" : "avtorm_ru_usr55",
            "host" : ["109.195.74.198"],
            "ref"  : "origin/master",
            "repo" : "git@github.com:Username/repository.git",
            "path" : "/var/www/avtorm_ru_usr55/data/www/front",
            "post-deploy" : "npm install"
        }
    }
}