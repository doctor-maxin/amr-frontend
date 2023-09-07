module.exports = {
    apps: [
        {
            name: 'frontend',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: "npm",
            args: 'run start'
        }
    ]
}