const WHATSAPP_NUMBER = '60187743577';

/* MAIN CTA BUTTON */
const waMainBtn = document.getElementById('wa-main-btn');
const defaultMsg = 'Hi hs.nz! Saya berminat dengan e-kad digital kat profile ni.';
waMainBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;

/* ORDER BUTTONS — pre-select produk + scroll to form */
document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const produkSelect = document.getElementById('lead-produk');
    produkSelect.value = btn.dataset.template;
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* LEAD FORM — builds a WhatsApp message, no backend/database involved */
const leadForm = document.getElementById('lead-form');
leadForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const nama = document.getElementById('lead-name').value.trim();
  const phone = document.getElementById('lead-phone').value.trim();
  const produk = document.getElementById('lead-produk').value;
  const msg = document.getElementById('lead-msg').value.trim();

  const lines = [
    'Hi hs.nz! Saya berminat nak deal.',
    `Nama: ${nama}`,
    `No. WhatsApp: ${phone}`,
    `Produk diminati: ${produk}`,
  ];
  if (msg) lines.push(`Mesej: ${msg}`);

  const text = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
});
