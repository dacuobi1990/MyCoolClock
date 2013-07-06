var alldigit=document.getElementsByClassName("digit");
	function changeIt(i,object){
		switch (i) {
				case 0:
					object.setAttribute("class","digit zero");
					break;
				case 1:
					object.setAttribute("class","digit one");
					break;
				case 2:
					object.setAttribute("class","digit two");
					break;
				case 3:
					object.setAttribute("class","digit three");
					break;
				case 4:
					object.setAttribute("class","digit four");
					break;
				case 5:
					object.setAttribute("class","digit five");
					break;
				case 6:
					object.setAttribute("class","digit six");
					break;
				case 7:
					object.setAttribute("class","digit seven");
					break;
				case 8:
					object.setAttribute("class","digit eight");
					break;
				default:
					object.setAttribute("class","digit nine");
			}
	}
	var now=new Date();
	var h=now.getHours();
	var m=now.getMinutes();
	var s=now.getSeconds();
	changeIt(parseInt(h/10),alldigit[0]);
	changeIt(h%10,alldigit[1]);
	changeIt(parseInt(m/10),alldigit[2]);
	changeIt(m%10,alldigit[3]);
	s=s-1;
	function readTime() {
		s=s+1;
		changeIt(parseInt(s/10),alldigit[4]);
    	changeIt(s%10,alldigit[5]);
		s=s%60;
		if(s==0) {
		    m=m+1;
		    m=m%60;
		    if(m==0) {
		        h=h+1;
		        h=h%24;
		    	changeIt(parseInt(h/10),alldigit[0]);
				changeIt(h%10,alldigit[1]);
				m=0;
		    }
			changeIt(parseInt(m/10),alldigit[2]);
			changeIt(m%10,alldigit[3]);
			changeIt(0,alldigit[4]);
    		changeIt(0,alldigit[5]);
    		s=0;
		}
		setTimeout(readTime,1000);
	}
	window.readTime();