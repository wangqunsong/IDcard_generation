function ock(){
	var rNo = document.getElementById("rNo");
	var selp = document.getElementById("p");
	var selc = document.getElementById("c");
	var selr = document.getElementById("r").value;
	var sely = document.getElementById("y").value;
	var selm = padLeft(document.getElementById("m").value,2);
	var seld = padLeft(document.getElementById("d").value,2);
	var selg = GetRadioValue("g");
	var seln = Number(document.getElementById("n").value);
	var s='110000199001015930';
	var d8;
	d8= sely + selm + seld;
	rNo.innerHTML=Get_CarNo(selr,d8,selg,seln);
}


//获取num个身份证
function Get_CarNo(d6,b8,sex,num){
	var i = 0;
	var q17;
	var reCarNo = '';
	while (i<num){
		sjs = getRandom(100,999);
		if (sex==1){
			if ((sjs%2)!==0){
				q17 = d6 + b8 + sjs;
				i++;
				reCarNo = reCarNo + "<div class='Noid'>" + to18(q17) + "<br/></div>"
			}
		} else {
			if ((sjs%2)==0){
				q17 = d6 + b8 + sjs;
				i++;
				reCarNo = reCarNo + "<div class='Noid'>" + to18(q17) + "<br/></div>"
			}
		}
	}
	return reCarNo;
}

//获取radio选中值
function GetRadioValue(RadioName){
    var obj;   
    obj=document.getElementsByName(RadioName);
    if(obj!=null){
        var i;
        for(i=0;i<obj.length;i++){
            if(obj[i].checked){
                return obj[i].value;           
            }
        }
    }
    return null;
}


//不足位前面加 0
function padLeft(str, lenght) {
	if (str.length >= lenght)
		return str;
	else
		return padLeft("0" + str, lenght);
}

function getRandom(m,n){
	return Math.round((Math.random()*(n-m)+m))
}
function strsub(str,i){
	return str.substr(i-1,1)
}
function to18(str17){
	var num = 0;
	var wei;
	var xis;
	var jmod = 0;
	for (var i=1;i<=17;i++){
		wei = Number(strsub(str17,i));
		xis = Math.pow(2,18-i) % 11;
		num = num + (wei*xis)
	}
	jmod = num % 11
	switch (jmod){
		case 0:
			restr = '1';
			break;
		case 1:
			restr = '0';
			break;
		case 2:
			restr = 'X';
			break;
		case 3:
			restr = '9';
			break;
		case 4:
			restr = '8';
			break;
		case 5:
			restr = '7';
			break;
		case 6:
			restr = '6';
			break;
		case 7:
			restr = '5';
			break;
		case 8:
			restr = '4';
			break;
		case 9:
			restr = '3';
			break;
		case 10:
			restr = '2';
			break;
	}
	return str17+restr;
}