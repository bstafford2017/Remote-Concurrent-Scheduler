const a1_0x24b2=['target','forEach','#by-week','December','\x22\x20class=\x22row\x22>','px;\x22>ACM\x20Meeting</div>','\x22\x20class=\x22valid\x22>','</div>','<div\x20class=\x22invalid\x22>','px;\x20height:\x20','hide','#spinner','remove','.month-by-month','modal','January','#myModal','October','#by-month','#row-','<div\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22top\x22\x20title=\x22Tooltip\x20on\x20top\x22\x20class=\x22month-event\x22>3pm\x20-\x20ACM\x20Meeting</div>','undefined','week','getDate','\x22\x20class=\x22active-date\x20valid\x22>','abs','May','<div\x20class=\x22week-event\x22\x20style=\x22margin-top:','<div\x20id=\x22','attr','slice','log','#month','.scale\x20div','show','val','July','getMonth','Febuary','<div\x20id=\x22row-','#date','empty','.scale','April','getDay','click','November','outerHeight','append','.week-by-week','.row','<div\x20id=\x220\x22\x20class=\x22row\x22>'];(function(_0x5f38a2,_0x1f118b){const _0x2b7a9d=function(_0x5ca212){while(--_0x5ca212){_0x5f38a2['push'](_0x5f38a2['shift']());}};_0x2b7a9d(++_0x1f118b);}(a1_0x24b2,0x85));const a1_0x1b90=function(_0x5f38a2,_0x1f118b){_0x5f38a2=_0x5f38a2-0x0;let _0x2b7a9d=a1_0x24b2[_0x5f38a2];return _0x2b7a9d;};const today=new Date();const months=[a1_0x1b90('0x26'),a1_0x1b90('0x9'),'March',a1_0x1b90('0xe'),a1_0x1b90('0x31'),'June',a1_0x1b90('0x7'),'August','September',a1_0x1b90('0x28'),a1_0x1b90('0x11'),a1_0x1b90('0x1a')];let currentMonth=today[a1_0x1b90('0x8')]();let currentYear=today['getFullYear']();let currentDate=today[a1_0x1b90('0x2e')]()-0x1;let week=[0x0,0x0,0x0,0x0,0x0,0x0,0x0];$(a1_0x1b90('0xd'))['hide']();showMonthCalendar();$(a1_0x1b90('0x19'))[a1_0x1b90('0x10')](_0xb1c34d=>{clear();$(a1_0x1b90('0xd'))[a1_0x1b90('0x5')]();showWeekCalendar();});$(a1_0x1b90('0x29'))[a1_0x1b90('0x10')](_0x392e03=>{clear();$('.scale')[a1_0x1b90('0x21')]();showMonthCalendar();});function clear(){$(a1_0x1b90('0x15'))[a1_0x1b90('0x23')]();$('.month-by-month')['empty']();$(a1_0x1b90('0x3'))[a1_0x1b90('0xc')]();}function daysInMonth(){return 0x20-new Date(currentYear,currentMonth,0x20)[a1_0x1b90('0x2e')]();}function daysInNextMonth(){if(currentMonth-0x1<0x0){return 0x20-new Date(currentYear-0x1,0xb,0x20)['getDate']();}else{return 0x20-new Date(currentYear,currentMonth-0x1,0x20)['getDate']();}}function daysInPreviousMonth(){if(currentMonth-0x1<0xb){return 0x20-new Date(currentYear+0x1,0x0,0x20)[a1_0x1b90('0x2e')]();}else{return 0x20-new Date(currentYear,currentMonth-0x1,0x20)[a1_0x1b90('0x2e')]();}}function next(){if($('input[name=\x27selector\x27]:checked')[a1_0x1b90('0x6')]()===a1_0x1b90('0x2d')){showWeekCalendar(!![]);}else{clear();currentYear=currentMonth===0xb?currentYear+0x1:currentYear;currentMonth=(currentMonth+0x1)%0xc;showMonthCalendar();}}function previous(){if(Math['abs'](week[0x0]-week[0x6])>0x7){if(currentMonth===0x0){currentMonth=0xb;currentYear--;}else{currentMonth--;}}if($('input[name=\x27selector\x27]:checked')[a1_0x1b90('0x6')]()===a1_0x1b90('0x2d')){showWeekCalendar(![]);}else{clear();currentYear=currentMonth===0x0?currentYear-0x1:currentYear;currentMonth=currentMonth===0x0?0xb:currentMonth-0x1;showMonthCalendar();}}function changeHeader(_0x1523af,_0x387679){$(a1_0x1b90('0x3'))['empty']();$('#month')[a1_0x1b90('0x13')](months[_0x1523af]+'\x20'+_0x387679);}function addToHeader(_0x131aac,_0x22387f){$('#month')[a1_0x1b90('0x13')]('/'+months[_0x131aac]+'\x20'+_0x22387f);}function changeAndCheck(_0x28bca8,_0x5ae074){_0x28bca8=_0x28bca8+_0x5ae074;if(_0x28bca8<0x0){changeHeader(currentMonth,currentYear);if(currentMonth===0x0){currentMonth=0xb;currentYear--;}else{currentMonth--;}_0x28bca8+=daysInMonth();addToHeader(currentMonth,currentYear);}else if(_0x28bca8>daysInMonth()){changeHeader(currentMonth,currentYear);_0x28bca8-=daysInMonth();if(currentMonth===0xb){currentMonth=0x0;currentYear++;}else{currentMonth++;}addToHeader(currentMonth,currentYear);}return _0x28bca8;}function printWeek(_0x58d773){if(today[a1_0x1b90('0x2e')]()===_0x58d773&today[a1_0x1b90('0x8')]()===currentMonth&&today['getFullYear']()===currentYear){$('#0')[a1_0x1b90('0x13')](a1_0x1b90('0x33')+_0x58d773+a1_0x1b90('0x2f')+_0x58d773);}else{$('#0')[a1_0x1b90('0x13')](a1_0x1b90('0x33')+_0x58d773+a1_0x1b90('0x1d')+_0x58d773);}$('#0')['append'](a1_0x1b90('0x1e'));$('#'+_0x58d773)[a1_0x1b90('0x13')](a1_0x1b90('0x32')+0x9*$(a1_0x1b90('0x4'))[a1_0x1b90('0x12')]()+a1_0x1b90('0x20')+$(a1_0x1b90('0x4'))[a1_0x1b90('0x12')]()+a1_0x1b90('0x1c'));}function showWeekCalendar(_0x4d13a1){$(a1_0x1b90('0x15'))[a1_0x1b90('0x23')]();$(a1_0x1b90('0x14'))['append'](a1_0x1b90('0x16'));if(typeof _0x4d13a1===a1_0x1b90('0x2c')){if(week[0x0]===0x0){showWeekCalendar(!![]);}else{if(Math[a1_0x1b90('0x30')](week[0x0]-week[0x6])>0x7){changeHeader(currentMonth-0x1,currentYear);addToHeader(currentMonth,currentYear);}else{changeHeader(currentMonth,currentYear);}week[a1_0x1b90('0x18')](_0x448704=>printWeek(_0x448704));}return;}let _0x339d4a=today[a1_0x1b90('0x2e')]()-today[a1_0x1b90('0xf')]();if(_0x339d4a<0x0){if(currentMonth===0x0){currentMonth=0xb;currentYear--;_0x339d4a=daysInMonth+_0x339d4a;}else{currentMonth--;_0x339d4a=daysInMonth+_0x339d4a;}}if(week[0x0]!==0x0){_0x339d4a=_0x4d13a1?changeAndCheck(week[0x6],0x1):changeAndCheck(week[0x0],-0x7);}for(let _0x426edd=0x0;_0x426edd<0x7;_0x426edd++){week[_0x426edd]=_0x339d4a;printWeek(_0x339d4a);if(_0x426edd!==0x6){_0x339d4a=changeAndCheck(_0x339d4a,0x1);}}if(Math['abs'](week[0x0]-week[0x6])<=0x7){changeHeader(currentMonth,currentYear);}$(a1_0x1b90('0x14'))[a1_0x1b90('0x13')](a1_0x1b90('0x1e'));}function printMonth(_0x59c9cc,_0x273277,_0x42c034,_0x46b6a4){if(_0x59c9cc&&_0x273277){$(a1_0x1b90('0x2a')+_0x42c034)[a1_0x1b90('0x13')](a1_0x1b90('0x33')+_0x46b6a4+'\x22\x20class=\x22active-date\x20valid\x22>'+_0x46b6a4);}else if(_0x273277){$(a1_0x1b90('0x2a')+_0x42c034)[a1_0x1b90('0x13')](a1_0x1b90('0x33')+_0x46b6a4+a1_0x1b90('0x1d')+_0x46b6a4);}else{$('#row-'+_0x42c034)[a1_0x1b90('0x13')](a1_0x1b90('0x1f')+_0x46b6a4);}$(a1_0x1b90('0x2a')+_0x42c034)[a1_0x1b90('0x13')](a1_0x1b90('0x1e'));if(_0x273277){$('#'+_0x46b6a4)[a1_0x1b90('0x13')](a1_0x1b90('0x2b'));}}function showMonthCalendar(){changeHeader(currentMonth,currentYear);let _0x1baa0b=new Date(currentYear,currentMonth)[a1_0x1b90('0xf')]();let _0x50d52a=$(a1_0x1b90('0x24'));let _0x14a4ea=0x1;for(let _0x15a4a8=0x0;_0x15a4a8<0x6;_0x15a4a8++){if(_0x14a4ea<=daysInMonth()){_0x50d52a['append'](a1_0x1b90('0xa')+_0x15a4a8+a1_0x1b90('0x1b'));}let _0x27248b=0x1;for(let _0x52fa68=0x0;_0x52fa68<0x7;_0x52fa68++){if(_0x15a4a8===0x0&&_0x52fa68<_0x1baa0b){printMonth(![],![],_0x15a4a8,daysInPreviousMonth()-(_0x1baa0b-_0x52fa68)+0x1);}else if(_0x14a4ea>daysInMonth()){printMonth(![],![],_0x15a4a8,_0x27248b);_0x27248b++;}else{if(_0x14a4ea===today[a1_0x1b90('0x2e')]()&&currentYear===today['getFullYear']()&&currentMonth===today['getMonth']()){printMonth(!![],!![],_0x15a4a8,_0x14a4ea);}else{printMonth(![],!![],_0x15a4a8,_0x14a4ea);}_0x14a4ea++;}}if(_0x14a4ea<=daysInMonth()){_0x50d52a[a1_0x1b90('0x13')](a1_0x1b90('0x1e'));}if(_0x15a4a8===0x5){$(a1_0x1b90('0x22'))[a1_0x1b90('0x21')]();}}}$('.valid')['on'](a1_0x1b90('0x10'),_0x51b3d7=>{console[a1_0x1b90('0x2')](_0x51b3d7);let _0x3e89d5=$(_0x51b3d7[a1_0x1b90('0x17')])[a1_0x1b90('0x0')]('id');let _0x489e6b=('0'+_0x3e89d5)[a1_0x1b90('0x1')](-0x2);let _0x2f6a42=('0'+(currentMonth+0x1)%0xc)[a1_0x1b90('0x1')](-0x2);console[a1_0x1b90('0x2')](currentYear+'-'+_0x2f6a42+'-'+_0x489e6b);$(a1_0x1b90('0xb'))[a1_0x1b90('0x6')](currentYear+'-'+_0x2f6a42+'-'+_0x489e6b);$(a1_0x1b90('0x27'))[a1_0x1b90('0x25')]('show');});