function YYYYMMDDstart(form,year,month,day)  
    　　{  
        　　 MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
        　　 //先给年下拉框赋内容  
        　　 var y = new Date().getFullYear();  
        　　 for (var i = (y-1); i > (y-100); i--) //以今年为准，前30年，后30年  
        　　 year.options.add(new Option(i,i));  
        　　 //赋月份的下拉框  
        　　 for (var i = 2; i < 13; i++)  
        　　 month.options.add(new Option(i,i));  
        　　 year.value = y;  
        　　 month.value = new Date().getMonth() + 1;  
        　　 var n = MonHead[new Date().getMonth()];  
        　　 if (new Date().getMonth() ==1 && IsPinYear(year.options[year.selectedIndex].value)) n++;  
        　　 writeDay(n,day); //赋日期下拉框Author:meizz  
        　　 day.value = new Date().getDate();  
    　　}  
    　　  
      
    function YYYYDD(str,month,day) //年发生变化时日期发生变化(主要是判断闰平年)  
    　　{  
        　　 var MMvalue = month.options[month.selectedIndex].value;  
        　　 if (MMvalue == "" ){ var e = day; optionsClear(e); return;}  
        　　 var n = MonHead[MMvalue - 1];  
        　　 if (MMvalue ==2 && IsPinYear(str)) n++;  
        　　 writeDay(n,day)  
    　　}  
    　　  
      
    function MMDD(str,year,day) //月发生变化时日期联动  
    　　{  
    　　 var YYYYvalue = year.options[year.selectedIndex].value;  
    　　 if (YYYYvalue == "" ){ var e = day; optionsClear(e); return;}  
    　　 var n = MonHead[str - 1];  
    　　 if (str ==2 && IsPinYear(YYYYvalue)) n++;  
    　　 writeDay(n,day)  
    　　}  
    　　function writeDay(n,day) //据条件写日期的下拉框  
    　　{  
    　　 var e = day; optionsClear(e);  
    　　 for (var i=2; i<(n+1); i++)  
    　　 e.options.add(new Option(i,i));  
    　　}  
    　　function IsPinYear(year)//判断是否闰平年  
    　　{ return(0 == year%4 && (year%100 !=0 || year%400 == 0));}  
    　　function optionsClear(e)  
    　　{  
    　　 for (var i=e.options.length; i>0; i--)  
    　　 e.remove(i);  
    　　}  