const a1_0xff2f=['#spinner','getMonth','px;\x22>ACM\x20Meeting</div>','August','.month-by-month','getDate','\x22\x20class=\x22active-date\x20valid\x22>','show','#month','\x22\x20class=\x22valid\x22>','April','.scale\x20div','</div>','log','July','remove','px;\x20height:\x20','.week-by-week','#date','empty','getFullYear','getDay','<div\x20class=\x22week-event\x22\x20style=\x22margin-top:','.valid','attr','input[name=\x27selector\x27]:checked','append','.scale','<div\x20id=\x22','September','May','abs','<div\x20class=\x22invalid\x22>','December','slice','November','January','.row','hide','outerHeight','March','forEach','<div\x20id=\x22row-','undefined','click','#row-'];(function(_0x110c07,_0x35808c){const _0x4fdc6c=function(_0x4d0bd5){while(--_0x4d0bd5){_0x110c07['push'](_0x110c07['shift']());}};_0x4fdc6c(++_0x35808c);}(a1_0xff2f,0x125));const a1_0x311a=function(_0x110c07,_0x35808c){_0x110c07=_0x110c07-0x0;let _0x4fdc6c=a1_0xff2f[_0x110c07];return _0x4fdc6c;};const today=new Date();const months=[a1_0x311a('0x13'),'Febuary',a1_0x311a('0x17'),a1_0x311a('0x27'),a1_0x311a('0xd'),'June',a1_0x311a('0x2b'),a1_0x311a('0x20'),a1_0x311a('0xc'),'October',a1_0x311a('0x12'),a1_0x311a('0x10')];let currentMonth=today[a1_0x311a('0x1e')]();let currentYear=today[a1_0x311a('0x3')]();let currentDate=today[a1_0x311a('0x22')]()-0x1;let week=[0x0,0x0,0x0,0x0,0x0,0x0,0x0];$('.scale')['hide']();showMonthCalendar();$('#by-week')[a1_0x311a('0x1b')](_0x49c2a9=>{clear();$(a1_0x311a('0xa'))[a1_0x311a('0x24')]();showWeekCalendar();});$('#by-month')['click'](_0x12bc41=>{clear();$(a1_0x311a('0xa'))[a1_0x311a('0x15')]();showMonthCalendar();});function clear(){$(a1_0x311a('0x14'))['remove']();$(a1_0x311a('0x21'))[a1_0x311a('0x2')]();$('#month')[a1_0x311a('0x2')]();}function daysInMonth(){return 0x20-new Date(currentYear,currentMonth,0x20)['getDate']();}function daysInNextMonth(){if(currentMonth-0x1<0x0){return 0x20-new Date(currentYear-0x1,0xb,0x20)[a1_0x311a('0x22')]();}else{return 0x20-new Date(currentYear,currentMonth-0x1,0x20)[a1_0x311a('0x22')]();}}function daysInPreviousMonth(){if(currentMonth-0x1<0xb){return 0x20-new Date(currentYear+0x1,0x0,0x20)['getDate']();}else{return 0x20-new Date(currentYear,currentMonth-0x1,0x20)[a1_0x311a('0x22')]();}}function next(){if($('input[name=\x27selector\x27]:checked')['val']()==='week'){showWeekCalendar(!![]);}else{clear();currentYear=currentMonth===0xb?currentYear+0x1:currentYear;currentMonth=(currentMonth+0x1)%0xc;showMonthCalendar();}}function previous(){if(Math[a1_0x311a('0xe')](week[0x0]-week[0x6])>0x7){if(currentMonth===0x0){currentMonth=0xb;currentYear--;}else{currentMonth--;}}if($(a1_0x311a('0x8'))['val']()==='week'){showWeekCalendar(![]);}else{clear();currentYear=currentMonth===0x0?currentYear-0x1:currentYear;currentMonth=currentMonth===0x0?0xb:currentMonth-0x1;showMonthCalendar();}}function changeHeader(_0x158922,_0x2bf6eb){$(a1_0x311a('0x25'))[a1_0x311a('0x2')]();$('#month')[a1_0x311a('0x9')](months[_0x158922]+'\x20'+_0x2bf6eb);}function addToHeader(_0x45c6e7,_0x2bc7f0){$(a1_0x311a('0x25'))[a1_0x311a('0x9')]('/'+months[_0x45c6e7]+'\x20'+_0x2bc7f0);}function changeAndCheck(_0x3a6b95,_0x4ced2b){_0x3a6b95=_0x3a6b95+_0x4ced2b;if(_0x3a6b95<0x0){changeHeader(currentMonth,currentYear);if(currentMonth===0x0){currentMonth=0xb;currentYear--;}else{currentMonth--;}_0x3a6b95+=daysInMonth();addToHeader(currentMonth,currentYear);}else if(_0x3a6b95>daysInMonth()){changeHeader(currentMonth,currentYear);_0x3a6b95-=daysInMonth();if(currentMonth===0xb){currentMonth=0x0;currentYear++;}else{currentMonth++;}addToHeader(currentMonth,currentYear);}return _0x3a6b95;}function printWeek(_0x431e3d){if(today[a1_0x311a('0x22')]()===_0x431e3d&today[a1_0x311a('0x1e')]()===currentMonth&&today[a1_0x311a('0x3')]()===currentYear){$('#0')[a1_0x311a('0x9')](a1_0x311a('0xb')+_0x431e3d+a1_0x311a('0x23')+_0x431e3d);}else{$('#0')[a1_0x311a('0x9')](a1_0x311a('0xb')+_0x431e3d+a1_0x311a('0x26')+_0x431e3d);}$('#0')['append'](a1_0x311a('0x29'));$('#'+_0x431e3d)[a1_0x311a('0x9')](a1_0x311a('0x5')+0x9*$(a1_0x311a('0x28'))['outerHeight']()+a1_0x311a('0x2d')+$(a1_0x311a('0x28'))[a1_0x311a('0x16')]()+a1_0x311a('0x1f'));}function showWeekCalendar(_0xc916fb){$(a1_0x311a('0x14'))[a1_0x311a('0x2c')]();$(a1_0x311a('0x0'))[a1_0x311a('0x9')]('<div\x20id=\x220\x22\x20class=\x22row\x22>');if(typeof _0xc916fb===a1_0x311a('0x1a')){if(week[0x0]===0x0){showWeekCalendar(!![]);}else{if(Math[a1_0x311a('0xe')](week[0x0]-week[0x6])>0x7){changeHeader(currentMonth-0x1,currentYear);addToHeader(currentMonth,currentYear);}else{changeHeader(currentMonth,currentYear);}week[a1_0x311a('0x18')](_0x1ec787=>printWeek(_0x1ec787));}return;}let _0x26e04e=today['getDate']()-today[a1_0x311a('0x4')]();if(_0x26e04e<0x0){if(currentMonth===0x0){currentMonth=0xb;currentYear--;_0x26e04e=daysInMonth+_0x26e04e;}else{currentMonth--;_0x26e04e=daysInMonth+_0x26e04e;}}if(week[0x0]!==0x0){_0x26e04e=_0xc916fb?changeAndCheck(week[0x6],0x1):changeAndCheck(week[0x0],-0x7);}for(let _0x2c3342=0x0;_0x2c3342<0x7;_0x2c3342++){week[_0x2c3342]=_0x26e04e;printWeek(_0x26e04e);if(_0x2c3342!==0x6){_0x26e04e=changeAndCheck(_0x26e04e,0x1);}}if(Math['abs'](week[0x0]-week[0x6])<=0x7){changeHeader(currentMonth,currentYear);}$(a1_0x311a('0x0'))[a1_0x311a('0x9')](a1_0x311a('0x29'));}function printMonth(_0x6e4d2f,_0x4f4923,_0x19c7f6,_0x520a0e){if(_0x6e4d2f&&_0x4f4923){$('#row-'+_0x19c7f6)[a1_0x311a('0x9')](a1_0x311a('0xb')+_0x520a0e+'\x22\x20class=\x22active-date\x20valid\x22>'+_0x520a0e);}else if(_0x4f4923){$(a1_0x311a('0x1c')+_0x19c7f6)[a1_0x311a('0x9')]('<div\x20id=\x22'+_0x520a0e+'\x22\x20class=\x22valid\x22>'+_0x520a0e);}else{$('#row-'+_0x19c7f6)[a1_0x311a('0x9')](a1_0x311a('0xf')+_0x520a0e);}$(a1_0x311a('0x1c')+_0x19c7f6)[a1_0x311a('0x9')](a1_0x311a('0x29'));if(_0x4f4923){$('#'+_0x520a0e)['append']('<div\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22top\x22\x20title=\x22Tooltip\x20on\x20top\x22\x20class=\x22month-event\x22>3pm\x20-\x20ACM\x20Meeting</div>');}}function showMonthCalendar(){changeHeader(currentMonth,currentYear);let _0x43108e=new Date(currentYear,currentMonth)['getDay']();let _0x264494=$(a1_0x311a('0x21'));let _0x4b7e72=0x1;for(let _0x3031fe=0x0;_0x3031fe<0x6;_0x3031fe++){if(_0x4b7e72<=daysInMonth()){_0x264494[a1_0x311a('0x9')](a1_0x311a('0x19')+_0x3031fe+'\x22\x20class=\x22row\x22>');}let _0x3bfa29=0x1;for(let _0x50fc65=0x0;_0x50fc65<0x7;_0x50fc65++){if(_0x3031fe===0x0&&_0x50fc65<_0x43108e){printMonth(![],![],_0x3031fe,daysInPreviousMonth()-(_0x43108e-_0x50fc65)+0x1);}else if(_0x4b7e72>daysInMonth()){printMonth(![],![],_0x3031fe,_0x3bfa29);_0x3bfa29++;}else{if(_0x4b7e72===today['getDate']()&&currentYear===today[a1_0x311a('0x3')]()&&currentMonth===today['getMonth']()){printMonth(!![],!![],_0x3031fe,_0x4b7e72);}else{printMonth(![],!![],_0x3031fe,_0x4b7e72);}_0x4b7e72++;}}if(_0x4b7e72<=daysInMonth()){_0x264494[a1_0x311a('0x9')](a1_0x311a('0x29'));}if(_0x3031fe===0x5){$(a1_0x311a('0x1d'))['hide']();}}}$(a1_0x311a('0x6'))['on'](a1_0x311a('0x1b'),_0x313cc6=>{console[a1_0x311a('0x2a')](_0x313cc6);let _0x1426cf=$(_0x313cc6['target'])[a1_0x311a('0x7')]('id');let _0x5c5235=('0'+_0x1426cf)[a1_0x311a('0x11')](-0x2);let _0x3d2774=('0'+(currentMonth+0x1)%0xc)[a1_0x311a('0x11')](-0x2);console['log'](currentYear+'-'+_0x3d2774+'-'+_0x5c5235);$(a1_0x311a('0x1'))['val'](currentYear+'-'+_0x3d2774+'-'+_0x5c5235);$('#myModal')['modal'](a1_0x311a('0x24'));});