// Particles
(function(){
  const box=document.querySelector('.pbx');
  const colors=['rgba(79,172,254,0.5)','rgba(0,242,254,0.4)','rgba(240,147,251,0.3)','rgba(255,215,0,0.3)','rgba(255,255,255,0.3)'];
  for(let i=0;i<30;i++){
    const p=document.createElement('div');
    p.className='pt';
    const s=Math.random()*6+2;
    p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;background:${colors[i%colors.length]};animation-duration:${Math.random()*12+8}s;animation-delay:${Math.random()*10}s;box-shadow:0 0 ${s*3}px ${colors[i%colors.length]}`;
    box.appendChild(p);
  }
})();

// Cursor glow
(function(){
  const g=document.querySelector('.cgl');
  if(!g)return;
  let mx=window.innerWidth/2,my=window.innerHeight/2;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;g.style.left=mx+'px';g.style.top=my+'px'});
})();

// Scroll reveal
(function(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('vis');
        // Animate stat bars
        e.target.querySelectorAll('.sf').forEach(bar=>{
          const w=bar.dataset.w;
          if(w)bar.style.width=w;
        });
      }
    });
  },{threshold:0.15,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.sh,.bi,.tli,.pc,.cm,.sec .rv').forEach(el=>obs.observe(el));
})();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t)t.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Tilt effect on cards
(function(){
  document.querySelectorAll('.bi,.pc,.cm').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-5px) scale(1.02)`;
    });
    card.addEventListener('mouseleave',()=>{
      card.style.transform='';
    });
  });
})();

// Parallax on scroll for hero avatar
(function(){
  const av=document.querySelector('.hv');
  const hero=document.querySelector('.hero');
  if(!av||!hero)return;
  window.addEventListener('scroll',()=>{
    const s=window.scrollY;
    if(s<window.innerHeight){
      av.style.transform=`translateY(${s*0.15}px) rotate(${s*0.02}deg)`;
    }
  },{passive:true});
})();

// Footer year
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('yr');
  if(y)y.textContent=new Date().getFullYear();
});
