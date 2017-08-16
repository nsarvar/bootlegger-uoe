define({
  "name": "Bootlegger API",
  "version": "0.0.2",
  "description": "API for bootlegger",
  "title": "Bootlegger API Documentation",
  "header": {
    "title": "Getting Started",
    "content": "<blockquote>\n<p>BETA API - This is a preview release of the API, changes may occur!</p>\n</blockquote>\n<h1>Getting Started</h1>\n<p>The Bootlegger platform encompasses the entire video production workflow.</p>\n<p>This architecture is described in <a href=\"/platform\">The Bootlegger Platform</a>. Examples of how to perform common workflows are given below.</p>\n<h2>Key Points</h2>\n<blockquote>\n<p>The Bootlegger API is currently designed so that you as a developer can make use of the functionality and infrastructure within the platform. To simplify integration, we do not expose all of the functions of the full Bootlegger platform.</p>\n</blockquote>\n<blockquote>\n<p>Bootlegger is built on top of Sails.js, which means that almost all API endpoints can actually be called from either HTTP or Socket.io. Suggestions are provided on which protocol to normally use. Please read the <a href=\"http://sailsjs.org\">Sails</a> documentation for further information.</p>\n</blockquote>\n<h2>Remember</h2>\n<p>All calls to the API must include a <code>GET</code> parameter with your API key i.e. <code>?apikey=1234-1234-1234-1234</code>.</p>\n<h2>Getting Started</h2>\n<ol>\n<li>Sign-up for an API key</li>\n<li>Visit the api-examples <a href=\"/platform\">GitHub repo</a></li>\n<li>Read the <a href=\"/platform\">Bootlegger Platform documentation</a></li>\n<li>Read these docs</li>\n<li>Ask questions to the community on GitHub</li>\n</ol>\n<h2>Meta Data Structure</h2>\n<p>Bootlegger meta-data is heirachichal, and can be continually adjusted throughout the duration of a shoot:</p>\n<pre><code>Shoot\t\t\t\t\t\t//--&gt; Top level information about \n|\n+-- Phase\t\t\t\t\t//--&gt; Is set by the shoot organiser, and *can* be used to filter roles. Often used for temporal grouping (e.g. Day 1, Day 2)\n\t|\n\t+-- Role\t\t\t\t//--&gt; Is chosen by the contributor, and shots *can* be filtered into roles. Roles are often used for geographic locations, but can be used for any grouping of shots.\n\t\t|\n\t\t+-- Coverage Class\t//--&gt; Can be applied to a shot to specifiy the subject of that clip e.g. 'Interviewer', 'Interviewee'\n\t\t|\n\t\t+-- Shot\t\t\t//--&gt; Main description of what/how to capture a clip \n</code></pre>\n<h2>Shoot Template JSON</h2>\n<p>Everything in Bootlegger centers on the shoot template. The template is a description of what the shoot organiser wants to capture, what contributors should shoot, what meta-data to apply to the captured footage and how this meta-data maps back to human-readable information.</p>\n<p>The top level of the shoot object maintains logistical and practical propterties of the event.</p>\n<p><strong>shoot</strong></p>\n<pre><code class=\"language-javascript\">{\n\t&quot;id&quot;: &quot;234234asdasdasdasdasdasd&quot;,\t// (string) Reference ID of the shoot\n\t&quot;name&quot;: &quot;Test shoot 1&quot;,\t\t\t\t// (string)\tName of the shoot as it appears in listings\n\t&quot;starts&quot;: &quot;25-08-2015&quot;, \t\t\t// (date)\tDate shoot starts (and appears on shoot lists)\n\t&quot;starts_time&quot;: &quot;1pm&quot;,\t\t\t\t// (string) Time shoot starts (and appears on shoot lists)\n\t&quot;ends&quot;: &quot;25-08-2015&quot;,\t\t\t\t// (date)\tDate shoot ends (and appears on shoot lists)\n\t&quot;ends_time&quot;: &quot;11pm&quot;,\t\t\t\t// (string)\tTime shoot ends (and appears on shoot lists)\n\t&quot;publicshare&quot;: 0,\t\t\t\t\t// (bool)\tIndicate that anyone can share content online from this shoot\n\t&quot;public&quot;: 1,\t\t\t\t\t\t// (bool)\tIndicate that anyone can join this shoot without invitation\t\t\n\t&quot;publicview&quot;: 1,\t\t\t\t\t// (bool)\tIndicate that any contributor can view footage from this shoot\n\t&quot;publicedit&quot;: 1,\t\t\t\t\t// (bool)\tIndicate that any contributor (or anyone with the link) can edit footage from this shoot\n\t&quot;groupevent&quot; : true,\t\t\t\t// (bool)   Group this event visually under the owners name\n\t&quot;icon&quot;: &quot;8eb9e8d0.png&quot;,\t\t\t\t// (string)\tFilename of shoot icon stored in the bootlegger S3.\n\t&quot;iconbackground&quot;: &quot;8eb9e8d0.png&quot;, \t// (string)\tFilename of shoot background image stored in the bootlegger S3.\n\t&quot;created_by&quot;: &quot;54aac87786d9&quot;,\t\t// (string) UserID of user who originally created the shoot\n\t&quot;release&quot;:&quot;this is a release&quot;,\t\t// (string) Markdown content for video release each contributor has to agree to\n\t&quot;post_modules&quot;: {\t\t\t\t\t// (object) Describes which post-production modules are enabled for this shoot\n\t\t&quot;audio_sync&quot;: 0,\n\t\t&quot;titles&quot;: 0\n\t},\n\t&quot;shoot_modules&quot;: {\t\t\t\t\t// (object) Describes which direction modules are enabled for this shoot\n\t\t&quot;autodirector&quot;: &quot;0&quot;,\t\t\t//auto-director\n\t\t&quot;marathondirector&quot;: &quot;1&quot;\t\t\t//pallet mode\n\t},\n\t&quot;eventtype&quot;: OBJECT\t\t\t\t\t//see below\n\t&quot;coverage_classes&quot;: OBJECT\t\t\t//see below\n\t&quot;codes&quot;: ARRAY,\t\t\t\t\t\t//see below\n\t&quot;phases&quot;: ARRAY\t\t\t\t\t\t//see below\n}\n</code></pre>\n<p><strong>shoot.eventtype</strong></p>\n<p>This object represents the template which defines a commission. Each seed template is one of these types. When creating a new shoot, the provided shoot template becomes this object. Internal versions of <code>coverage_classes</code>, <code>phases</code>, <code>shoot_modules</code> and <code>post_modules</code> are clones of the ones in the parent.</p>\n<pre><code class=\"language-javascript\">{\n\t&quot;name&quot; : &quot;Live Music Performance&quot;,\n\t&quot;description&quot; : &quot;the description&quot;,\t\t// (string) Description of the template\n\t&quot;version&quot; : 1,\t\t\t\t\t\t\t// (int)\tVersion of the template (increases with each save)\n\t&quot;shotrelease&quot; : &quot;&quot;,\t\t\t\t\t\t// (string) Markdown content for video release each contributor has to  show to the subject\n\t&quot;offline&quot; : false,\t\t\t\t\t\t// (bool)\tIf the shoot can operate without a live internet connection (i.e. Auto-Director shoots)\n\t&quot;codename&quot; : &quot;live_music_performance&quot;,\t// (string) Filename compatable identifier for the template\n\t&quot;hasroleimg&quot; : true,\t\t\t\t\t// (bool)\tIf the shoot presents a &quot;map&quot; image on which roles can be selected\n\t&quot;roleimg&quot; : &quot;63096507.jpg&quot;\t\t\t\t// (opt.)\tFilename in S3 for role map image\n\t&quot;shot_types&quot; : [ \t\t\t\t\t\t// Array of shot descriptions to be used in roles\n\t\t{\n\t\t\t&quot;id&quot; : 0,\t\t\t\t\t\t// (int) \tSequential ID to use as reference in a role\n\t\t\t&quot;name&quot; : &quot;Flyer Close Up&quot;,\t\t// (string) Short name of shot\n\t\t\t&quot;description&quot; : &quot;Find a...&quot;,\t// (string) Long description, can include %%fillme%% sections to replace by coverage_class\n\t\t\t&quot;image&quot; : &quot;straight.png&quot;,\t\t// (string) Filename of image overlay to use\n\t\t\t&quot;icon&quot; : &quot;straight.png&quot;,\t\t// (string) Filename of small icon to use\n\t\t\t&quot;coverage_class&quot; : 0\t\t\t// (opt. )\tIndex of coverage_class that applies to this shot \n\t\t\t\n\t\t\t//The following are required for Pallet Shoots\n\t\t\t&quot;max_length&quot; : 15,\t\t\t\t// (string) Maximum length in seconds a clip should record for\n\t\t\t&quot;wanted&quot; : &quot;2&quot;,\t\t\t\t\t// (int)\tIndication of how many clips should be captured per contributor\n\t\t\t&quot;hidden&quot; : true\t\t\t\t\t// (bool)\tToggle if the shot is visible to the contributor\n\t\t\t&quot;shot_type&quot; : &quot;PHOTO&quot;,\t\t\t// (VIDEO|PHOTO|AUDIO) Media type to capture\n\t\t\t&quot;release&quot; : true,\t\t\t\t// (bool)\tShould the media release be shown to the subject before capture\n\t\t\t\t\t\t\n\t\t\t//The following are required for Auto-Director Shoots\n\t\t\t&quot;frame_position&quot; : &quot;Left&quot;,\t\t// (Left|Mid|Right) Subject direction (mapped to coverage_class direction)\n\t\t}\n\t],\n\t&quot;roles&quot; : [ \t\t\t\t\t\t\t// Array of roles contributors can pick from\n\t\t{\n\t\t\t&quot;id&quot; : 1,\t\t\t\t\t\t// (int) \tSequential index of the role\n\t\t\t&quot;name&quot; : &quot;Everyone&quot;,\t\t\t// (string)\tName of the role\n\t\t\t&quot;description&quot; : &quot;Description&quot;,\t// (string)\tDescription of the role\n\t\t\t&quot;shot_ids&quot; : [1,3,5],\t\t\t// (array)\tList of shots that contributors in this role can choose / are allocated\n\t\t\t&quot;position&quot; : [0.3,0.5],\t\t\t// (opt.) \tRelative x,y coordinate of role in the role map image\n\t\t}\n\t],\n\t \n\t//Below are a clone of properties on parent shoot object, used as as template for new shoots\n\t&quot;phases&quot;:ARRAY, \n\t&quot;coverage_classes&quot;:OBJECT,\n\t&quot;post_modules&quot; : OBJECT,\n\t&quot;shoot_modules&quot; : OBJECT,\n\t&quot;publicview&quot; : true,\n\t&quot;publicshare&quot;: 0,\n\t&quot;public&quot;: 1,\t\t\n\t&quot;publicview&quot;: 1,\n\t&quot;publicedit&quot;: 1\n}\n</code></pre>\n<p><strong>shoot.coverage_classes</strong></p>\n<p>This object represents how the shoot director allocates shots to contributors, and how variables in shot descriptions <code>%%replaceme%%</code> are replaced.</p>\n<pre><code class=\"language-javascript\">&quot;coverage_classes&quot; : {\n\t//format for us in pallet director mode\n\t&quot;0&quot; : {\t\t\t\t\t\t\t\t\t\t// (index) Must be sequential\n\t\t&quot;name&quot; : &quot;Keyboards&quot;,\t\t\t\t\t// (string) Coverage class name\n\t\t&quot;items&quot; : []\t\t\t\t\t\t\t// (empty) \tNot needed\n\t},\n\t\n\t//format to be used in auto-director mode\n\t&quot;1&quot; : {\t\t\t\t\t\t\t\t// (string) Sequential index of coverage class\n\t\t&quot;name&quot; : &quot;Whole Band&quot;,\t\t\t// (string)\tCoverage class name\n\t\t&quot;percentage&quot;:40\t\t\t\t\t// (int)\tPercentage of shots in this coverage class to collect\n\t\t&quot;items&quot; : [ \n\t\t\t{\n\t\t\t\t&quot;name&quot; : &quot;drummer&quot;,\t\t// Replacement text for the coverage class\n\t\t\t\t&quot;direction&quot; : &quot;Mid&quot;\t\t// (Left|Mid|Right) Shot direction (filters shots allocated based on their direction value)\n\t\t\t}\n\t\t]\n\t}\n},\n</code></pre>\n<p><strong>shoot.codes</strong></p>\n<p>If a shoot is not public, then a join link is sent via email or SMS to participants. This object stores which participants have been notfied and their current join status.</p>\n<pre><code class=\"language-javascript\">&quot;codes&quot; : [ \n\t{\n\t\t&quot;number&quot; : &quot;++00000000000&quot;,\n\t\t&quot;email&quot; : &quot;tom@jeff.com&quot;,\n\t\t&quot;status&quot; : &quot;sent&quot;,\n\t\t&quot;code&quot; : &quot;74443&quot;\n\t}\n],\n</code></pre>\n<p><strong>shoot.phases</strong></p>\n<pre><code class=\"language-javascript\">&quot;phases&quot; : [ \n\t{\n\t\t&quot;name&quot; : &quot;Show&quot;,\t\t\t\t\t// (string) \t\tName of the phase\n\t\t&quot;description&quot; : &quot;During the show&quot;,\t// (string) \t\tDescription \n\t\t&quot;roles&quot; : [1,2,3]\t\t\t\t\t// (opt. or []) Array of Role object indexes which are filtered to this phase\n\t}\n],\n</code></pre>\n<h2>Media Item JSON</h2>\n<p>Each piece of footage captured in bootlegger is represented by a media object. This object stores all meta-data associated with the clip.</p>\n<p>When submitting new media, or updating media that already exists, the following JSON structure is used:</p>\n<pre><code class=\"language-javascript\">{\n\t&quot;event_id&quot;: &quot;234234asdasdasdasdasdasd&quot;,\t\t\t\t\t// (string) ID of Shoot\n\t&quot;meta&quot;: {\t\t\t\t\t\t\t\t\t\t\t\t\t// meta-data associated with the clip\n\t\t//\n\t\t&quot;static_meta&quot;: {\n\t\t\t&quot;clip_length&quot;: &quot;00:00:04.8888784&quot;,\t\t\t\t// (timestamp)\tLength in seconds of recording (specific format)\n\t\t\t&quot;camera&quot;: &quot;rear&quot;,\t\t\t\t\t\t\t\t// (front|rear)\tCamera used in the recording\n\t\t\t&quot;zoom&quot;: &quot;0&quot;,\t\t\t\t\t\t\t\t\t// (string)\tZoom level at the start of the recording\n\t\t\t&quot;captured_at&quot;: &quot;25/08/2015 15:33:06.87 PM +01&quot;, // (date)\tDate/Time stamp of when the media was captured (specific format)\n\t\t\t&quot;meta_phase&quot;: &quot;0&quot;,\t\t\t\t\t\t\t\t// (string)\tShoto phase in which the clip was taken \n\t\t\t&quot;filesize&quot;: &quot;7769.0&quot;,\t\t\t\t\t\t\t// (string) Filesize in bytes\n\t\t\t&quot;local_filename&quot;: &quot;635761135868813470.mp4&quot;,\t\t// (string) Filename on capture device\n\t\t\t&quot;role&quot;: &quot;5&quot;,\t\t\t\t\t\t\t\t\t// (string)\tIndex of role that was selected when clip was captured \n\t\t\t&quot;media_type&quot;: &quot;VIDEO&quot;,\t\t\t\t\t\t\t// (VIDEO|PHOTO|AUDIO) Media type of recording\n\t\t\t&quot;shot&quot;: &quot;0&quot;,\t\t\t\t\t\t\t\t\t// (string) Index of shot selected\n\t\t\t&quot;coverage_class&quot;:3,\t\t\t\t\t\t\t\t// (opt.) Index of coverage class that applies\n\t\t\t&quot;shot_meta&quot;: &quot;dave&quot;\t\t\t\t\t\t\t\t// (opt.) Content of specific coverage_class information applied to shot\n\t\t},\n\t\t\n\t\t//timed meta-data\n\t\t&quot;timed_meta&quot;: {\t\t\t\t\t\t\t\t\t\t// (object) Time-stamped entries in the form &lt;key&gt;_&lt;value&gt;\n\t\t\t&quot;15:33:06.87&quot;:&quot;key_value&quot;,\n\t\t\t&quot;15:35:06.87&quot;:&quot;zoom_34&quot;\n\t\t}\n\t}\n},\n</code></pre>\n<p>When retrieving media objects from the API, references to template attributes will be mapped into the following fields:</p>\n<pre><code class=\"language-javascript\">&quot;id&quot;: &quot;234234asdasdasdasdasdasd&quot;,\t\t\t\t// ID of clip\n&quot;originalpath&quot;: &quot;http://&quot;,\t\t\t\t\t\t// Full URL of original video\n&quot;lowres&quot;: &quot;http://&quot;,\t\t\t\t\t\t\t// Full URL of thumbnailed video\n&quot;filename&quot;: &quot;http://&quot;,\t\t\t\t\t\t\t// Full URL of original video\n&quot;originalthumb&quot;: &quot;635761135868813470.mp4.png&quot;,\t// Filename of image thumbnail\n&quot;nicepath&quot;: &quot;15-33-06.87_Natalie_Cox.mp4&quot; \t\t// Filename made with meta-data \n&quot;user&quot;: {\t\t\t\t\t\t\t\t\t\t// User who created media\n\t&quot;profile&quot;: \n\t{\n\t\t&quot;displayName&quot;: &quot;Natalie Cox&quot;\n\t}\n},\n&quot;phase_ex&quot;: {\t\t\t\t\t\t\t\t\t//Phase\n\t&quot;name&quot;: &quot;Show&quot;,\n\t&quot;description&quot;: &quot;During the show&quot;\n},\n&quot;role_ex&quot;: {\t\t\t\t\t\t\t\t\t//Role\n\t&quot;name&quot;: &quot;Unknown&quot;\n},\n&quot;shot_ex&quot;: {\t\t\t\t\t\t\t\t\t//Shot\n\t&quot;name&quot;: &quot;Flyer Close Up&quot;,\n\t&quot;max_length&quot;: 15,\n\t&quot;wanted&quot;: &quot;2&quot;,\n\t&quot;image&quot;: &quot;document_forward_detail_mid_straight.png&quot;,\n\t&quot;icon&quot;: &quot;document_forward_detail_mid_straight.png&quot;,\n\t&quot;description&quot;: &quot;Find a flyer or promo of the buskers and fill the frame.&quot;,\n\t&quot;createdAt&quot;: &quot;2015-03-11T10:07:16.000Z&quot;,\n\t&quot;updatedAt&quot;: &quot;2015-03-11T10:07:16.000Z&quot;,\n\t&quot;id&quot;: 0,\n\t&quot;footage&quot;: 8,\n\t&quot;hidden&quot;: true\n},\n&quot;coverage_class_ex&quot;: {\t\t\t\t\t\t\t//Coverage Class\n\t&quot;name&quot;: &quot;Unknown&quot;\n}\n</code></pre>\n<h2>Micro-Edit JSON</h2>\n<p>Each micro-edit produced by bootlegger is represented by an edit object.</p>\n<p>When submitting an edit, only the <code>title</code>, <code>description</code> and <code>media</code> fields are required.</p>\n<pre><code class=\"language-javascript\">{\n\t&quot;title&quot;: &quot;Test Edit&quot;,\t\t\t\t\t\t// (string) Title of the edit\t\n\t&quot;description&quot;: &quot;&quot;,\t\t\t\t\t\t\t// (string) Description of the edit\n\t&quot;media&quot;: [],\t\t\t\t\t\t\t\t// (Array)  Array of Media Objects to concatenate 2 &lt;= n &lt;= 15\n\t\n\t//returned after creation\t\n\t&quot;id&quot;: &quot;234234asdasdasdasdasdasd&quot;,\n\t&quot;user_id&quot;: &quot;234234asdasdasdasdasdasd&quot;,\t\t// ID of user who created the edit\n\t&quot;code&quot;: &quot;VykEzYVlg&quot;,\t\t\t\t\t\t// Shortlink code\n\t&quot;createdAt&quot;: &quot;2015-10-12T11:01:34.780Z&quot;,\t// When the edit was submitted\n\t&quot;failed&quot;: false,\t\t\t\t\t\t\t// True if the edit failed\n\t&quot;path&quot;: &quot;/tmp&quot;,\t\t\t\t\t\t\t\t// Path to edited video (once complete)\n\t&quot;progress&quot;: 100,\t\t\t\t\t\t\t// Current editing progress\n\t&quot;shortlink&quot;: &quot;VykEzYVlg&quot;,\t\t\t\t\t// Shortlink code\n\t&quot;updatedAt&quot;: &quot;2015-10-13T11:24:49.764Z&quot;,\t// Last updated time\n}\n</code></pre>\n<h1>Workflow Patterns</h1>\n<p>Some workflows require specific patterns of interaction, detailed below:</p>\n<h2>Logging In</h2>\n<ol>\n<li>Call Login endpoint</li>\n<li>Follow redirect to login page</li>\n<li>Handle change of URL, or callback endpoint provided with the API key.</li>\n<li>Use the returned session id as a cookie in subsequent calls to the api</li>\n</ol>\n<h2>Uploading Media</h2>\n<ol>\n<li>Login and get session key</li>\n<li>Create meta-data for media, returns an ID for the media</li>\n<li>Obtain S3 PUT signed URL for this media</li>\n<li>PUT content file to S3</li>\n<li>Notify bootlegger file has been uploaded</li>\n</ol>\n<p>For thumbnails, its the same process using the thumbnail enpoints.</p>\n<h2>Auto-Director Integration</h2>\n<ol>\n<li>Login and get session key</li>\n<li>List shoots available to user</li>\n<li>Connect to shoot to obtain template</li>\n<li>Download assets zip file if needed</li>\n<li>Subscribe to websocket and shoot events</li>\n<li>Select a role</li>\n<li>Notify ready to shoot</li>\n<li>Respond to incoming messages from server as detailed in the documentation</li>\n<li>Upload meta-data, thumbnails and content when appropriate</li>\n</ol>\n<h2>Template Design</h2>\n<ol>\n<li>Login and get session key</li>\n<li>Obtain a list of seed templates</li>\n<li>Obtain a specific seed template from an ID</li>\n<li>Edit this template offline</li>\n<li>Create new shoot using this adjusted template</li>\n</ol>\n<h2>Browsing and Updating Meta-Data</h2>\n<ol>\n<li>Login and get session key</li>\n<li>List shoots available to user</li>\n<li>Use selected shoot id to obtain list of media from shoot</li>\n<li>Edit meta-data on a clip, and submit for update using media ID as reference</li>\n</ol>\n"
  },
  "footer": {
    "title": "More Information",
    "content": "<p>More information, help and support from the community can be found:</p>\n<ul>\n<li><a href=\"http://sailsjs.org/\">Sails.js Documentation</a></li>\n<li><a href=\"https://github.com/digitalinteraction/bootlegger-server\">Git Hub Repos</a></li>\n</ul>\n"
  },
  "withGenerator": false,
  "sampleUrl": "https://bootlegger.tv",
  "order": [
    "Misc",
    "Authentication",
    "Profile",
    "Commission",
    "Shoot Participation",
    "Media",
    "Shoot Management",
    "Post Production"
  ],
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-08-16T22:26:41.167Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});