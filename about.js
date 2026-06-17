// Initialize team grid on About page
function initTeam(){
  const grid = document.getElementById("teamgrid");
  if(grid){
    grid.innerHTML = team.map(p=>`<div class="glass card rev"><div style="height:54px;width:54px;border-radius:99px;display:grid;place-items:center;margin-bottom:20px;background:linear-gradient(135deg,rgba(232,201,122,.35),rgba(154,122,46,.15))" class="disp">${p[0].split(" ").map(n=>n[0]).slice(0,2).join("")}</div><h3 class="disp" style="font-size:19px">${p[0]}</h3><p class="tape" style="color:var(--gold);font-size:9px;margin-top:5px">${p[1].toUpperCase()}</p><p class="soft" style="font-size:13.5px;margin-top:14px;line-height:1.65">${p[2]}</p></div>`).join("");
  }
}

document.addEventListener("DOMContentLoaded", initTeam);
