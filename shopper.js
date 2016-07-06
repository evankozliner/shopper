var casper = require('casper').create({
	viewportSize: {
        width: 1024,
        height: 768
    }
});
casper.start('https://www.amazon.de/ap/signin?_encoding=UTF8&openid.assoc_handle=deflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dgno_signin');


//taking screenshot - used for debug
casper.then(function(){
	this.viewport(1280, 1024);
	this.wait(5000);

});

casper.then(function(){
	this.capture('amazon.png',{
		top: 0,
		left: 0,
		width: 1280,
		height: 1024
	});
});


casper.run();
