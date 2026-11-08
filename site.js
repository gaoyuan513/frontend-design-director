const $ = s => document.querySelector(s);
const modes = [
  ['creative','Creative / Experimental','曲面调制','∿','#272c23','#f2c798'],
  ['editorial','Premium / Editorial','光影手记','Aa','#eedecb','#563c31'],
  ['product','SaaS / Product','排班试印','≡','#dfebbd','#304a30'],
  ['workspace','Dashboard / Workspace','事件回放','⌁','#173c32','#d4f1d0'],
  ['gallery','Spatial Gallery','空间标本','⊹','#cedcd4','#1c4940'],
  ['swiss','Minimal / Swiss','场次索引','↗','#f1eee3','#a9371c']
];
const instrument = lineInstrument($('#field'), true);
$('#spin').onclick = () => instrument.rotate();
const rack = $('.rack'), dialog = $('#detail');
$('#track').innerHTML = modes.map(([slug,mode,title,symbol,paper,ink],i) =>
  `<a draggable="false" class="plate" href="#demo-${slug}" style="--paper:${paper};--ink:${ink}"><span class="serial">0${i+1} / 06</span><span class="symbol" aria-hidden="true">${symbol}</span><b>${title}</b><span>${mode} ↗</span></a>`).join('');
let origin, suppress = false;
rack.onpointerdown = e => {origin={x:e.clientX,scroll:rack.scrollLeft,id:e.pointerId};suppress=false};
rack.onpointermove = e => {
  if(!origin || origin.id!==e.pointerId)return;
  const dx=e.clientX-origin.x;
  if(Math.abs(dx)>6){suppress=true;rack.setPointerCapture(e.pointerId);rack.classList.add('grabbing');rack.scrollLeft=origin.scroll-dx}
};
rack.onpointerup=e=>{
  const link=e.target.closest('.plate');
  const tap=e.pointerType==='touch' && origin && !suppress && link;
  origin=null;rack.classList.remove('grabbing');
  if(tap){e.preventDefault();history.pushState({fromRack:true},'',link.hash);openRoute()}
};
rack.onpointercancel=()=>{origin=null;rack.classList.remove('grabbing')};
rack.onlostpointercapture=e=>{if(e.target===rack){origin=null;rack.classList.remove('grabbing')}};
rack.addEventListener('click',e=>{if(suppress && e.detail){e.preventDefault();suppress=false}},true);
$('#back').onclick=()=>rack.scrollBy(-rack.clientWidth*.65,0);
$('#forward').onclick=()=>rack.scrollBy(rack.clientWidth*.65,0);
let cleanup = ()=>{}, opener=null;
function openRoute(){
  const m=modes.find(a=>'#demo-'+a[0]===location.hash);
  cleanup();cleanup=()=>{};
  if(!m){if(dialog.open){dialog.close();opener?.focus({preventScroll:true})}return}
  const [slug,mode,title,,paper,ink]=m;
  opener=document.querySelector('a[href="#demo-'+slug+'"]');
  $('#mode').textContent='DEMO / '+mode;
  $('#content').innerHTML='<section class="demo"><h2>'+title+'</h2><div id="sample"></div></section>';
  $('.demo').style.setProperty('--paper',paper);$('.demo').style.setProperty('--ink',ink);
  if(!dialog.open)dialog.showModal();
  document.body.style.overflow='hidden';
  cleanup=experiments[slug]($('#sample')) || (()=>{});
}
function exitDetail(){if(history.state?.fromRack)history.back();else location.replace('#studies')}
$('#close').onclick=exitDetail;
dialog.oncancel=e=>{e.preventDefault();exitDetail()};
dialog.addEventListener('close',()=>document.body.style.overflow='');
rack.addEventListener('click',e=>{const a=e.target.closest('.plate');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey)return;e.preventDefault();if(location.hash===a.hash)return;history.pushState({fromRack:true},'',a.hash);openRoute()});
const experiments={
  creative(el){
    el.innerHTML='<p>改变扭转幅度，观察同一条曲面如何由折带收拢为圆环。</p><canvas aria-label="实时线束试样"></canvas><label>折叠幅度 <input type="range" min="0" max="150" value="100"></label><output>100%</output>';
    const obj=lineInstrument(el.querySelector('canvas'));
    el.querySelector('input').oninput=e=>{obj.tune(e.target.value/100);el.querySelector('output').value=e.target.value+'%'};
    return ()=>obj.dispose();
  },
  editorial(el){
    const chapters=[['庭院','楼梯沿着外墙转弯。在入口停一下，再向上看。','12%'],['阴影','日光掠过踏步，暗部把楼梯的折角分开。','50%'],['树冠','从枝叶的边缘回望庭院，照片有了另一条阅读顺序。','93%']];
    el.innerHTML='<div class="reading"><img src="courtyard.webp" alt="庭院楼梯的光影研究"><div><small>MARGIN NOTES</small><h3></h3><p></p></div></div><div class="chapters"></div>';
    const change=i=>{const [h,p,pos]=chapters[i];el.querySelector('h3').textContent=h;el.querySelector('p').textContent=p;el.querySelector('img').style.objectPosition='center '+pos;el.querySelectorAll('button').forEach((b,n)=>b.setAttribute('aria-pressed',i===n))};
    chapters.forEach(([name],i)=>{const b=document.createElement('button');b.textContent=name;b.onclick=()=>change(i);el.querySelector('.chapters').append(b)});change(0);
  },
  product(el){
    el.innerHTML='<p>为本地试用班表安排周五的工作，然后发布这份草稿。</p><div class="schedule"><b>周五 · Felix</b><label>班次 <select><option>早班 08–16</option><option>晚班 14–22</option><option>休息</option></select></label></div><button>发布班表</button><output aria-live="polite">草稿 · 尚未发布</output>';
    const select=el.querySelector('select'),button=el.querySelector('button'),out=el.querySelector('output');
    select.onchange=()=>{button.disabled=false;out.value='草稿已修改'};
    button.onclick=()=>{out.value='已发布 · 周五 / '+select.value;button.disabled=true};
  },
  workspace(el){
    el.innerHTML='<p>选择运行记录，读取最后一个事件并恢复失败的任务。</p><div class="console"><div><button>导入索引</button><button>构建摘要</button></div><pre aria-live="polite"></pre></div><button class="retry">重试导入</button>';
    let task=0,state=0,timer;
    const draw=()=>{el.querySelectorAll('.console button').forEach((b,i)=>b.setAttribute('aria-pressed',task===i));el.querySelector('pre').textContent=task?'RUN 02   /   DONE\n\n读取条目\n生成摘要\n完成':('RUN 01   /   '+['FAILED','RUNNING','DONE'][state]+'\n\n打开索引\n连接超时'+['','\n重新连接…','\n重新连接\n索引已导入'][state]);el.querySelector('.retry').disabled=task!==0||state!==0};
    el.querySelectorAll('.console button').forEach((b,i)=>b.onclick=()=>{task=i;draw()});
    el.querySelector('.retry').onclick=()=>{state=1;draw();timer=setTimeout(()=>{state=2;draw()},650)};draw();return ()=>clearTimeout(timer);
  },
  gallery(el){
    el.innerHTML='<p>拖动画布寻找标本，或直接通过名称定位。</p><div class="map"><div class="plane"></div></div><div class="items"></div><output aria-live="polite"></output>';
    const map=el.querySelector('.map'),plane=el.querySelector('.plane');
    const items=[['石英',22,35,'透明晶体'],['孔雀石',75,62,'绿色条带'],['黄铁矿',135,42,'立方晶形']];
    let dx=0,dy=0,start,dragged=false;
    function position(){plane.style.transform='translate('+dx+'px,'+dy+'px)'}
    function select(i,center){el.querySelector('output').value=items[i][0]+' / '+items[i][3];if(center){dx=Math.round(map.clientWidth*(.5-items[i][1]/100));dy=0;position()}el.querySelectorAll('.items button').forEach((b,n)=>b.setAttribute('aria-pressed',n===i))}
    items.forEach(([name,x,y],i)=>{const pin=document.createElement('button');pin.textContent=name;pin.style.left=x+'%';pin.style.top=y+'%';pin.onclick=e=>{if(!dragged||!e.detail)select(i,false)};plane.append(pin);const b=document.createElement('button');b.textContent=name;b.onclick=()=>select(i,true);el.querySelector('.items').append(b)});
    map.onpointerdown=e=>{start=[e.clientX,e.clientY,dx,dy];dragged=false};
    map.onpointermove=e=>{if(!start)return;const x=e.clientX-start[0],y=e.clientY-start[1];if(Math.hypot(x,y)>5){dragged=true;map.setPointerCapture(e.pointerId);dx=Math.max(-map.clientWidth,Math.min(map.clientWidth*.4,start[2]+x));dy=Math.max(-90,Math.min(90,start[3]+y));position()}};
    map.onpointerup=map.onpointercancel=map.onlostpointercapture=()=>{start=null};select(0,false);
  },
  swiss(el){
    const sessions=[['材料研究',14],['字体排印',9],['空间导航',11]];
    el.innerHTML='<p>切换编排依据，同一组工作坊会呈现不同的阅读顺序。</p><button>按时间</button><button>按名称</button><ol class="rows"></ol>';
    const draw=i=>{el.querySelector('ol').innerHTML=[...sessions].sort((a,b)=>i?a[0].localeCompare(b[0],'zh'):a[1]-b[1]).map(([n,t])=>'<li><b>'+n+'</b><time>'+t+':00</time></li>').join('');el.querySelectorAll('button').forEach((b,n)=>b.setAttribute('aria-pressed',i===n))};
    el.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>draw(i));draw(0);
  }
};
addEventListener('hashchange',openRoute);
openRoute();
