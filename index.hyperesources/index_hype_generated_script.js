//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_660F||null!=window.HYPE_dtl_660F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-660.full.min.js":"HYPE-660.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_660"+c,"HYPE_dtl_660"+c,a,d),false==!0&&(a=a||k("HYPE_w_660","HYPE_wdtl_660","HYPE-660.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_660","HYPE-660.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tif (DIFFICULTY == \"easy\") {\n\t\tINITIALCOUNTDOWNVALUE = 90;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t} \n\telse if (DIFFICULTY == \"hard\"){\n\t\tINITIALCOUNTDOWNVALUE = 45;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t}\n\telse if (DIFFICULTY == \"harder\") {\n\t\tINITIALCOUNTDOWNVALUE = 90;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"visible\";\n\t} \n\telse {\n\t\tINITIALCOUNTDOWNVALUE = 45;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"visible\";\n\t}\n\n\tdocument.getElementById(\"mask1\").style.top = \"-48px\";\n\tdocument.getElementById(\"mask1\").style.left = \"-848px\";\n\tdocument.getElementById(\"thermometer\").style.width = \"790px\";\n\tdocument.getElementById(\"player\").style.top = \"608px\";\n\tdocument.getElementById(\"player\").style.left = \"32px\";\n\t\n\t\n\tdocument.getElementById(\"radish\").style.top = \"256px\";\n\tdocument.getElementById(\"radish\").style.left = \"32px\";\n\tdocument.getElementById(\"watermelon\").style.top = \"32px\";\n\tdocument.getElementById(\"watermelon\").style.left = \"64px\";\n\tdocument.getElementById(\"apple\").style.top = \"608px\";\n\tdocument.getElementById(\"apple\").style.left = \"864px\";\n\tdocument.getElementById(\"carrot\").style.top = \"544px\";\n\tdocument.getElementById(\"carrot\").style.left = \"224px\";\n\tdocument.getElementById(\"beet\").style.top = \"32px\";\n\tdocument.getElementById(\"beet\").style.left = \"416px\";\n\tdocument.getElementById(\"strawberry\").style.top = \"96px\";\n\tdocument.getElementById(\"strawberry\").style.left = \"672px\";\n\tdocument.getElementById(\"peach\").style.top = \"320px\";\n\tdocument.getElementById(\"peach\").style.left = \"576px\";\n\tdocument.getElementById(\"pear\").style.top = \"352px\";\n\tdocument.getElementById(\"pear\").style.left = \"416px\";\n\tdocument.getElementById(\"cherry\").style.top = \"352px\";\n\tdocument.getElementById(\"cherry\").style.left = \"896px\";\n\t\n\t\n\t\n\t\n\t\n\tdocument.getElementById(\"radish\").style.visibility = \"visible\";\n\tdocument.getElementById(\"carrot\").style.visibility = \"visible\";\n\tdocument.getElementById(\"apple\").style.visibility = \"visible\";\n\tdocument.getElementById(\"watermelon\").style.visibility = \"visible\";\n\tdocument.getElementById(\"cherry\").style.visibility = \"visible\";\n\tdocument.getElementById(\"beet\").style.visibility = \"visible\";\n\tdocument.getElementById(\"pear\").style.visibility = \"visible\";\n\tdocument.getElementById(\"peach\").style.visibility = \"visible\";\n\tdocument.getElementById(\"strawberry\").style.visibility = \"visible\";\n\t\n\tdocument.getElementById(\"radishDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"carrotDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"appleDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"watermelonDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"cherryDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"beetDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"pearDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"peachDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"strawberryDisplay\").style.visibility = \"hidden\";\n\n\tdocument.getElementById(\"counter\").innerHTML = INITIALCOUNTDOWNVALUE;\n\tPLAYERMOVEABLE = true;\n\tvar counterSegments = 10;\n\t\n\tCOUNTDOWNINTERVAL = setInterval(decrementTimer, 100);\n\t\n\tfunction decrementTimer() {\n\t\tvar temp2 = parseFloat(document.getElementById(\"thermometer\").style.width);\n\t\tvar decrementAmount = 79/(INITIALCOUNTDOWNVALUE);\n\t\tdocument.getElementById(\"thermometer\").style.width = (temp2 - decrementAmount) + \"px\";\n\t\tcounterSegments--;\n\t\tif (counterSegments == 0) {\n\t\t\tcounterSegments = 10;\n\t\t\tvar temp1 = parseInt(document.getElementById(\"counter\").innerHTML);\n\t\t\ttemp1 = temp1 - 1;\n\t\t\tdocument.getElementById(\"counter\").innerHTML = temp1;\n\t\t}\n\t\t\n\t\tif (temp1 <= (INITIALCOUNTDOWNVALUE / 2) )\n\t\t{\n\t\t\thypeDocument.getElementById(\"thermometer\").style.backgroundColor = \"yellow\";\n\t\t}\n\t\telse if ( temp1 <= (INITIALCOUNTDOWNVALUE / 4) )\n\t\t{\n\t\t\thypeDocument.getElementById(\"thermometer\").style.backgroundColor = \"red\"; \n\t\t}\n\t\tif (temp1 == 0) {\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tPLAYERMOVEABLE = false;\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU LOSE!\";\n\t\t\tdocument.getElementById(\"thermometer\").style.width = \"0px\";\n\t\t\thypeDocument.startTimelineNamed('playerLose');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"30"},{name:"detectKeyDown",source:"function(hypeDocument, element, event) {\t\n\tif (PLAYERMOVEABLE == true) {\n\t\tvar topPosition = parseInt(document.getElementById('player').style.top);\n\t\tvar leftPosition = parseInt(document.getElementById('player').style.left);\n\t\tvar maskTopPosition = parseInt(document.getElementById('mask1').style.top);\n\t\tvar maskLeftPosition = parseInt(document.getElementById('mask1').style.left);\n\t\tvar playerTopGrid = topPosition/32;\n\t\tvar playerLeftGrid = leftPosition/32;\n\t\tvar keyPressed = event.key;\n\t\tvar keyCode = event.keyCode;\n\t\tif (keyCode == \"37\") \t\t\n\t\t{ \n\t\t\tplayerLeftGrid = playerLeftGrid - 1; \n\t\t\thypeDocument.startTimelineNamed(\"turnLeft\"); \n\t\t} // MOVE LEFT\n\t\telse if (keyCode == \"38\") { playerTopGrid = playerTopGrid - 1; } // MOVE UP\n\t\telse if (keyCode == \"39\") \n\t\t{ \n\t\t\tplayerLeftGrid = playerLeftGrid + 1; \n\t\t\thypeDocument.startTimelineNamed(\"turnRight\"); \n\t\t} // MOVE RIGHT\n\t\telse if (keyCode == \"40\")  { playerTopGrid = playerTopGrid + 1; } // MOVE DOWN\n\t\tvar string4 = \"GRID[\" + playerTopGrid + \"][\" + playerLeftGrid + \"]\";\n\t\tvar string5 = eval(string4);\n\t\t\n\t\tconsole.log(string4 + \":\" + string5);\n\t\t\n\t\t// REMINDER:\t\tGRID[14][3] = 2; // BLUE KEY\n\t\t// REMINDER:\t\tGRID[12][11] = 3; // BLUE DOOR\n\t\t// REMINDER:\t\tGRID[18][19] = 4; // RED KEY\n\t\t// REMINDER:\t\tGRID[6][7] = 5; // RED DOOR\n\t\t// REMINDER:\t\tGRID[9][19] = 6; // GREEN KEY\n\t\t// REMINDER:\t\tGRID[11][21] = 7; // GREEN DOOR\n\t\n\t\tif (string5 == 1) { // OPEN PATH\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\thypeDocument.startTimelineNamed('footstep');\n\t\t} else if (string5 == 0) { // OBSTACLE\n\t\t\t\n\t\t} \n\t\telse if (string5 == 2) //radish\n\t\t{ \n\t\t\t\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"radish\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"radishDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 3) //watermelon\n\t\t{ \n\t\t\t\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"watermelon\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"watermelonDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 4) //apple\n\t\t{ \n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"apple\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"appleDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 5) //carrot\n\t\t{ \n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"carrot\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"carrotDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 6) { // beet\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"beet\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"beetDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 7) { // strawberry\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"strawberry\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"strawberryDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 8) { // peach\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"peach\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"peachDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 9) { // pear\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"pear\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"pearDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 10) { // cherry\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"cherry\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"cherryDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[playerTopGrid][playerLeftGrid] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} \n\t\telse if (string5 == 11) \n\t\t{ // CHECKERED FLAG\n\t\t\tPLAYERMOVEABLE = false;\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t\t\thypeDocument.startTimelineNamed('endMaze');\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU WIN!\";\n\t\t\thypeDocument.startTimelineNamed('playerWin');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"33"},{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\tDIFFICULTY = \"easy\";\n\t} \n\telse if(element.id == \"hardButton\")\n\t{\n\t\tDIFFICULTY = \"hard\";\n\t}\n\telse if(element.id == \"harderButton\")\n\t{\n\t\tDIFFICULTY = \"harder\";\n\t}\n\telse {\n\t\tDIFFICULTY = \"nightmare\";\n\t}\n\t\n\thypeDocument.startTimelineNamed('splashStart');\n\t\n\tGRID = [ \t\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0],\n\t\t[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0],\n\t\t[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0],\n\t\t[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0],\n\t\t[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0],\n\t\t[0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0],\n\t\t[0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0],\n\t\t[0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0],\n\t\t[0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0],\n\t\t[0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0],\n\t\t[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0],\n\t\t[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0],\n\t\t[0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0],\n\t\t[0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0],\n\t\t[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],\n\t\t[0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],\n\t\t[0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],\n\t\t[0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n\t];\t\n\t\n\tGRID[1][28] = 11;\n\t\n\t\n\tGRID[8][1] = 2; //radish\n\tGRID[1][2] = 3; //watermelon\n\tGRID[19][27] = 4; //apple\n\tGRID[17][7] = 5; //carrot\n\tGRID[1][13] = 6; //beet\n\tGRID[3][21] = 7; //strawberry\n\tGRID[10][18] = 8; //peach\n\tGRID[11][13] = 9; //pear\n\tGRID[11][28] = 10; //cherry\n\t\n\t/*\n\t\n\tvar fruits = [\"radish\", \"watermelon\", \"apple\", \"carrot\", \"beet\", \"strawberry\", \"peach\", \"pear\", \"cherry\"];\n\t\n\tvar i = 0;\n\t\n\tvar x = 0; \n\tvar y = 0; \n\t\n\tGRID[1][28] = 11;\n\t\n\twhile(i < fruits.length)\n\t{\n\t\tx = Math.floor(Math.random() * 21);\n\t\ty = Math.floor(Math.random() * 30);\n\t\t\n\t\tconsole.log(\"x: \" + x);\n\t\tconsole.log(\"y: \" + y);\n\t\tconsole.log(\"[x][y]:\" + GRID[x][y]);\n\t\t\n\t\tif(GRID[x][y] == 1)\n\t\t{\n\t\t\tGRID[x][y] = i + 2;\n\t\t\tconsole.log(\"new value:\" + GRID[x][y]);\n\t\t\tconsole.log(\"fruits[\" + i + \"]:\" + fruits[i]);\n\t\t\t\n\t\t\tnewTop = (32 * x) + \"px\";\n\t\t\tnewLeft = (32 * y)  + \"px\";\n\t\t\t\n\t\t\tconsole.log(\"left: \" + newTop);\n\t\t\tconsole.log(\"top: \" + newLeft);\n\t\t\t\n\t\t\thypeDocument.getElementById(fruits[i]).style.top = newLeft;\n\t\t\thypeDocument.getElementById(fruits[i]).style.left = newTop;\n\t\t\ti++;\n\t\t}\n\t\t\n\t}//end while\n\t*/\n\t\n}",identifier:"65"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_660"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:1,n:"watermelon.png",g:"153",t:"@1x"},"10":{p:2,n:"badBeep.mp3",g:"36",t:"audio/mpeg"},"19":{p:1,n:"strawberry.png",g:"156",t:"@1x"},"11":{p:2,n:"footstep.mp3",g:"38",t:"audio/mpeg"},"0":{p:1,n:"checkeredFlag.png",g:"34",t:"@1x"},"12":{p:2,n:"pickup.mp3",g:"39",t:"audio/mpeg"},"1":{p:2,n:"endMaze.mp3",g:"40",t:"audio/mpeg"},"20":{p:1,n:"peach.png",g:"159",t:"@1x"},"2":{p:2,n:"playerWin.mp3",g:"53",t:"audio/mpeg"},"13":{p:2,n:"doorOpen.mp3",g:"37",t:"audio/mpeg"},"3":{p:2,n:"playerLose.mp3",g:"58",t:"audio/mpeg"},"21":{p:1,n:"cherry.png",g:"162",t:"@1x"},"14":{p:2,n:"creditRoll.mp3",g:"89",t:"audio/mpeg"},"4":{p:2,n:"charge.mp3",g:"72",t:"audio/mpeg"},"5":{p:1,n:"mask1.png",g:"96",t:"@1x"},"15":{p:1,n:"radish-1.png",g:"144",t:"@1x"},"22":{p:1,n:"beet.png",g:"165",t:"@1x"},"6":{p:1,n:"player-1.png",g:"100",t:"@1x"},"23":{p:1,n:"pear.png",g:"168",t:"@1x"},"16":{p:1,n:"apple-1.png",g:"147",t:"@1x"},"7":{p:1,n:"radish.png",g:"102",t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"carrot.png",g:"104",t:"@1x"},"24":{p:1,n:"map1.png",g:"171",t:"@1x"},"17":{p:1,n:"carrot-1.png",g:"150",t:"@1x"},"9":{p:1,n:"apple.png",g:"106",t:"@1x"}},l,["<link href='https://fonts.googleapis.com/css?family=Ubuntu+Condensed&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"splash",o:"59",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"73",X:[2]}],
[{o:"61",p:"600px",cA:false,Y:1024,Z:768,L:[],c:"#114123",bY:1,d:1024,U:{},T:{"66_hover":{q:false,z:1,i:"66_hover",n:"66_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#AF8B57",o:"177"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#AF8B57",o:"177"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#AF8B57",o:"177"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#AF8B57",o:"177"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#AF8B57",o:"177"},{y:1,i:"A",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"177",f:"c"}],f:30,b:[]},"174_hover":{q:false,z:1,i:"174_hover",n:"174_hover",a:[{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#AF8B57",o:"185"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#AF8B57",o:"185"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#AF8B57",o:"185"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#AF8B57",o:"185"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#AF8B57",o:"185"},{y:1,i:"D",s:"#FF2600",z:0,o:"185",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"185",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"185",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"185",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"185",f:"c"}],f:30,b:[]},"64_hover":{q:false,z:1,i:"64_hover",n:"64_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#AF8B57",o:"180"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#AF8B57",o:"180"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#AF8B57",o:"180"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#AF8B57",o:"180"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#AF8B57",o:"180"},{y:1,i:"G",s:"#FF2600",z:0,o:"180",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"180",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"180",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"180",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"180",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"173_hover":{q:false,z:1,i:"173_hover",n:"173_hover",a:[{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#AF8B57",o:"184"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#AF8B57",o:"184"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#AF8B57",o:"184"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#AF8B57",o:"184"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#AF8B57",o:"184"},{y:1,i:"D",s:"#FF2600",z:0,o:"184",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"184",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"184",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"184",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"184",f:"c"}],f:30,b:[]},"129":{q:false,z:5.15,i:"129",n:"splashStart",a:[{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"180"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"185"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"184"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"177"},{f:"c",y:0,z:1,i:"e",e:0,s:1,o:"176"},{f:"c",y:0,z:4,i:"e",e:0,s:0,o:"183"},{f:"c",y:0,z:3,i:"e",e:0,s:0,o:"175"},{f:"c",y:0,z:2,i:"e",e:0,s:0,o:"179"},{f:"c",y:0,z:1,i:"e",e:0,s:0,o:"181"},{f:"c",y:1,z:1,i:"cQ",e:0,s:1,o:"181"},{f:"c",y:1,z:1,i:"cR",e:0,s:1,o:"181"},{y:1,i:"e",s:0,z:0,o:"185",f:"c"},{y:1,i:"e",s:0,z:0,o:"184",f:"c"},{f:"c",y:1,z:0.01,i:"e",e:1,s:0,o:"181"},{y:1,i:"e",s:0,z:0,o:"176",f:"c"},{y:1,i:"e",s:0,z:0,o:"180",f:"c"},{y:1,i:"e",s:0,z:0,o:"177",f:"c"},{y:1.01,i:"e",s:1,z:0,o:"181",f:"c"},{f:"c",y:2,z:1,i:"cQ",e:0,s:1,o:"179"},{f:"c",y:2,z:1,i:"cR",e:0,s:1,o:"179"},{y:2,i:"cQ",s:0,z:0,o:"181",f:"c"},{y:2,i:"cR",s:0,z:0,o:"181",f:"c"},{f:"c",y:2,z:0.01,i:"e",e:1,s:0,o:"179"},{y:2.01,i:"e",s:1,z:0,o:"179",f:"c"},{f:"c",y:3,z:1,i:"cR",e:0,s:1,o:"175"},{f:"c",y:3,z:1,i:"cQ",e:0,s:1,o:"175"},{y:3,i:"cQ",s:0,z:0,o:"179",f:"c"},{y:3,i:"cR",s:0,z:0,o:"179",f:"c"},{f:"c",y:3,z:0.01,i:"e",e:1,s:0,o:"175"},{y:3.01,i:"e",s:1,z:0,o:"175",f:"c"},{f:"c",y:4,z:1,i:"cQ",e:0,s:1,o:"183"},{f:"c",y:4,z:1,i:"cR",e:0,s:1,o:"183"},{y:4,i:"cR",s:0,z:0,o:"175",f:"c"},{y:4,i:"cQ",s:0,z:0,o:"175",f:"c"},{f:"c",y:4,z:0.01,i:"e",e:1,s:0,o:"183"},{y:4.01,i:"e",s:1,z:0,o:"183",f:"c"},{y:5,i:"cQ",s:0,z:0,o:"183",f:"c"},{y:5,i:"cR",s:0,z:0,o:"183",f:"c"},{f:"c",p:2,y:5.15,z:0,i:"ActionHandler",s:{a:[{d:1.1,p:1,g:1,e:"1"}]},o:"129"}],f:30,b:[]}},bZ:180,O:["182","178","183","175","179","181","176","180","177","185","184"],n:"Untitled Layout","_":0,v:{"177":{b:600,z:8,K:"Solid",c:142,L:"Solid",d:57,aS:6,M:8,e:1,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,aV:6,i:"hardButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#AF8B57",B:"#AF8B57",aM:"66_hover",r:"inline",C:"#AF8B57",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#AF8B57",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#AF8B57",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:270,y:"preserve",J:"Solid"},"180":{b:600,z:7,K:"Solid",c:142,L:"Solid",d:57,aS:6,M:8,e:1,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,aV:6,i:"easyButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#AF8B57",B:"#AF8B57",aM:"64_hover",r:"inline",C:"#AF8B57",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#AF8B57",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#AF8B57",aP:"pointer",w:"EASY",x:"visible",I:"Solid",a:56,y:"preserve",J:"Solid"},"183":{aU:8,bB:6,G:"#AF8B57",c:738,aV:8,r:"inline",d:533,e:0,s:"'Ubuntu Condensed'",bC:6,cQ:1,t:500,Y:500,cR:1,Z:"break-word",w:"GO!",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:6,aS:8,aT:8,a:135,bA:"#7C5432",F:"center",b:219},"176":{aU:8,bB:1,G:"#AF8B57",c:1008,aV:8,r:"inline",d:254,e:1,s:"'Ubuntu Condensed'",bC:1,t:48,Y:79,Z:"break-word",i:"title2",w:"Use the arrow keys to move through the maze<br>\n and get to the farmer's market in time!\n<br>\nTry to pick up bonus crops on your way.",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#7C5432",F:"center",b:280},"179":{aU:8,bB:6,G:"#AF8B57",c:524,aV:8,r:"inline",d:533,e:0,s:"'Ubuntu Condensed'",bC:6,cQ:1,t:500,Y:500,cR:1,Z:"break-word",w:"2",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:4,aS:8,aT:8,a:242,bA:"#7C5432",F:"center",b:219},"182":{aU:8,bB:4,G:"#AF8B57",c:885,aV:8,r:"inline",d:184,bC:4,s:"'Ubuntu Condensed'",t:144,u:"normal",Z:"break-word",v:"normal",i:"title1",w:"FARM FRENZY",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:123,bA:"#7C5432",F:"center",b:50},"185":{b:600,z:10,K:"Solid",c:156,L:"Solid",d:57,aS:6,M:8,e:1,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,aV:6,i:"harderButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#AF8B57",B:"#AF8B57",aM:"174_hover",r:"inline",C:"#AF8B57",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#AF8B57",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#AF8B57",aP:"pointer",w:"HARDER",x:"visible",I:"Solid",a:484,y:"preserve",J:"Solid"},"175":{aU:8,bB:6,G:"#AF8B57",c:524,aV:8,r:"inline",d:533,e:0,s:"'Ubuntu Condensed'",bC:6,cQ:1,t:500,Y:500,cR:1,Z:"break-word",w:"1\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:5,aS:8,aT:8,a:242,bA:"#7C5432",F:"center",b:219},"178":{h:"100",p:"no-repeat",x:"visible",a:42,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:14,k:"div",b:88,d:123,c:123},"181":{aU:8,bB:6,G:"#AF8B57",c:524,aV:8,r:"inline",d:533,e:0,s:"'Ubuntu Condensed'",bC:6,cQ:1,t:500,Y:500,cR:1,Z:"break-word",i:"title3",w:"3",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:242,bA:"#7C5432",F:"center",b:219},"184":{b:600,z:9,K:"Solid",c:243,L:"Solid",d:57,aS:6,M:8,e:1,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,aV:6,i:"nightmareButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#AF8B57",B:"#AF8B57",aM:"173_hover",r:"inline",C:"#AF8B57",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#AF8B57",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#AF8B57",aP:"pointer",w:"NIGHTMARE",x:"visible",I:"Solid",a:697,y:"preserve",J:"Solid"}}},{A:{a:[{p:4,h:"30"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,C:{a:[{p:4,h:"33"}]},c:"#114123",L:[],bY:1,d:1024,U:{},T:{"57":{q:false,z:6.15,i:"57",n:"playerLose",a:[{f:"g",y:0,z:1.15,i:"b",e:32,s:-576,o:"201"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false}]},o:"57"},{y:1.15,i:"b",s:32,z:0,o:"201",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"204"},{y:4.15,i:"e",s:1,z:0,o:"204",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"205"},{y:6.15,i:"e",s:1,z:0,o:"205",f:"c"}],f:30,b:[]},"42":{q:false,z:0,i:"42",n:"doorOpen",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"37",q:false}]},o:"42"}],f:30,b:[]},"49_hover":{q:false,z:1,i:"49_hover",n:"49_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000",o:"205"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000",o:"205"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000",o:"205"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000",o:"205"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000",o:"205"},{y:1,i:"A",s:"#FF2600",z:0,o:"205",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"205",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"205",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"205",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"205",f:"c"}],f:30,b:[]},"43":{q:false,z:0,i:"43",n:"endMaze",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"40",q:false}]},o:"43"}],f:30,b:[]},"48_hover":{q:false,z:1,i:"48_hover",n:"48_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000",o:"204"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000",o:"204"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000",o:"204"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000",o:"204"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000",o:"204"},{y:1,i:"G",s:"#FF2600",z:0,o:"204",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"204",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"204",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"204",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"204",f:"c"}],f:30,b:[]},"141":{q:false,z:0.01,i:"141",n:"turnLeft",a:[{y:0.01,i:"aY",s:180,z:0,o:"217",f:"c"}],f:30,b:[]},"44":{q:false,z:0,i:"44",n:"footstep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"38",q:false}]},o:"44"}],f:30,b:[]},"45":{q:false,z:0,i:"45",n:"pickup",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"39",q:false}]},o:"45"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"72",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]},"41":{q:false,z:0,i:"41",n:"badBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"36",q:false}]},o:"41"}],f:30,b:[]},"142":{q:false,z:0.01,i:"142",n:"turnRight",a:[{f:"c",p:2,y:0.01,z:0,i:"ActionHandler",s:{a:[{}]},o:"142"},{y:0.01,i:"aY",s:0,z:0,o:"217",f:"c"}],f:30,b:[]},"52":{q:false,z:6.15,i:"52",n:"playerWin",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"53",q:false}]},o:"52"},{f:"f",y:0,z:1.15,i:"b",e:32,s:-576,o:"201"},{y:1.15,i:"b",s:32,z:0,o:"201",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"204"},{y:4.15,i:"e",s:1,z:0,o:"204",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"205"},{y:6.15,i:"e",s:1,z:0,o:"205",f:"c"}],f:30,b:[]}},bZ:180,O:["202","201","203","204","205","195","194","206","218","211","193","209","191","198","210","189","217","197","219","190","187","208","188","216","213","199","214","215","212","196","192","207","200","186"],n:"Untitled Layout","_":1,v:{"207":{aU:8,G:"#FFF",c:114,aV:8,r:"inline",d:84,s:"'Ubuntu Condensed'",t:64,Z:"break-word",i:"counter",w:"60",j:"absolute",x:"visible",k:"div",y:"preserve",z:18,aS:8,aT:8,a:857,F:"center",b:672},"191":{h:"153",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:41,i:"watermelon",b:0,d:32,k:"div",c:32},"199":{h:"159",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:46,i:"peachDisplay",b:301,d:50,k:"div",c:50},"213":{h:"162",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:48,i:"cherryDisplay",b:224,d:50,k:"div",c:50},"186":{c:790,d:55,I:"None",J:"None",K:"None",g:"#00F900",L:"None",M:0,i:"thermometer",N:0,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:0,O:0,C:"#FF2600",z:13,k:"div",D:"#FF2600",a:56,b:695},"200":{c:789,d:42,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:10,i:"border4",N:10,aI:15,A:"#114123",x:"visible",j:"absolute",B:"#114123",O:10,P:10,C:"#114123",z:14,aJ:15,D:"#114123",aK:15,k:"div",a:48,aL:15,b:694},"208":{h:"34",p:"no-repeat",x:"visible",a:895,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:25,i:"checkeredFlag",b:32,d:32,k:"div",c:32},"192":{c:1024,d:96,I:"None",J:"None",K:"None",g:"#7C5432",L:"None",M:0,i:"bottomBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:4,k:"div",D:"#D8DDE4",a:0,b:672},"214":{h:"168",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:52,i:"pearDisplay",b:372,d:50,k:"div",c:50},"187":{h:"147",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:37,i:"appleDisplay",b:7,d:50,k:"div",c:50},"201":{x:"visible",k:"div",c:895,d:640,z:54,i:"gameOverBox",a:32,j:"absolute",b:-576},"209":{h:"156",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:43,i:"strawberry",b:0,d:32,k:"div",c:32},"193":{h:"159",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:45,i:"peach",b:0,d:32,k:"div",c:32},"215":{h:"144",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:36,i:"radishDisplay",b:468,d:50,k:"div",c:50},"188":{h:"165",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:50,i:"beetDisplay",b:82,d:50,k:"div",c:50},"202":{c:895,d:640,I:"None",e:1,J:"None",K:"None",L:"None",M:0,i:"background1",w:"",bF:"201",A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",N:0,O:0,C:"#0433FF",P:0,z:1,D:"#0433FF",m:"#7C5432",l:0,n:"rgba(175, 139, 87, 0.870)",k:"div",a:0,b:0},"194":{x:"hidden",k:"div",c:960,d:672,z:53,i:"maskBox",r:"inline",a:0,j:"absolute",b:1},"216":{h:"150",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:40,i:"carrotDisplay",b:148,d:50,k:"div",c:50},"189":{h:"102",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:7,i:"radish",b:0,d:32,k:"div",c:32},"203":{aU:8,bB:2,G:"#D4AA53",c:816,aV:8,r:"inline",d:124,bC:2,s:"'Ubuntu Condensed'",t:96,Z:"break-word",i:"gameOverMessage",w:"MESSAGE",bF:"201",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#977127",F:"center",b:76},"195":{w:"",h:"96",p:"repeat",x:"visible",a:0,dB:"img",b:0,j:"absolute",r:"inline",z:1,bF:"194",i:"mask1",d:1280,k:"div",c:1792},"217":{h:"100",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:6,b:0,i:"player",d:32,k:"div",aY:0,c:32},"204":{b:449,z:3,K:"Solid",c:218,L:"Solid",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#FFF",aU:6,P:10,bF:"201",aV:6,i:"playAgainButton",j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#000",B:"#000",aM:"48_hover",r:"inline",C:"#000",Z:"break-word",s:"'Ubuntu Condensed'",D:"#000",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#000",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:119,y:"preserve",J:"Solid"},"196":{h:"153",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:42,i:"watermelonDisplay",b:606,d:50,k:"div",c:50},"210":{h:"106",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:16,i:"apple",b:0,d:32,k:"div",c:32},"218":{h:"165",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:49,i:"beet",b:0,d:32,k:"div",c:32},"205":{b:449,z:5,K:"Solid",c:218,L:"Solid",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#FFF",aU:6,P:10,bF:"201",aV:6,i:"creditsButton",j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#000",B:"#000",aM:"49_hover",r:"inline",C:"#000",Z:"break-word",s:"'Ubuntu Condensed'",D:"#000",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"73"}]},G:"#000",aP:"pointer",w:"CREDITS",x:"visible",I:"Solid",a:574,y:"preserve",J:"Solid"},"197":{w:"",h:"171",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:5,b:0,i:"map1",d:672,k:"div",c:960},"211":{h:"162",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:47,i:"cherry",b:0,d:32,k:"div",c:32},"219":{aU:8,bB:0,G:"#3F160D",b:1,aT:8,aV:8,r:"inline",d:77,bC:0,s:"Impact,'Arial Narrow Bold',Sans-Serif",X:-0.413352,gg:"0",t:64,Y:59,c:66,Z:"break-word",w:"B<br>\nO<br>\nN<br>\nU<br>\nS<br> \n<br>\nC<br>\nR<br>\nO<br>\nP<br>\nS",j:"absolute",x:"visible",aZ:3,k:"div",y:"preserve",z:2,Q:0,aS:8,R:"#000",E:-0.213068,S:0,a:951,bA:"#000",T:0,F:"center"},"206":{h:"168",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:51,i:"pear",b:0,d:32,k:"div",c:32},"190":{c:64,d:768,I:"None",J:"None",K:"None",g:"#7C5432",L:"None",M:0,i:"rightBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:960,b:0},"198":{h:"104",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:17,i:"carrot",b:0,d:32,k:"div",c:32},"212":{h:"156",p:"no-repeat",x:"visible",a:967,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:44,i:"strawberryDisplay",b:534,d:50,k:"div",c:50}}},{o:"84",p:"600px",B:{a:[{p:13,o:"89",q:false}]},cA:false,Z:768,Y:1024,c:"#114123",L:[],bY:1,d:1024,U:{},T:{"79_hover":{q:false,z:1,i:"79_hover",n:"79_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#AF8B57",o:"225"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#AF8B57",o:"225"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#AF8B57",o:"225"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#AF8B57",o:"225"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#AF8B57",o:"225"},{y:1,i:"G",s:"#FF2600",z:0,o:"225",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"225",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"225",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"225",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"225",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"89",q:true}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:0,z:20,i:"b",e:-1000,s:0,o:"222"},{y:20,i:"b",s:-1000,z:0,o:"222",f:"c"}],f:30,b:[]}},bZ:180,O:["220","224","222","221","226","223","225"],n:"Untitled Layout","_":2,v:{"226":{aU:8,bB:1,G:"#AF8B57",c:396,aV:8,r:"inline",d:884,e:1,s:"'Ubuntu Condensed'",bC:1,t:48,Y:96,Z:"break-word",i:"credits3",w:"Designed by<br>\nJavascript by<br>\nDeveloped at<br>\nAudio Resources<br>\nUsability Testers<br>\n<br>\nSpecial Thanks to<br>\n<br>\n<br>\n\n",bF:"222",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:100,bA:"#7C5432",F:"left",b:120},"222":{x:"visible",k:"div",c:1024,d:1200,z:1,i:"creditRoll",a:0,j:"absolute",bF:"221",b:0},"225":{b:1070,z:4,K:"Solid",c:372,L:"Solid",d:62,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,bF:"222",aV:6,i:"restartButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#AF8B57",B:"#AF8B57",aM:"79_hover",r:"inline",C:"#AF8B57",Z:"break-word",s:"'Ubuntu Condensed'",D:"#AF8B57",t:48,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#AF8B57",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:312,y:"preserve",J:"Solid"},"221":{x:"hidden",k:"div",c:1024,d:340,z:2,i:"outerContainer",a:0,j:"absolute",b:300},"224":{aU:8,bB:1,G:"#AF8B57",c:1008,aV:8,r:"inline",d:84,e:1,s:"'Ubuntu Condensed'",bC:1,t:48,Z:"break-word",i:"credits2",w:"CREDITS\n",bF:"222",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,bA:"#7C5432",F:"center",b:0},"220":{aU:8,bB:4,G:"#AF8B57",c:1008,aV:8,r:"inline",d:184,bC:4,s:"'Ubuntu Condensed'",t:144,Z:"break-word",i:"credits1",w:"FARM FRENZY\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,bA:"#7C5432",F:"center",b:50},"223":{aU:8,bB:1,G:"#AF8B57",c:396,aV:8,r:"inline",d:884,e:1,s:"'Ubuntu Condensed'",bC:1,t:48,Y:96,Z:"break-word",i:"credits4",w:"Alicen Zschokke<br>\nDarren Pearson<br>\nSaint Paul College<br>\nsawsquarenoise<br>\nPatrick Zschokke<br>\nAnne Zschokke<br>\nJon Hokanson<br>\nDaniel Vitelli<br>\nBill Zschokke<br>\n\n",bF:"222",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:512,bA:"#7C5432",F:"left",b:120}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]},g:{p:0,q:[[0,0,0.0425,0.22,0.089,1.373,0.169,1.373],[0.169,1.373,0.223,1.373,0.2656,0.868,0.356,0.868],[0.356,0.868,0.4085,0.868,0.457,1.047,0.544,1.047],[0.544,1.047,0.5976,1.047,0.637,0.984,0.731,0.984],[0.731,0.984,0.794,0.984,0.829,1.006,0.919,1.006],[0.919,1.006,0.953,1.006,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
