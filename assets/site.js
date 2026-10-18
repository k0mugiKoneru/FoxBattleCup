const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
});
document.querySelectorAll('[data-setting-link]').forEach(el => {
  const key = el.dataset.settingLink;
  const url = window.FBC_CONFIG?.[key];
  if (url && /^https:\/\//i.test(url)) {
    el.href = url;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.removeAttribute('aria-disabled');
    el.classList.remove('disabled');
    const labels = {
      entryForm: '参加表明フォームを開く ↗',
      contactForm: 'お問い合わせフォームを開く ↗',
      operationsForm: 'eSports大会運営について問い合わせる ↗'
    };
    el.textContent = el.dataset.readyLabel || labels[key] || 'フォームを開く ↗';
  }
});
