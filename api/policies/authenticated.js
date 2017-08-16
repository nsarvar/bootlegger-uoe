/* Copyright (C) 2014 Newcastle University
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */
 /**
 * Allow any authenticated user.
 */
module.exports = function (req, res, ok) {

  //if the request has a servertoken (i.e. its operating on behalf of another user...)
  if (req.param('servertoken'))
  {
    //has a server token
    User.findOne({'apikey.servertoken':req.param('servertoken')}).exec(function(err,user){
      if (user)
      {
        //do headless login using this user:
        req.session.passport.user = user;
        return ok();
      }
      else
      {
        return res.json(403,{msg:"Invalid server token"});
      }
    });
  }
  else
  {

  // User is allowed, proceed to controller
  if (req.session.passport.user) {
    //console.log("logging in");
    return ok();
  }
  else {
    // User is not allowed

      if (req.wantsJSON)
      {
        return res.json(403,{msg:"You are not permitted to perform this action."});
      }
      else
      {
        req.session.flash = {msg:'No can do, sorry.'};
        //console.log("not authorized");
        return res.redirect('auth/login');
      }
    }
  }
};