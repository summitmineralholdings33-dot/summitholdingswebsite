/* ── EmailJS setup ───────────────────────────────────────────────────────
   Steps to activate (takes ~5 minutes):
   1. Create a free account at https://www.emailjs.com
   2. Click "Add New Service" → choose Gmail → connect summitmineralholdings33@gmail.com
      Copy the Service ID and paste it as EJ_SVC below
   3. Click "Email Templates" → "Create New Template"
      In the template body use these variables:
        From: {{from_name}} <{{from_email}}>
        Subject: {{subject}}
        Message: {{message}}
        Organisation: {{organisation}}  (investors form only)
        Track: {{track}}                (investors form only)
      Set "To email" to summitmineralholdings33@gmail.com, then Save
      Copy the Template ID and paste it as EJ_TPL below
   4. Click "Account" → "General" → copy your Public Key → paste as EJ_KEY
   ──────────────────────────────────────────────────────────────────────── */
const EJ_KEY = 'UM8cE83rvzhkii5wi'; // ← Account › General › Public Key
const EJ_SVC = 'service_3y7fp6d';   // ← Email Services tab
const EJ_TPL = 'template_khnmdub';  // ← Email Templates tab

emailjs.init(EJ_KEY);

function sendInvestorEnquiry(){
  const wrap = document.getElementById('invform');
  const btn  = document.querySelector('#inv-form .btn-gold');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  emailjs.sendForm(EJ_SVC, EJ_TPL, '#inv-form')
    .then(()=>{
      wrap.innerHTML='<div style="text-align:center;padding:52px 0"><p class="disp goldtxt" style="font-size:28px;margin-bottom:10px">Message sent.</p><p class="soft">Our trade desk will reply within one business day.</p></div>';
    })
    .catch(()=>{
      btn.textContent='Send enquiry';
      btn.disabled=false;
      alert('Something went wrong. Please email us at summitmineralholdings33@gmail.com');
    });
}

function sendContactMessage(){
  const wrap = document.getElementById('cform');
  const btn  = document.querySelector('#contact-form .btn-gold');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  emailjs.sendForm(EJ_SVC, EJ_TPL, '#contact-form')
    .then(()=>{
      wrap.innerHTML='<div style="text-align:center;padding:52px 0"><p class="disp goldtxt" style="font-size:28px;margin-bottom:10px">Message sent.</p><p class="soft">Our trade desk will reply within one business day.</p></div>';
    })
    .catch(()=>{
      btn.textContent='Send message';
      btn.disabled=false;
      alert('Something went wrong. Please email us at summitmineralholdings33@gmail.com');
    });
}
