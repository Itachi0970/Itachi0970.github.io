function recommendAnimeMAL (username, callback) {
	var complete = [];
	userResults(username, function(call1){
		var a = call1;
		
		var b = a[0][0];
		var c = a[0][1];
		c = c.replace(/ /g,"_");
		
		var d = "http://myanimelist.net/anime/" + b + "/" + c;
		var e;
		genreResults(d, function(call2) {
			e = call2;
			var m;
			for (var i = 0; i < e.length; i++) {
				genreURL(e[i], function(call3) {
					m = call3;
				});
				e[i] = m;
				
			}
			
			var f = "";
			for (var i = 0; i < e.length; i++) {
				f = f.concat(e[i]);
			}
			
			var g = "";
			var h;
			var p;
			searchResults(g, f, function(call4) {
				h = call4;
				
				
				//this creates a deep copy
				var p = JSON.parse(JSON.stringify(h));;
				
				for (var i = h.length - 1; i >= 0; i--) {
					var i2 = h[i].indexOf("/",7);
					h[i] = h[i].substring(7,i2);
					for (var j = 0; j < a.length; j++) {
						
						if (h[i] === a[j][0]) {
							p.splice(i,1);
						}
					}
				}
				
				var k = [];
				for (var i = 0; i < p.length; i++) {
					var i2 = p[i].indexOf("/",8);
					k[i] = p[i].substring(i2+1,p[i].length);
					k[i] = k[i].replace(/_/g," ");
				}
				
				
				/*for (var i = 0; i < k.length; i++) {
					complete.push(k[i]);
				}*/
				complete.push(k[0]);
			});
		});
		
		
		
		a = call1;
		
		b = a[1][0];
		c = a[1][1];
		c = c.replace(/ /g,"_");
		
		d = "http://myanimelist.net/anime/" + b + "/" + c;
		e;
		genreResults(d, function(call2) {
			e = call2;
			var m;
			for (var i = 0; i < e.length; i++) {
				genreURL(e[i], function(call3) {
					m = call3;
				});
				e[i] = m;
				
			}
			
			var f = "";
			for (var i = 0; i < e.length; i++) {
				f = f.concat(e[i]);
			}
			
			var g = "";
			var h;
			var p;
			searchResults(g, f, function(call4) {
				h = call4;
				
				var p = JSON.parse(JSON.stringify(h));;
				
				for (var i = h.length - 1; i >= 0; i--) {
					var i2 = h[i].indexOf("/",7);
					h[i] = h[i].substring(7,i2);
					for (var j = 0; j < a.length; j++) {
						
						if (h[i] === a[j][0]) {
							p.splice(i,1);
						}
					}
				}
				
				var k = [];
				for (var i = 0; i < p.length; i++) {
					var i2 = p[i].indexOf("/",8);
					k[i] = p[i].substring(i2+1,p[i].length);
					k[i] = k[i].replace(/_/g," ");
				}
				
				
				/*for (var i = 0; i < k.length; i++) {
					complete.push(k[i]);
				}*/
				complete.push(k[0]);
			});
		});
		
		
		
		a = call1;
		
		b = a[2][0];
		c = a[2][1];
		c = c.replace(/ /g,"_");
		
		d = "http://myanimelist.net/anime/" + b + "/" + c;
		e;
		genreResults(d, function(call2) {
			e = call2;
			var m;
			for (var i = 0; i < e.length; i++) {
				genreURL(e[i], function(call3) {
					m = call3;
				});
				e[i] = m;
				
			}
			
			var f = "";
			for (var i = 0; i < e.length; i++) {
				f = f.concat(e[i]);
			}
			
			var g = "";
			var h;
			var p;
			searchResults(g, f, function(call4) {
				h = call4;
				
				var p = JSON.parse(JSON.stringify(h));;
				
				for (var i = h.length - 1; i >= 0; i--) {
					var i2 = h[i].indexOf("/",7);
					h[i] = h[i].substring(7,i2);
					for (var j = 0; j < a.length; j++) {
						
						if (h[i] === a[j][0]) {
							p.splice(i,1);
						}
					}
				}
				
				var k = [];
				for (var i = 0; i < p.length; i++) {
					var i2 = p[i].indexOf("/",8);
					k[i] = p[i].substring(i2+1,p[i].length);
					k[i] = k[i].replace(/_/g," ");
				}
				
				
				/*for (var i = 0; i < k.length; i++) {
					complete.push(k[i]);
				}*/
				complete.push(k[0]);
			});
		});
		
		
		
		a = call1;
		
		b = a[3][0];
		c = a[3][1];
		c = c.replace(/ /g,"_");
		
		d = "http://myanimelist.net/anime/" + b + "/" + c;
		e;
		genreResults(d, function(call2) {
			e = call2;
			var m;
			for (var i = 0; i < e.length; i++) {
				genreURL(e[i], function(call3) {
					m = call3;
				});
				e[i] = m;
				
			}
			
			var f = "";
			for (var i = 0; i < e.length; i++) {
				f = f.concat(e[i]);
			}
			
			var g = "";
			var h;
			var p;
			searchResults(g, f, function(call4) {
				h = call4;
				
				var p = JSON.parse(JSON.stringify(h));;
				
				for (var i = h.length - 1; i >= 0; i--) {
					var i2 = h[i].indexOf("/",7);
					h[i] = h[i].substring(7,i2);
					for (var j = 0; j < a.length; j++) {
						
						if (h[i] === a[j][0]) {
							p.splice(i,1);
						}
					}
				}
				
				var k = [];
				for (var i = 0; i < p.length; i++) {
					var i2 = p[i].indexOf("/",8);
					k[i] = p[i].substring(i2+1,p[i].length);
					k[i] = k[i].replace(/_/g," ");
				}
				
				
				/*for (var i = 0; i < k.length; i++) {
					complete.push(k[i]);
				}*/
				complete.push(k[0]);
			});
		});
		
		
		
		a = call1;
		
		b = a[4][0];
		c = a[4][1];
		c = c.replace(/ /g,"_");
		
		d = "http://myanimelist.net/anime/" + b + "/" + c;
		e;
		genreResults(d, function(call2) {
			e = call2;
			var m;
			for (var i = 0; i < e.length; i++) {
				genreURL(e[i], function(call3) {
					m = call3;
				});
				e[i] = m;
				
			}
			
			var f = "";
			for (var i = 0; i < e.length; i++) {
				f = f.concat(e[i]);
			}
			
			var g = "";
			var h;
			var p;
			searchResults(g, f, function(call4) {
				h = call4;
				
				var p = JSON.parse(JSON.stringify(h));;
				
				for (var i = h.length - 1; i >= 0; i--) {
					var i2 = h[i].indexOf("/",7);
					h[i] = h[i].substring(7,i2);
					for (var j = 0; j < a.length; j++) {
						
						if (h[i] === a[j][0]) {
							p.splice(i,1);
						}
					}
				}
				
				var k = [];
				for (var i = 0; i < p.length; i++) {
					var i2 = p[i].indexOf("/",8);
					k[i] = p[i].substring(i2+1,p[i].length);
					k[i] = k[i].replace(/_/g," ");
				}
				
				
				/*for (var i = 0; i < k.length; i++) {
					complete.push(k[i]);
				}*/
				complete.push(k[0]);
			});
		});
		
		
		//this is delayed until the page loads, so that the above code will execute first.
		$(window).bind("load", function() {
			for (var i = complete.length - 1; i >= 0; i--) {
				if (typeof complete[i] == "undefined") {
					complete.splice(i,1);
				}
			}
			callback(complete);
		});
	});
	
}