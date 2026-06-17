const products=[
 {id:"dore",name:"Gold Doré Bars",purity:"85-96% Au",desc:"Semi-refined doré cast at source under sealed assay. Each bar ships with origin documentation, assay certificate, and export permits.",avail:"Monthly allocations · FOB Entebbe / Kigali",specs:[["Gold content","85-96%"],["Silver content","3-12%"],["Bar weight","1 kg-12.5 kg"],["Assay method","Fire assay + XRF"],["Packaging","Sealed, tamper-evident"]]},
 {id:"nuggets",name:"Alluvial Gold Nuggets",purity:"88-94% Au",desc:"Naturally occurring alluvial nuggets recovered from licensed Karamoja concessions, graded by size and purity for collectors and refiners.",avail:"Quarterly graded lots",specs:[["Gold content","88-94%"],["Lot sizes","100 g-5 kg"],["Grading","Size + purity classed"],["Provenance","GPS-logged recovery"],["Documentation","Full export pack"]]},
 {id:"refined",name:"Refined Gold",purity:"99.5-99.99% Au",desc:"Four-nines fine gold produced through accredited refinery partners, delivered as kilobars or minted bars with serial-numbered certification.",avail:"On allocation · CIF Dubai / Mumbai / HK",specs:[["Fineness","995.0-999.9"],["Formats","1 kg cast · 100 g minted"],["Certification","Serialised, assay-stamped"],["Delivery","CIF major hubs"],["Settlement","LBMA-referenced pricing"]]},
 {id:"minerals",name:"Precious Minerals",purity:"Assayed per lot",desc:"Conflict-free 3T minerals sourced through ICGLR-certified supply chains with full iTSCi/RMI traceability for industrial buyers.",avail:"By contract",specs:[["Minerals","Ta · Sn · W concentrates"],["Traceability","iTSCi tagged at pit"],["Ta₂O₅ grade","18-32%"],["Lot sizes","1-20 t"],["Compliance","RMI / CMRT ready"]]}];

const productImgs={
  dore:"https://images.unsplash.com/photo-1762463176417-2c5e63767bd2",
  nuggets:"https://images.unsplash.com/photo-1705073703601-eed67020c5ee",
  refined:"https://images.unsplash.com/photo-1755728805826-771568904a6b",
  minerals:"https://images.unsplash.com/photo-1521133573892-e44906baee46"
};

function renderDetail(p,i){
  return `<div class="prod rev" style="margin-bottom:0;animation:fadeIn .35s ease">
  <div class="gal">
    <div class="gmain">
      <img src="${productImgs[p.id]}?w=800&h=480&fit=crop&auto=format&q=80" alt="${p.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" loading="lazy">
      <span class="tape" style="position:absolute;bottom:14px;left:18px;font-size:9px;background:rgba(6,16,30,.65);backdrop-filter:blur(6px);padding:4px 10px;border-radius:6px;color:var(--goldb);z-index:1">PHOTOGRAPHY · ${p.id.toUpperCase()}-01</span>
    </div>
    <div class="gthumbs">${["top","center","bottom"].map((crop,n)=>`<div><img src="${productImgs[p.id]}?w=300&h=200&fit=crop&crop=${crop}&auto=format&q=75" alt="${p.name} view ${n+2}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" loading="lazy"></div>`).join("")}</div>
  </div>
  <div class="glass spec" style="border-radius:26px;padding:36px;display:flex;flex-direction:column">
    <div style="display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid var(--line);padding-bottom:22px;align-items:flex-start">
      <div><p class="tape" style="color:var(--gold);font-size:9px">SPECIFICATION SHEET · SMH-00${i+1}</p><h2 class="disp" style="font-size:30px;margin-top:8px">${p.name}</h2></div>
      <span class="disp goldtxt" style="font-size:20px;white-space:nowrap">${p.purity}</span>
    </div>
    <p class="soft" style="padding:22px 0;line-height:1.65">${p.desc}</p>
    <dl>${p.specs.map(s=>`<div class="sr tape" style="font-size:10px"><dt class="soft">${s[0].toUpperCase()}</dt><dd>${s[1]}</dd></div>`).join("")}
    <div class="sr tape" style="font-size:10px;border:none"><dt class="soft">EXPORT AVAILABILITY</dt><dd style="color:var(--goldb);text-align:right">${p.avail}</dd></div></dl>
    <div style="margin-top:auto;padding-top:24px;display:flex;gap:12px;flex-wrap:wrap"><a href="contact.html" class="btn-gold btn-sm">Request allocation</a><a href="#" class="btn-ghost btn-sm">Download spec sheet ↓</a></div>
  </div>
</div>`;
}

function initProducts(){
  const list=document.getElementById("prodlist");
  if(!list)return;

  list.innerHTML=`
<div class="grid4" style="margin-bottom:36px" id="prodcards">
${products.map((p,i)=>`<button class="prod-tab glass card rev${i===0?" prod-tab-active":""}" data-idx="${i}" style="display:block;text-align:left;width:100%;cursor:pointer;border:1px solid ${i===0?"var(--goldb)":"var(--gline)"};transition:border-color .2s">
  <div style="height:130px;border-radius:18px;margin-bottom:22px;overflow:hidden">
    <img src="${productImgs[p.id]}?w=600&h=260&fit=crop&auto=format&q=80" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy">
  </div>
  <p class="tape" style="color:var(--goldb);font-size:9px;margin-bottom:10px">SMH-00${i+1}</p>
  <h3 class="disp" style="font-size:19px">${p.name}</h3>
  <p class="tape" style="color:var(--gold);margin-top:8px;font-size:10px">${p.purity.toUpperCase()}</p>
  <p class="soft" style="font-size:13.5px;margin-top:10px;line-height:1.6">${p.desc.split(".")[0]}.</p>
  <p class="tape" style="color:var(--goldb);font-size:9px;margin-top:18px;letter-spacing:.1em">VIEW SPECS →</p>
</button>`).join("\n")}
</div>
<div id="proddetail" style="margin-bottom:90px">${renderDetail(products[0],0)}</div>`;

  document.getElementById("prodcards").addEventListener("click",e=>{
    const btn=e.target.closest(".prod-tab");
    if(!btn)return;
    const idx=+btn.dataset.idx;
    document.querySelectorAll(".prod-tab").forEach((b,i)=>{
      b.style.borderColor=i===idx?"var(--goldb)":"var(--gline)";
      b.classList.toggle("prod-tab-active",i===idx);
    });
    document.getElementById("proddetail").innerHTML=renderDetail(products[idx],idx);
  });
}

document.addEventListener("DOMContentLoaded",initProducts);
