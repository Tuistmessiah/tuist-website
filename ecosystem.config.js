module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'tuist-website',
      script    : 'npm',
      args      : 'run start:production',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {},
    staging: {
      user: 'pedro',
      host: 'localhost',
      ref: 'origin/master',
      repo: 'https://github.com/Tuistmessiah/tuist-website',
      path: '/var/www/tuist-website',
      key: '/absolute/path/to/key',
      ssh_options: ['ForwardAgent=yes'],
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {}
  }
};
