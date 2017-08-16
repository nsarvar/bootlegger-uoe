## Vagrant Deployment
We have provided a Vagrant provision script to deploy a fully working bootlegger development environment.

1. Download Vagrant from [https://www.vagrantup.com/downloads.html]
2. Run `vagrant up`
2. [OPTIONAL] Generate Amazon S3 and CloudFront credentials, and if required, Elastic Beanstalk profiles.
3. Generate Google or Facebook OAuth credentials for your app, using http://localhost:1337 as the redirect URL.
4. Once the server has provisioned, edit `config/local.js` with your details, particularly `admin_emails` and either Google or Facebook OAuth credentials.

Visiting http://localhost:1337 will present a running instance of the server.

After editing files too restart the serverr:

Run `vagrant ssh`

`$ pm2 restart app`

If modules are not present, or you have trouble starting the server, running `vagrant provision` usually fixes most things.

*Local files are located in /vagrant*

*node_module directory is hardlinked to and internal VM directory to avoid symlink issues on npm install*