// Project a family of twisted loops. Depth determines both brightness and overlap.
function lineInstrument(canvas, hero = false) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { rotate() {}, tune() {}, dispose() {} };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let yaw = -.38, pitch = .12, target = yaw, tilt = pitch, spread = 0, twist = 1;
  let raf = 0, visible = false, pointer = null, px = 0, py = 0, width = 0, height = 0;
  const rings = Array.from({length:75}, (_, i) => {
    const u = i / 74;
    return Array.from({length:99}, (_, j) => {
      const t = j * Math.PI * 2 / 98;
      const v=(u-.5)*2.7+2*t
      return [j, u, Math.cos(t), Math.sin(t), .88+.12*Math.cos(2*t), .36*Math.cos(v), .52*Math.sin(v)+.30*Math.sin(2*t)];
    });
  });
  function render() {
    raf = 0;
    const k = reduce.matches ? 1 : .22;
    yaw += (target-yaw)*k; pitch += (tilt-pitch)*k;
    ctx.clearRect(0,0,width,height);
    const cx = hero && width > 720 ? width*.675 : width*.53;
    const cy = hero && width <= 720 ? height*.53 : height*.49;
    const scale = Math.min(width*(hero && width>720?.30:.37),height*.39);
    const ca=Math.cos(yaw), sa=Math.sin(yaw), cb=Math.cos(pitch+.48), sb=Math.sin(pitch+.48);
    const paths = rings.map((ring,i) => {
      const path=new Path2D(); let depth=0;
      for(const [j,u,c,s,base,fold,height] of ring) {
        const radius=base+fold*twist;
        const x=radius*c, y=radius*s, z=height+(u-.5)*spread*1.25;
        const xx=x*ca+z*sa, zz=z*ca-x*sa, yy=y*cb-zz*sb, dz=y*sb+zz*cb;
        const persp=1/(1.95-dz*.28);
        const sx=cx+scale*1.7*xx*persp, sy=cy+scale*1.7*yy*persp;
        if(j===0)path.moveTo(sx,sy);else path.lineTo(sx,sy);
        depth+=dz;
      }
      return {path,depth:depth/ring.length,i};
    }).sort((a,b)=>a.depth-b.depth);
    for(const {path,i,depth} of paths){
      const tone=Math.max(0,Math.min(1,(depth+.45)*1.2+.12*Math.sin(i*.20)+.2));
      ctx.strokeStyle='rgb('+Math.round(117+135*tone)+' '+Math.round(71+140*tone)+' '+Math.round(36+117*tone)+')';
      ctx.lineWidth=hero?1.25:1.1; ctx.stroke(path);
    }
    if(hero)document.querySelector('#angle').value=Math.round((yaw+.38)*180/Math.PI)+'°';
    if(Math.abs(target-yaw)+Math.abs(tilt-pitch)>.002)schedule();
  }
  function schedule(){if(!raf && visible && !document.hidden)raf=requestAnimationFrame(render)}
  function resize(){const r=canvas.getBoundingClientRect();width=r.width;height=r.height;
    const d=Math.min(devicePixelRatio,1.6);canvas.width=Math.round(width*d);canvas.height=Math.round(height*d);ctx.setTransform(d,0,0,d,0,0);schedule()}
  function move(e){if(pointer===e.pointerId){target+=(e.clientX-px)*.009;tilt+=(e.clientY-py)*.004;px=e.clientX;py=e.clientY;schedule()}
    else if(!reduce.matches && e.pointerType==='mouse'){const r=canvas.getBoundingClientRect();tilt=.12+(e.clientY-r.top-r.height/2)/r.height*.6;target+=((e.movementX||0)/Math.max(1,width))*.32;schedule()}}
  function down(e){pointer=e.pointerId;px=e.clientX;py=e.clientY;canvas.setPointerCapture(pointer)}
  function up(){pointer=null}
  function scroll(){if(!hero)return;const root=document.querySelector('#opening');const p=Math.max(0,Math.min(1,-root.getBoundingClientRect().top/(root.offsetHeight-innerHeight||1)));spread=reduce.matches?0:p*2;root.style.setProperty('--progress',reduce.matches?0:p);schedule()}
  const ro=new ResizeObserver(resize);ro.observe(canvas);
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)schedule()});io.observe(canvas);
  canvas.onpointerdown=down;canvas.onpointermove=move;canvas.onpointerup=canvas.onpointercancel=canvas.onlostpointercapture=up;
  if(hero)addEventListener('scroll',scroll,{passive:true});document.addEventListener('visibilitychange',schedule);scroll();
  return {rotate(){target+=Math.PI/12;schedule()},tune(n){twist=n;target+=.03;schedule()},dispose(){ro.disconnect();io.disconnect();cancelAnimationFrame(raf);document.removeEventListener('visibilitychange',schedule);if(hero)removeEventListener('scroll',scroll)}};
}
