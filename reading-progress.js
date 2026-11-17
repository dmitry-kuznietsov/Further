(() => {
  const bar = document.getElementById('home-reading-progress-bar');
  if (!bar) return;

  let scheduled = false;
  const update = () => {
    const root = document.documentElement;
    const body = document.body;
    const scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
    const pageHeight = Math.max(
      root.scrollHeight, body.scrollHeight,
      root.offsetHeight, body.offsetHeight
    );
    const viewport = window.innerHeight || root.clientHeight;
    const maxScroll = Math.max(0, pageHeight - viewport);
    const progress = maxScroll ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
    bar.style.transform = 'scaleX(' + progress + ')';
    scheduled = false;
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('load', schedule);
  window.addEventListener('pageshow', schedule);
  if ('ResizeObserver' in window) {
    new ResizeObserver(schedule).observe(document.body);
  }
  schedule();
})();
