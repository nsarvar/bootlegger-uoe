define({ "api": [
  {
    "type": "get",
    "url": "/api/auth/anon",
    "title": "Local Instance Anonymous Login",
    "name": "anon",
    "group": "Authentication",
    "version": "0.0.2",
    "description": "<p>This endpoint will only work when the server is <em>NOT</em> running in production mode - and is intended for local installations / testing.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Should return 'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/auth/anon"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/auth/login",
    "title": "Display Login Screen",
    "description": "<p>Open this link in a browser which redirects to OAuth authentication. When complete, you will either be redirected back to an endpoint the have provided, with the session as a GET paramter, or to bootlegger://success?<sessionid>.</p>",
    "name": "login",
    "group": "Authentication",
    "version": "0.0.2",
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/auth/login"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/auth/logout",
    "title": "Logout of API",
    "name": "logout",
    "group": "Authentication",
    "version": "0.0.2",
    "description": "<p>Logout current user out of the Bootlegger API. Resets all session data.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Should return 'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/auth/logout"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/commission/getseedtemplate/:id",
    "title": "Get Specific Seed Template",
    "name": "getseedtemplate",
    "group": "Commission",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Returns list of templates (own, public and community) to use as starting points for template design.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/CommissionController.js",
    "groupTitle": "Commission",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/commission/getseedtemplate/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/commission/shots",
    "title": "Get Shot Library",
    "name": "getshots",
    "group": "Commission",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Should return library of shots</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/CommissionController.js",
    "groupTitle": "Commission",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/commission/shots"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/commission/gettemplate/:id",
    "title": "Get Template Info",
    "description": "<p>Returns the commissioning template for the given shoot.</p>",
    "name": "gettemplate",
    "group": "Commission",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Should return template</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/CommissionController.js",
    "groupTitle": "Commission",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/commission/gettemplate/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/commission/seedtemplates",
    "title": "Get List of Seed Templates",
    "name": "seedtemplates",
    "group": "Commission",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Returns list of templates (own, public and community) to use as starting points for template design.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/CommissionController.js",
    "groupTitle": "Commission",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/commission/seedtemplates"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/commission/update/:id",
    "title": "Update Template",
    "name": "updatetemplate",
    "group": "Commission",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eventtype",
            "description": "<p>Shoot template</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Should return 'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/CommissionController.js",
    "groupTitle": "Commission",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/commission/update/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/commission/updateshots/:id",
    "title": "Update Shot Requests",
    "description": "<p>Update shoot shot requirements and notify all currently connected contributors of the changes.</p>",
    "name": "updatetemplate_live",
    "group": "Commission",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "shots",
            "description": "<p>New Shot List</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'Shoot Updated'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/CommissionController.js",
    "groupTitle": "Commission",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/commission/updateshots/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/media/create",
    "title": "Create Media",
    "description": "<p>Create a new item of media, and return the id to use for uploads and updates.</p>",
    "name": "createmedia",
    "group": "Media",
    "version": "0.0.2",
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/create"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/media/shoot/:id",
    "title": "List Shoot Media",
    "description": "<p>List all the media from a given shoot</p>",
    "name": "eventmedia",
    "group": "Media",
    "version": "0.0.2",
    "permission": [
      {
        "name": "viewonly",
        "title": "Admin or Participation",
        "description": "<p>You either need to be an admin, or to have contributed (and the admin allow viewing) to get this information.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>List of media</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/shoot/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/media/full/:id",
    "title": "Full video for media",
    "description": "<p>Get full video for specific media</p>",
    "name": "full",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of media</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/full/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/media/homog/:id",
    "title": "Transcoded video for media",
    "description": "<p>Get homogeonized and transcoded video for specific media</p>",
    "name": "homog",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of media</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/homog/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/media/preview/:id",
    "title": "Preview video for media",
    "description": "<p>Get preview video for media</p>",
    "name": "preview",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of media</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/preview/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/media/remove/:id",
    "title": "Remove Media",
    "description": "<p>Indicate media has been removed by the user</p>",
    "name": "removemedia",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Media ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ok",
            "description": ""
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/remove/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/media/uploadcomplete/:id",
    "title": "Notify on Upload",
    "description": "<p>Notify the API that the upload has completed (and that transcoding can begin)</p>",
    "name": "s3notify",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of media that is now uploaded</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Filename of file that was uploaded</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/uploadcomplete/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/media/uploadthumbcomplete/:id",
    "title": "Notify on Thumb",
    "description": "<p>Notify the API that the thumbnail has uploaded</p>",
    "name": "s3notifythumb",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of media that the thumbnail belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Filename of file that was uploaded</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/uploadthumbcomplete/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/media/signupload/",
    "title": "Get Upload Url",
    "description": "<p>Retrieve an S3 PUT url to upload the media to</p>",
    "name": "signupload",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Name of the file to upload</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signed_request",
            "description": "<p>Url that you can use to PUT file to.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/signupload/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/media/signuploadthumb/",
    "title": "Get Thumb Upload Url",
    "description": "<p>Retrieve an S3 PUT url to upload the thumbnail to</p>",
    "name": "signuploadthumb",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Name of the file to upload</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "signed_request",
            "description": "<p>Url that you can use to PUT file to.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/signuploadthumb/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/media/thumbnail/:id",
    "title": "Thumbnail for media",
    "description": "<p>Get thumbnail for specific media</p>",
    "name": "thumbnail",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of media</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/thumbnail/:id"
      }
    ]
  },
  {
    "type": "socket.io get",
    "url": "/api/media/update/:id",
    "title": "Update Meta-Data",
    "description": "<p>Update the meta-data of the give media</p>",
    "name": "update",
    "group": "Media",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Media id to update</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "static_meta",
            "description": "<p>Static Meta-data Object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "timed_meta",
            "description": "<p>Time stamped Meta-data Object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/update/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/media/mymedia/:id",
    "title": "List User's Own Media for a Shoot",
    "description": "<p>List all the media from a given shoot shot by the current user</p>",
    "name": "usermedia",
    "group": "Media",
    "version": "0.0.2",
    "permission": [
      {
        "name": "viewonly",
        "title": "Admin or Participation",
        "description": "<p>You either need to be an admin, or to have contributed (and the admin allow viewing) to get this information.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>List of media</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/MediaController.js",
    "groupTitle": "Media",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/media/mymedia/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/status",
    "title": "Get API Server Status",
    "name": "status",
    "group": "Misc",
    "version": "0.0.2",
    "description": "<p>Find out if the Bootlegger API is live, and what version of the client it is expecting.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok' when server is live</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>Current server version</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Misc",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/status"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/auth/usersearch",
    "title": "List Users",
    "name": "usersearch",
    "group": "Misc",
    "version": "0.0.2",
    "description": "<p>Search for system users.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "query",
            "description": "<p>Search string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of users</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/AuthController.js",
    "groupTitle": "Misc",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/auth/usersearch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/post/editprogress",
    "title": "Get Edit Progress",
    "name": "editprogress",
    "group": "Post_Production",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Edit",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "progress",
            "description": ""
          }
        ]
      }
    },
    "filename": "./api/controllers/WatchController.js",
    "groupTitle": "Post Production",
    "groupDescription": "<p>TODO -- FORMAT OF EDIT JSON</p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/post/editprogress"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/post/getvideo/:id",
    "title": "Direct video link for edit",
    "description": "<p>Get preview video for media</p>",
    "name": "editvideo",
    "group": "Post_Production",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of edit</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/WatchController.js",
    "groupTitle": "Post Production",
    "groupDescription": "<p>TODO -- FORMAT OF EDIT JSON</p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/post/getvideo/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/post/edit",
    "title": "Get Edit",
    "name": "getedit",
    "group": "Post_Production",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>of edit</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "edit",
            "description": "<p>The edit</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/WatchController.js",
    "groupTitle": "Post Production",
    "groupDescription": "<p>TODO -- FORMAT OF EDIT JSON</p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/post/edit"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/post/myedits",
    "title": "List User Edits",
    "name": "listedits",
    "group": "Post_Production",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "edits",
            "description": "<p>List of edits.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/WatchController.js",
    "groupTitle": "Post Production",
    "groupDescription": "<p>TODO -- FORMAT OF EDIT JSON</p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/post/myedits"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/post/media",
    "title": "List Shoot Media",
    "name": "listmediapost",
    "group": "Post_Production",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "edit",
            "description": "<p>The edit that was created.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/WatchController.js",
    "groupTitle": "Post Production",
    "groupDescription": "<p>TODO -- FORMAT OF EDIT JSON</p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/post/media"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/post/newedit",
    "title": "Create Edit",
    "name": "newedit",
    "group": "Post_Production",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "media",
            "description": "<p>List of media objects (or id's?)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "edit",
            "description": "<p>The edit that was created.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/WatchController.js",
    "groupTitle": "Post Production",
    "groupDescription": "<p>TODO -- FORMAT OF EDIT JSON</p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/post/newedit"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/post/saveedit",
    "title": "Save Edit",
    "name": "saveedit",
    "group": "Post_Production",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "edit",
            "description": "<p>The edit that was created.</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/WatchController.js",
    "groupTitle": "Post Production",
    "groupDescription": "<p>TODO -- FORMAT OF EDIT JSON</p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/post/saveedit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/profile/me",
    "title": "Profile Information",
    "name": "User_Profile",
    "group": "Profile",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Current user's profile information</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/profile/me"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/profile/contributed",
    "title": "List Contributed",
    "description": "<p>List all the shoots the user has contributed to</p>",
    "name": "contributed",
    "group": "Profile",
    "version": "0.0.2",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "List",
            "description": "<p>of shoot objects</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/profile/contributed"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/profile/mine",
    "title": "List Shoots",
    "description": "<p>List the current user's shoots</p>",
    "name": "mine",
    "group": "Profile",
    "version": "0.0.2",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "myevents",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "codeevents",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "publicevents",
            "description": ""
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Profile",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/profile/mine"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/changephase/:id",
    "title": "Change Phase",
    "name": "changephase",
    "permission": [
      {
        "name": "admin",
        "title": "Admin rights on this shoot are needed.",
        "description": "<p>This endpoint can only be used by users with admin rights for this shoot.</p>"
      }
    ],
    "group": "Shoot_Management",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phase",
            "description": "<p>Phase to change to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Subscribed</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot_Management",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/changephase/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/shoot/create",
    "title": "Create New Shoot",
    "name": "create",
    "group": "Shoot_Management",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventtype",
            "description": "<p>Shoot Template to Use</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Shoot Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "starts",
            "description": "<p>Start Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_time",
            "description": "<p>Start Time</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "ends",
            "description": "<p>End Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_time",
            "description": "<p>End Time</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Subscribed</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot_Management",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/create"
      }
    ]
  },
  {
    "type": "socket.io get",
    "url": "/api/shoot/updates/:id",
    "title": "Register to Monitor",
    "description": "<p>Register for realtime socket.io events for this shoot.</p>",
    "permission": [
      {
        "name": "admin",
        "title": "Admin rights on this shoot are needed.",
        "description": "<p>This endpoint can only be used by users with admin rights for this shoot.</p>"
      }
    ],
    "name": "monitor",
    "group": "Shoot_Management",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'Subscribed'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot_Management",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/updates/:id"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/pause",
    "title": "(AD) Pause Shoot",
    "name": "paused",
    "permission": [
      {
        "name": "admin",
        "title": "Admin rights on this shoot are needed.",
        "description": "<p>This endpoint can only be used by users with admin rights for this shoot.</p>"
      }
    ],
    "group": "Shoot_Management",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot_Management",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/pause"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/started",
    "title": "(AD) Start Shoot",
    "name": "started",
    "group": "Shoot_Management",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Subscribed</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot_Management",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/started"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/acceptrole",
    "title": "(AD) Accept Role",
    "name": "acceptrole",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "roleid",
            "description": "<p>Role id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/acceptrole"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/acceptshot",
    "title": "(AD) Accept Shot",
    "name": "acceptshot",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "shotid",
            "description": "<p>Shot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/acceptshot"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/connect/:id",
    "title": "Connect",
    "name": "connect",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "shoot",
            "description": "<p>Shoot template information</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/connect/:id"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/discon/:id",
    "title": "Disconnnect",
    "name": "discon",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'logged out'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/discon/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/data/:id.zip",
    "title": "Get Shoot Assets",
    "name": "getshoottemplate",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": ".zip",
            "description": "<p>Zip file filled with overlay assets</p>"
          }
        ]
      }
    },
    "description": "<p>These assets are also available directly from the /data/images and /data/icons URL on the server. Filenames are provided in each shot object in the template.</p>",
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>"
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/holdrecording",
    "title": "(AD) Keep Current Allocation",
    "name": "hold",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/holdrecording"
      }
    ]
  },
  {
    "type": "socket.io get",
    "url": "/api/shoot/join/:id",
    "title": "Register as Contributor",
    "name": "join",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'subscribed'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/join/:id"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/leverole/:id",
    "title": "Leave Role",
    "name": "leaverole",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "shotid",
            "description": "<p>Shot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/leverole/:id"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/notready:id",
    "title": "(AD) Not-Ready to Shoot",
    "name": "notready",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/notready:id"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/registerpush/:id",
    "title": "Register for Push Notifications",
    "name": "push",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pushcode",
            "description": "<p>Pushcode for platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Platform of device</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/registerpush/:id"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/ready:id",
    "title": "(AD) Ready to Shoot",
    "name": "ready",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/ready:id"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/startrecording",
    "title": "Start Recording",
    "name": "record",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/startrecording"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/rejectshot",
    "title": "(AD) Reject Shot",
    "name": "rejectshot",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "shotid",
            "description": "<p>Shot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Subscribed</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/rejectshot"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/selectrole",
    "title": "Select Role",
    "name": "selectrole",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "roleid",
            "description": "<p>Role id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "confirm",
            "description": "<p>Confirmed role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Subscribed</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/selectrole"
      }
    ]
  },
  {
    "type": "socket.io post",
    "url": "/api/shoot/stoprecording",
    "title": "Stop Recording",
    "name": "stoprecord",
    "group": "Shoot_Participation",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventid",
            "description": "<p>Shoot id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>'ok'</p>"
          }
        ]
      }
    },
    "filename": "./api/controllers/EventController.js",
    "groupTitle": "Shoot Participation",
    "groupDescription": "<p>The powerful Bootlegger API allows you to create clients which interact with the platform to produce content.</p> <p>A client can be interactive and implement the auto-director, allow custom interaction with a template, be implemented on custom hardware or provide an automated way of importing content into a Bootlegger film shoot. In any case, each client must following this workflow:</p> <ol> <li>Get the user to login and obtain a session key</li> <li>List the shoots that the user can contribute to</li> <li>Connect to a given shoot and accept the privacy policy</li> <li>Select a role, and confirm to continue if requested</li> <li>(optional) Download image assets for the shoot template</li> </ol> <p>Shoots are run in either Auto-Director or Pallet Mode. Pallet mode does not nessesitate a live websocket connection to the API.</p> <h2>Autodirector Mode (AD)</h2> <ol> <li>Connect socket.io websocket and register for updates</li> <li>Respond to any websocket messages in the appropriate manner, as described in the documentation.</li> </ol> <p><img src=\"/images/client_messages.png\" alt=\"Client Message Order\"></p>",
    "sampleRequest": [
      {
        "url": "https://bootlegger.tv/api/shoot/stoprecording"
      }
    ]
  },
  {
    "type": "SocketIO Message",
    "url": "loginelsewhere",
    "title": "Duplicate Login Attempt",
    "name": "io_dupelogin",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent by the server when you have been disconnected due to a login by this user elsewhere.</p>",
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "eventupdate",
    "title": "Shoot Template Update",
    "name": "io_eventupdate",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent by the server to indicate the template has been updated.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "eventupdate",
            "description": "<p>New template information to replace the current version.</p>"
          }
        ]
      }
    },
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "forcedie",
    "title": "Force Disconnect",
    "name": "io_forcedie",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent by the server when the client needs to reconnect completely.</p>",
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "getshot",
    "title": "Shot Request",
    "name": "io_getshot",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent to request the user obtain a specific shot.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "getshot",
            "description": "<p>Index of the request shot in the template.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meta",
            "description": "<p>Specfic subject meta-data associated with this request (to be used as replacement text in a shot description)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "coverage_class",
            "description": "<p>Index of a coverage_class in the template which this shot applies to.</p>"
          }
        ]
      }
    },
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "length",
    "title": "User Shot Timing Information",
    "name": "io_lengthupdate",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent by the server to update the user of their expected record timings.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "length",
            "description": "<p>Length in seconds of shot allocation process.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "warning",
            "description": "<p>Length in seconds of countdown indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "live",
            "description": "<p>Length in seconds of each recording.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "cameragap",
            "description": "<p>Length in seconds between stopping recording and starting the shot allocation process.</p>"
          }
        ]
      }
    },
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "message",
    "title": "Server Message",
    "name": "io_message",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent by the server as a broadcast or individual message to be displayed in the client.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Content of the message to be displayed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "dialog",
            "description": "<p>True if this message should be more promenent, rather than just presented on-screen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "shots",
            "description": "<p>True if this dialog should present a demonstration list of shots to the user.</p>"
          }
        ]
      }
    },
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "phasechanged",
    "title": "Phase Change",
    "name": "io_phasechange",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent by the server to indicate the shoot creater has changed the current phase.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "phasechange",
            "description": "<p>Index of the current phase in the template.</p>"
          }
        ]
      }
    },
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "eventstarted",
    "title": "Shoot Started/Paused Indicator",
    "name": "io_shootstarted",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent by the server to indicate the shoot has started allocating shots.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "eventstarted",
            "description": "<p>True if shoot started, False if shoot paused.</p>"
          }
        ]
      }
    },
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "type": "SocketIO Message",
    "url": "live",
    "title": "Start or Stop Recording",
    "name": "io_startrecording",
    "group": "Socket_io_Messages",
    "version": "0.0.2",
    "description": "<p>Sent when current user needs to start or stop recording.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "live",
            "description": "<p>True to start recording, false to stop recording.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "shot_length",
            "description": "<p>Maximum / expected length of this recording.</p>"
          }
        ]
      }
    },
    "filename": "./doc_defines/websockets.js",
    "groupTitle": "Socket_io_Messages"
  },
  {
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>403: Forbidden { &quot;msg&quot;: &quot;Please provide an API key&quot; }</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc_defines/defines.js",
    "group": "_home_nsarvar_workspace_bootlegger2_bootlegger_server_doc_defines_defines_js",
    "groupTitle": "_home_nsarvar_workspace_bootlegger2_bootlegger_server_doc_defines_defines_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_nsarvar_workspace_bootlegger2_bootlegger_server_doc_main_js",
    "groupTitle": "_home_nsarvar_workspace_bootlegger2_bootlegger_server_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc_template/main.js",
    "group": "_home_nsarvar_workspace_bootlegger2_bootlegger_server_doc_template_main_js",
    "groupTitle": "_home_nsarvar_workspace_bootlegger2_bootlegger_server_doc_template_main_js",
    "name": ""
  }
] });
