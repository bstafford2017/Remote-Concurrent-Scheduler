const a7_0x9ef5=['#start-time','#room','<option>','#date','forEach','results','val','</option>','empty','append','#alert','#building'];(function(_0x103736,_0x5bd6fa){const _0x4d4e2c=function(_0x565c11){while(--_0x565c11){_0x103736['push'](_0x103736['shift']());}};_0x4d4e2c(++_0x5bd6fa);}(a7_0x9ef5,0x1bc));const a7_0x5f25=function(_0x103736,_0x5bd6fa){_0x103736=_0x103736-0x0;let _0x4d4e2c=a7_0x9ef5[_0x103736];return _0x4d4e2c;};$('#create-event')['click'](_0x4054d1=>{const _0x53bdb0=$('#title')['val']();const _0xe395ea=$(a7_0x5f25('0xb'))[a7_0x5f25('0x6')]();const _0x25e18c=$(a7_0x5f25('0x1'))[a7_0x5f25('0x6')]();const _0x5a3430=$(a7_0x5f25('0x3'))[a7_0x5f25('0x6')]();const _0x1cb69b=$(a7_0x5f25('0x0'))[a7_0x5f25('0x6')]();const _0x45b76e=$('#end-time')[a7_0x5f25('0x6')]();const _0x2199a6=$('#recur-end')[a7_0x5f25('0x6')]();$['ajax']({'type':'post','url':'api/event','data':{'title':_0x53bdb0,'building':_0xe395ea,'room':_0x25e18c,'date':_0x5a3430,'start':_0x1cb69b,'end':_0x45b76e,'recur':_0x2199a6},'success':function(_0x4a4680){_0x4a4680[a7_0x5f25('0x5')][a7_0x5f25('0x4')](_0x6e3f2e=>{$(a7_0x5f25('0xb'))[a7_0x5f25('0x9')](a7_0x5f25('0x2')+_0xe395ea['name']+a7_0x5f25('0x7'));});},'error':function(_0x54e2a9){$(a7_0x5f25('0xa'))[a7_0x5f25('0x8')]();$(a7_0x5f25('0xa'))[a7_0x5f25('0x9')](_0x54e2a9);}});});