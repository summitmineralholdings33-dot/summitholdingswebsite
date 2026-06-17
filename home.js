// Home page specific functionality
let ti = 0;
let ttimer;

function tstShow(i){
  ti = i;
  const t = tsts[i];
  const q = document.getElementById("tq");
  q.style.opacity = 0;
  q.style.transform = "translateY(12px)";
  setTimeout(() => {
    document.getElementById("tqq").textContent = t.q;
    document.getElementById("tqn").textContent = t.n;
    q.style.opacity = 1;
    q.style.transform = "none";
    document.querySelectorAll("#tdots button").forEach((b, j) => b.classList.toggle("on", j === i));
  }, 300);
}

function tstInit(){
  const dots = document.getElementById("tdots");
  if(!dots) return;
  dots.innerHTML = tsts.map((_, i) => `<button role="tab" aria-label="Testimonial ${i+1}"></button>`).join("");
  dots.querySelectorAll("button").forEach((b, i) => b.addEventListener("click", () => {
    clearInterval(ttimer);
    tstShow(i);
    loopT();
  }));
  document.getElementById("tqq").textContent = tsts[0].q;
  document.getElementById("tqn").textContent = tsts[0].n;
  dots.children[0].classList.add("on");
  loopT();
}

function loopT(){
  clearInterval(ttimer);
  ttimer = setInterval(() => tstShow((ti + 1) % tsts.length), 7000);
}

function homeInit(){
  // Initialize products grid
  const prodgrid = document.getElementById("prodgrid");
  if(prodgrid){
    prodgrid.innerHTML = products.map(prodCard).join("");
  }
  
  // Initialize testimonials
  tstInit();
  
  // Initialize globe
  globeInit("globe", "globelbl");
}

document.addEventListener("DOMContentLoaded", homeInit);
