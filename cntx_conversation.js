window.rcmail && rcmail.addEventListener('init', function(evt) {
	console.log(evt);
    rcmail.register_command('plugin.cntx_conversation-save', function() {
    	console.log(rcmail.gui_objects);

        rcmail.gui_objects.threadchatsfrm.submit();


    }, true);
});