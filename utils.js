/* ═══════════ SHARED DATA ═══════════ */
const products=[
 {id:"dore",name:"Gold Doré Bars",purity:"85-96% Au",desc:"Semi-refined doré cast at source under sealed assay. Each bar ships with origin documentation, assay certificate, and export permits.",avail:"Monthly allocations · FOB Entebbe / Kigali",specs:[["Gold content","85-96%"],["Silver content","3-12%"],["Bar weight","1 kg-12.5 kg"],["Assay method","Fire assay + XRF"],["Packaging","Sealed, tamper-evident"]]},
 {id:"nuggets",name:"Alluvial Gold Nuggets",purity:"88-94% Au",desc:"Naturally occurring alluvial nuggets recovered from licensed Karamoja concessions, graded by size and purity for collectors and refiners.",avail:"Quarterly graded lots",specs:[["Gold content","88-94%"],["Lot sizes","100 g-5 kg"],["Grading","Size + purity classed"],["Provenance","GPS-logged recovery"],["Documentation","Full export pack"]]},
 {id:"refined",name:"Refined Gold",purity:"99.5-99.99% Au",desc:"Four-nines fine gold produced through accredited refinery partners, delivered as kilobars or minted bars with serial-numbered certification.",avail:"On allocation · CIF Dubai / Mumbai / HK",specs:[["Fineness","995.0-999.9"],["Formats","1 kg cast · 100 g minted"],["Certification","Serialised, assay-stamped"],["Delivery","CIF major hubs"],["Settlement","LBMA-referenced pricing"]]},
 {id:"minerals",name:"Precious Minerals",purity:"Assayed per lot",desc:"Conflict-free 3T minerals sourced through ICGLR-certified supply chains with full iTSCi/RMI traceability for industrial buyers.",avail:"By contract",specs:[["Minerals","Ta · Sn · W concentrates"],["Traceability","iTSCi tagged at pit"],["Ta₂O₅ grade","18-32%"],["Lot sizes","1-20 t"],["Compliance","RMI / CMRT ready"]]}];

const ops=[
 {name:"Haut-Uélé & Ituri, DR Congo",short:"DRC Operations",x:52.2,y:55.5,body:"Sourcing partnerships with licensed cooperatives and semi-industrial producers, with sealed-assay buying centres in Isiro and Bunia and export staging through Kampala and Kigali.",facts:["3 BUYING CENTRES","ICGLR CERTIFIED","1,400+ FORMALISED MINERS"]},
 {name:"Karamoja Sub-region, Uganda",short:"Karamoja Operations",x:55.4,y:53.8,body:"Exploration and active alluvial recovery across licensed concessions in Moroto and Amudat districts, with on-site gravimetric processing and a miner-formalisation programme.",facts:["2 ACTIVE CONCESSIONS","612 KM² UNDER LICENCE","DRONE-SURVEYED QUARTERLY"]}];

const chain=[["Exploration","Geological survey, drone mapping, sampling, and resource estimation across licensed blocks."],["Mining","Alluvial and semi-industrial recovery with formalised artisanal partners under sealed supervision."],["Processing","Gravimetric concentration and on-site smelting to doré, assayed by fire assay and XRF."],["Logistics","Armoured, insured transport with GPS custody logging from site to bonded vault."],["Export","Permitted export through Entebbe and Kigali to refinery and bullion-desk partners worldwide."]];

const dests=[{c:"Dubai",lat:25.2,lng:55.3},{c:"Geneva",lat:46.2,lng:6.1},{c:"Mumbai",lat:19.1,lng:72.9},{c:"Hong Kong",lat:22.3,lng:114.2},{c:"Singapore",lat:1.35,lng:103.8},{c:"Istanbul",lat:41,lng:29},{c:"London",lat:51.5,lng:-.1},{c:"Shanghai",lat:31.2,lng:121.5}];

const hubCity={c:"Kampala",lat:.35,lng:32.6};

const newsItems=[
 {tag:"Company update",date:"May 2026",t:"Summit expands Karamoja licence area by 240 km²",e:"New exploration licences in Amudat district extend our Karamoja footprint following strong drill results in Q1."},
 {tag:"Market analysis",date:"April 2026",t:"Gold in H2 2026: central-bank demand keeps the floor high",e:"Our trading desk's read on reserve diversification, real yields, and what it means for African doré premiums."},
 {tag:"Compliance",date:"March 2026",t:"DRC supply chain passes third consecutive ICGLR audit",e:"Independent auditors confirmed full chain-of-custody integrity across all three buying centres."},
 {tag:"Sustainability",date:"February 2026",t:"Twelve boreholes commissioned across Moroto district",e:"Phase two of our Karamoja community water programme brings clean water access to 18,000 residents."}];

const tsts=[
 {q:"Documentation quality is the difference in this trade. Summit's export packs clear our compliance desk faster than any African counterparty we work with.",n:"BULLION DESK DIRECTOR · DUBAI, UAE"},
 {q:"Three years, forty-one shipments, zero assay disputes. That record speaks for itself.",n:"REFINERY PROCUREMENT LEAD · MUMBAI, INDIA"},
 {q:"Their formalisation programme changed how our cooperative works. Fair pricing, safe practice, and we can finally bank our income.",n:"MINING COOPERATIVE CHAIR · ITURI, DRC"}];

const team=[
 ["Daniel K. Ssempa","Chief Executive Officer","Two decades across East African mineral trading and structured commodity finance. Leads Summit's regional strategy and government relations."],
 ["Marie-Claire Ilunga","Director of DRC Operations","Geologist and licensed mineral exporter with deep operational experience across Haut-Uélé and Ituri provinces."],
 ["Joseph Lokwang","Director, Karamoja Operations","Oversees exploration, community agreements, and artisanal-miner formalisation across the Karamoja sub-region."],
 ["Amara Osei","Head of Compliance & ESG","Former Big-Four assurance lead. Owns KYC, chain-of-custody auditing, and alignment with OECD and LBMA frameworks."],
 ["Henrik Larsen","Director of International Trade","Manages refinery partnerships and bullion-desk relationships across Dubai, Geneva, Mumbai, and Hong Kong."]];

const downloads=[["Company Profile 2026","PDF · 4.2 MB"],["Corporate Presentation","PDF · 9.8 MB"],["Responsible Sourcing Policy","PDF · 1.1 MB"],["Product Specification Sheets","PDF · 2.6 MB"]];

/* ═══════════ TICKER ═══════════ */
const quotes=[["GOLD USD/OZ",3412.4,.42],["GOLD USD/KG",109712,.42],["SILVER USD/OZ",41.18,-.16],["PLATINUM USD/OZ",1287.5,.21],["USD/UGX",3704,.05],["USD/CDF",2861,-.02]];

function renderTape(){
  const tape=document.getElementById("tape");
  if(tape){
    tape.innerHTML=[...quotes,...quotes].map(q=>`<span class="q"><span class="soft">${q[0]}</span><span>${q[1].toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span><span class="${q[2]>=0?"up":"dn"}">${q[2]>=0?"▲":"▼"} ${Math.abs(q[2]).toFixed(2)}%</span><span class="soft" style="opacity:.4">·</span></span>`).join("");
  }
}

function initTicker(){
  renderTape();
  setInterval(()=>{quotes.forEach(q=>{q[1]+= (Math.random()-.5)*.0008*q[1];q[2]+= (Math.random()-.5)*.02});renderTape()},4000);
}

/* ═══════════ NAV BEHAVIOUR ═══════════ */
function initNav(){
  const nav=document.getElementById("nav");
  if(!nav)return;
  
  addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>24),{passive:true});
  
  const mega=document.getElementById("mega"),megabtn=document.getElementById("megabtn");
  if(megabtn){
    megabtn.addEventListener("click",()=>{mega.classList.toggle("open");megabtn.setAttribute("aria-expanded",mega.classList.contains("open"))});
    nav.addEventListener("mouseleave",()=>mega.classList.remove("open"));
  }
  
  const burger=document.getElementById("burger");
  if(burger){
    burger.addEventListener("click",()=>document.getElementById("drawer").classList.add("open"));
  }
  
  const closeDrawer=document.getElementById("closeDrawer");
  if(closeDrawer){
    closeDrawer.addEventListener("click",()=>document.getElementById("drawer").classList.remove("open"));
  }
}


/* ═══════════ REVEALS + COUNTERS ═══════════ */
let io;
function observeReveals(){
  io&&io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{rootMargin:"-60px"});
  document.querySelectorAll(".rev").forEach(el=>io.observe(el));
}

function countersInit(){
  const co=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return;co.unobserve(e.target);
    const el=e.target,end=parseFloat(el.dataset.count),suf=el.dataset.suffix||"",dec=+el.dataset.dec,t0=performance.now();
    const step=t=>{const p=Math.min((t-t0)/1700,1),v=end*(1-Math.pow(1-p,3));
      el.textContent=v.toLocaleString("en-US",{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;
      if(p<1)requestAnimationFrame(step)};
    requestAnimationFrame(step);
  }),{rootMargin:"-30px"});
  document.querySelectorAll("[data-count]").forEach(el=>co.observe(el));
}

/* ═══════════ FORMS ═══════════ */
function formDone(id){
  const form=document.getElementById(id);
  if(form){
    form.innerHTML=`<div style="text-align:center;padding:52px 0"><p class="disp goldtxt" style="font-size:28px;margin-bottom:10px">Message sent.</p><p class="soft">Our trade desk will reply within one business day.</p></div>`;
  }
}

/* ═══════════ HELPERS ═══════════ */
const shead=(eb,t,b)=>`<div class="shead rev"><p class="eyebrow">${eb}</p><h2 class="disp">${t}</h2>${b?`<p class="soft">${b}</p>`:""}</div>`;
const phero=(eb,t,b)=>`<section class="phero"><div class="wrap"><p class="eyebrow" style="margin-bottom:18px">${eb}</p><h1 class="disp">${t}</h1>${b?`<p class="lead soft">${b}</p>`:""}</div></section>`;
const prodCard=p=>`<a href="products.html" class="glass card rev" style="display:block"><div style="height:104px;border-radius:18px;margin-bottom:22px;display:grid;place-items:center;background:radial-gradient(120px 70px at 50% 60%,rgba(232,201,122,.3),rgba(154,122,46,.08))"><span class="disp goldtxt" style="font-size:34px">Au</span></div><h3 class="disp" style="font-size:19px">${p.name}</h3><p class="tape" style="color:var(--gold);margin-top:8px;font-size:10px">${p.purity.toUpperCase()}</p><p class="soft" style="font-size:13.5px;margin-top:10px;line-height:1.6">${p.desc.split(".")[0]}.</p></a>`;

/* ═══════════ GLOBE ═══════════ */
const D2R=Math.PI/180;
const toS=(lat,lng)=>{const p=(90-lat)*D2R,t=(lng+180)*D2R;return{x:-Math.sin(p)*Math.cos(t),y:Math.cos(p),z:Math.sin(p)*Math.sin(t)}};

function globeInit(id,lblId){
  const c=document.getElementById(id);if(!c)return;
  const ctx=c.getContext("2d"),lbl=document.getElementById(lblId);
  const dots=[];const N=1100;
  for(let i=0;i<N;i++){const y=1-(i/(N-1))*2,r=Math.sqrt(1-y*y),t=i*2.39996;dots.push({x:Math.cos(t)*r,y,z:Math.sin(t)*r})}
  const mk=[{...toS(hubCity.lat,hubCity.lng),l:hubCity.c,h:1},...dests.map(d=>({...toS(d.lat,d.lng),l:d.c,h:0}))];
  const rot={y:.6,x:-.12,drag:0,lx:0,ly:0};
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let raf;
  function draw(){
    const dpr=Math.min(devicePixelRatio||1,2),s=c.clientWidth;
    if(!s){raf=requestAnimationFrame(draw);return}
    c.width=s*dpr;c.height=s*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,s,s);
    const R=s*.38,cx=s/2,cy=s/2;
    if(!rot.drag&&!reduced)rot.y+=.0024;
    const cY=Math.cos(rot.y),sY=Math.sin(rot.y),cX=Math.cos(rot.x),sX=Math.sin(rot.x);
    const pr=p=>{const x=p.x*cY+p.z*sY,z1=-p.x*sY+p.z*cY,y=p.y*cX-z1*sX,z=p.y*sX+z1*cX;return{sx:cx+x*R,sy:cy-y*R,z}};
    const halo=ctx.createRadialGradient(cx,cy,R*.86,cx,cy,R*1.22);halo.addColorStop(0,"rgba(201,162,75,.10)");halo.addColorStop(1,"rgba(201,162,75,0)");ctx.fillStyle=halo;ctx.fillRect(0,0,s,s);
    for(const p of dots){const q=pr(p);if(q.z<-.15)continue;ctx.fillStyle=`rgba(160,180,205,${.08+Math.max(0,q.z)*.3})`;ctx.beginPath();ctx.arc(q.sx,q.sy,1+Math.max(0,q.z)*.7,0,7);ctx.fill()}
    const hq=pr(mk[0]);
    for(let i=1;i<mk.length;i++){const m=pr(mk[i]);if(m.z<-.05&&hq.z<-.05)continue;
      const g=ctx.createLinearGradient(hq.sx,hq.sy,m.sx,m.sy);g.addColorStop(0,"rgba(232,201,122,.55)");g.addColorStop(1,"rgba(232,201,122,.08)");
      ctx.strokeStyle=g;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(hq.sx,hq.sy);ctx.quadraticCurveTo((hq.sx+m.sx)/2,(hq.sy+m.sy)/2-R*.32,m.sx,m.sy);ctx.stroke()}
    let hov=null;
    for(const m of mk){const q=pr(m);if(q.z<0)continue;const r=m.h?5:3.2;
      ctx.fillStyle=m.h?"#E8C97A":"#C9A24B";ctx.beginPath();ctx.arc(q.sx,q.sy,r,0,7);ctx.fill();
      ctx.strokeStyle="rgba(232,201,122,.35)";ctx.beginPath();ctx.arc(q.sx,q.sy,r+4,0,7);ctx.stroke();
      const dx=rot.lx-q.sx,dy=rot.ly-q.sy;if(Math.hypot(dx,dy)<14)hov=m.l;
      if(m.h||hov===m.l){ctx.fillStyle="rgba(238,242,247,.9)";ctx.font="11px IBM Plex Mono,monospace";ctx.fillText(m.l.toUpperCase(),q.sx+9,q.sy+4)}}
    if(lbl)lbl.textContent=hov?`ROUTE · KAMPALA → ${hov.toUpperCase()}`:"DRAG TO ROTATE · 8 STRATEGIC MARKETS";
    raf=requestAnimationFrame(draw);
  }
  c.onpointerdown=e=>{rot.drag=1;rot.lx=e.offsetX;rot.ly=e.offsetY};
  c.onpointermove=e=>{if(rot.drag){rot.y+=(e.offsetX-rot.lx)*.005;rot.x=Math.max(-.8,Math.min(.8,rot.x+(e.offsetY-rot.ly)*.003))}rot.lx=e.offsetX;rot.ly=e.offsetY};
  addEventListener("pointerup",()=>rot.drag=0);
  raf=requestAnimationFrame(draw);
}

/* Initialize all pages */
document.addEventListener("DOMContentLoaded",()=>{
  initTicker();
  initNav();
  observeReveals();
  countersInit();
});
