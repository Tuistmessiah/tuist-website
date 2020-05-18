module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'tuist-website',
      script    : 'npx',
      args      : 'serve build -s',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
/*
  deploy : {
    production : {},
    staging: {
      user: 'pedro',
      host: 'localhost',
      ref: 'origin/master',
      repo: 'git@github.com:Tuistmessiah/tuist-website.git',
      path: '/var/www/tuist-website',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {}
  }
*/
};
