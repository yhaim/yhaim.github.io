	
	;$(function()
	{
		'use strict';
		
		var sidebar=$('#sidebar'),
			mask=$('.mask'),	
			sidebar_trigger=$('#sidebar_trigger');
			
			sidebar_trigger.on('click',function()
			{
					mask.fadeIn();
				})
	})
	