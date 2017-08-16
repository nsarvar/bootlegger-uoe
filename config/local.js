module.exports = {
    port: 1337,
    beta:true,
    hostname:'localhost',
    db_host     : 'localhost',
    db_port     :  27017,
    db_user     : 'root',
    db_password : '',
    admin_email:['sarvar.nishonboyev@gmail.com'],
    SHOOT_LIMIT:4,
    gcmkey:'',
    nexmo:{
      id:'',
      key:''
    },
    db_database : 'bootlegger',
    dropbox_clientid:'dropboxid',
    dropbox_clientsecret:'dropboxsecret',
    google_clientid:'googleid',
    google_clientsecret:'googlesecret',
    CURRENT_SYNCTRAY_KEY:'',
    CURRENT_MOBILE_KEY_IOS:'',
    CURRENT_MOBILE_KEY_PLAY:'',
    CURRENT_EDIT_KEY:'',
    FACEBOOK_APP_ID:'1274852612592650',
    FACEBOOK_APP_SECRET:'485f5e2e2adf4aa22d660539f0a91219',
    multiserver:'http://localhost:9000',
    central_url:'http://localhost:1337',
    master_url:'http://localhost:1337',
    AWS_ACCESS_KEY_ID:'',
    AWS_SECRET_ACCESS_KEY:'',
    S3_BUCKET:'',
    S3_REGION:'eu-west-1',
    S3_URL:'',
    S3_CLOUD_URL:'',
    S3_TRANSCODE_URL:'',
    ELASTIC_PIPELINE:'',
    HOMOG_PRESET:'',
    BEANSTALK_HOST:'beanstalk',
    BEANSTALK_PORT:'11300',
    connections:{
        mongodb: {
          module: 'sails-mongo',
          schema: false,
          host     : 'localhost',
          port     : 27017,
          user     : 'root',
          password : '',
          database : 'bootlegger'
        }
    },
    session:{
      secret: '12341231223123123123',
      adapter: 'redis',
      host: 'localhost',
      port: 6379,
      db: 0,
      ttl:90*24*60*60*1000,
      disableTTL:true,
      cookie: {
         maxAge: 90*24*60*60*1000
      }
    },
    sockets: {
      transports: [
      'websocket'
      // 'htmlfile',
      // 'xhr-polling',
      // 'jsonp-polling'
     ],
      adapter: 'redis',
      host: 'localhost',
      port: 6379,
      authorization: true,
      origins: '*:*',
      heartbeats: true,
      'close timeout': 20,
      'heartbeat timeout': 16,
      'heartbeat interval': 8,
      'polling duration': 20,
      'flash policy port': 10843,
      'destroy buffer size': '10E7',
      'destroy upgrade': true,
      'browser client': true,
      'browser client cache': true,
      'browser client minification': false,
      'browser client etag': false,
      'browser client expires': 315360000,
      'browser client gzip': false,
      'browser client handler': false,
      'match origin protocol': false,
      resource: '/socket.io'
    },
    bootstrapTimeout:5000,
    email:{
        SENDGRID_ID:'',
        SENDGRID_TEMPLATE:''
    }
}
