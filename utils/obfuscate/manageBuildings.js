const a3_0x2fe2=['input:checkbox:checked','show','<div\x20class=\x22col-2\x20d-inline\x22\x20style=\x22padding:\x200px\x22>Select</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-10\x20d-inline\x22>Edit\x20Building\x20Name</div>','.text','attr','results','api/building','each','#building-name','<div\x20class=\x22building\x22\x20id=\x22','val','#create-building','/api/building/create','preventDefault','name','checked','/api/building/delete','-text','append','#building-list','find','ajax','remove','empty','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22checkbox\x20col-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22text\x20form-control\x20col-10\x20d-inline\x22\x20value=\x22','#manage-card','#manage-alert','msg','push','Please\x20select\x20a\x20name(s)\x20to\x20delete','post','#create-alert','length','#delete-building','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','forEach','responseJSON','click','parent','#update-building'];(function(_0x5b0291,_0x2fe2d9){const _0x195345=function(_0x392f0c){while(--_0x392f0c){_0x5b0291['push'](_0x5b0291['shift']());}};_0x195345(++_0x2fe2d9);}(a3_0x2fe2,0x1e2));const a3_0x1953=function(_0x5b0291,_0x2fe2d9){_0x5b0291=_0x5b0291-0x0;let _0x195345=a3_0x2fe2[_0x5b0291];return _0x195345;};function alert(_0x1c143d,_0x3df039){$(_0x1c143d)[a3_0x1953('0x27')]();$(_0x1c143d+a3_0x1953('0xf'))[a3_0x1953('0x15')]();$(_0x1c143d+a3_0x1953('0xf'))['append'](_0x3df039);}$['ajax']({'type':'get','url':a3_0x1953('0x4'),'success':function(_0x3f4d7c){$(a3_0x1953('0x11'))[a3_0x1953('0x10')](a3_0x1953('0x0'));_0x3f4d7c[a3_0x1953('0x3')][a3_0x1953('0x21')](_0x381b64=>{$(a3_0x1953('0x11'))[a3_0x1953('0x10')](a3_0x1953('0x7')+_0x381b64['id']+a3_0x1953('0x16')+_0x381b64[a3_0x1953('0xc')]+a3_0x1953('0x20'));});},'error':function(_0xa708ff){alert('#alert',_0xa708ff['responseJSON'][a3_0x1953('0x19')]);}});$(a3_0x1953('0x9'))['click'](_0x828477=>{_0x828477[a3_0x1953('0xb')]();const _0x13d121=$(a3_0x1953('0x6'))[a3_0x1953('0x8')]();$[a3_0x1953('0x13')]({'type':a3_0x1953('0x1c'),'url':a3_0x1953('0xa'),'data':{'name':_0x13d121},'success':function(_0x41f395){$(a3_0x1953('0x11'))[a3_0x1953('0x10')](a3_0x1953('0x7')+_0x41f395[a3_0x1953('0x3')]['id']+a3_0x1953('0x16')+_0x41f395[a3_0x1953('0x3')][a3_0x1953('0xc')]+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>');$(a3_0x1953('0x6'))['val']('');},'error':function(_0x42841a){alert(a3_0x1953('0x1d'),_0x42841a[a3_0x1953('0x22')][a3_0x1953('0x19')]);}});});$(a3_0x1953('0x25'))['click'](_0x40bf56=>{_0x40bf56[a3_0x1953('0xb')]();const _0xca9978=[];$('#manage-card')[a3_0x1953('0x12')](a3_0x1953('0x26'))[a3_0x1953('0x5')](function(){const _0x13cedc={'id':$(this)[a3_0x1953('0x24')]()[a3_0x1953('0x2')]('id'),'name':$(this)[a3_0x1953('0x24')]()['children'](a3_0x1953('0x1'))[a3_0x1953('0x8')]()};_0xca9978[a3_0x1953('0x1a')](_0x13cedc);});if(_0xca9978['length']===0x0){alert(a3_0x1953('0x18'),'Please\x20select\x20a\x20name(s)\x20to\x20delete');}else{$[a3_0x1953('0x13')]({'type':a3_0x1953('0x1c'),'url':'/api/building/update','data':{'names':_0xca9978},'success':function(_0x2ff5c1){$('#manage-card')[a3_0x1953('0x12')](a3_0x1953('0x26'))[a3_0x1953('0x5')](function(){$(this)['prop'](a3_0x1953('0xd'),![]);});},'error':function(_0x50a484){alert(a3_0x1953('0x18'),_0x50a484[a3_0x1953('0x22')][a3_0x1953('0x19')]);}});}});$(a3_0x1953('0x1f'))[a3_0x1953('0x23')](_0x14b3a0=>{_0x14b3a0[a3_0x1953('0xb')]();const _0x41e5f8=[];$(a3_0x1953('0x17'))[a3_0x1953('0x12')]('input:checkbox:checked')['each'](function(){_0x41e5f8[a3_0x1953('0x1a')]($(this)['parent']()[a3_0x1953('0x2')]('id'));});if(_0x41e5f8[a3_0x1953('0x1e')]===0x0){alert(a3_0x1953('0x18'),a3_0x1953('0x1b'));}else{$['ajax']({'type':a3_0x1953('0x1c'),'url':a3_0x1953('0xe'),'data':{'ids':_0x41e5f8},'success':function(_0x510b16){_0x510b16[a3_0x1953('0x3')][a3_0x1953('0x21')](_0x4f6d91=>{$('#'+_0x4f6d91)[a3_0x1953('0x14')]();});},'error':function(_0x5d9259){alert('#manage-alert',_0x5d9259[a3_0x1953('0x22')][a3_0x1953('0x19')]);}});}});