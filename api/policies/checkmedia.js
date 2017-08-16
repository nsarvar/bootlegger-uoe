/* Copyright (C) 2014 Newcastle University
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */
 /**
 * Check media access
 */

function checkServerCode(req,res,cb)
{
  if (req.param('servertoken'))
  {
    //has a server token
    User.findOne({'apikey.servertoken':req.param('servertoken')}).exec(function(err,user){
      if (user)
      {
        //do headless login using this user:
        req.session.passport.user = user;
        return cb(req.session.passport.user.id);
      }
      else
      {
        return res.json(403,{msg:"Invalid server token"});
      }
    });
  }
  else
  {
	  if (req.session.passport && req.session.passport.user)
	  	cb(req.session.passport.user.id);
	  else
	    cb(null);
  }
}

module.exports = function (req, res, ok) {
	
	var id = req.param('id');
	//var user = req.session.passport.user.id;
	
	checkServerCode(req,res,function(user)
	{

		if (!id || !user)
			return res.forbidden();
	
		if (req.session.passport && req.session.passport.user && _.contains(sails.config.admin_email,req.session.passport.user.profile.emails[0].value))
		{
			return ok();
		}
		
		Media.findOne(id,function(err,media){
			// console.log(err);
			if (media)
			{

				//if the user created the media:
				if (media.created_by == user)
					return ok();
				
				Event.findOne(media.event_id,function(err,shoot){
					if (!err && shoot)
					{
						//if the user is admin on the shoot for the media				
						if (_.contains(shoot.ownedby,user))
							return ok();
						
						//if the user is a contributor to the shoot and the shoot allows viewing
						Media.isContributor(user,function(yes){
							if ((shoot.publicview || shoot.publicedit))
								return ok();
							else
								return res.forbidden();
						});
					}
					else
					{
						console.log('Media has no shoot information ' + media.id);
						return res.notFound();
					}
				});
			}
			else
			{
				console.log('media not found ' + id);
				return res.notFound();
			}
		});
	});
}