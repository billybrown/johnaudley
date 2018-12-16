/*global $:false, document:false, window:false, console:false, setTimeout:false */

(function(){
	"use strict";

	var Engine = {

		ui : {

			names : function() {

				// show and hide and replace baby positions
				var babynames = [
					'Little Brother',
					'Manager, Commanders Palace',
					'Red Beans Eater',
					'SpaceX, Mars Terraformer',
					'Chief of Police, City of New Roads',
					'King in the North',
					'Southern Legal Clinics, Intern',
					'Gym Rompers Participant',
					'Chief Medical Officer, Star Ship Enterprise',
					'Baby'
				];

				var spot = $('#position');

				// babynames.forEach(function(value) {
				//     console.log(value);

				// 	$(window).load(function() {
				// 		setTimeout(function() {
				// 			spot.toggleClass('fadeout');
				// 			console.log('hello 1');

				// 			setTimeout(function() {
				// 				spot.html(value);
				// 				console.log('hello 2');

				// 				setTimeout(function() {
				// 					spot.toggleClass('fadeout');
				// 					console.log('hello 3');
				// 				}, 500);
				// 			}, 500);
				// 		}, 500);
				// 	});
				// });

				var i = 0, l = babynames.length;
				var iterator = function() {
				    console.log(babynames[i]);

					// spot.toggleClass('fadeout');
					// spot.html(babynames[i]);
					// spot.toggleClass('fadeout');

					spot.addClass('fadeout').delay(1000).queue(function(next){
				    	$(this).html(babynames[i]).delay(100).queue(function(next){
				    		$(this).removeClass('fadeout');
				    		next();
				    	});
				    	next();
				    });
				    if(++i<l) {
				        setTimeout(iterator, 5000);
				    }
				};


				// Draw the date at the top
				$(window).load(function() {
					setTimeout(iterator, 4000);
				});
			}
		}
	};

	Engine.ui.names();



})();
