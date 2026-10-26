(() => {
  const browser = document.querySelector('[data-publication-browser]');
  if (!browser) return;

  const tools = browser.querySelector('.publication-tools');
  const buttons = Array.from(browser.querySelectorAll('[data-filter]'));
  const papers = Array.from(browser.querySelectorAll('.paper'));
  const groups = browser.querySelectorAll('[data-publication-group]');

  const filterPapers = (selected) => {
    const topic = selected.dataset.filter;

    papers.forEach((paper) => {
      const tags = (paper.dataset.tags || '').split(' ');
      paper.hidden = topic !== 'all' && !tags.includes(topic);
    });

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button === selected));
    });
    groups.forEach((group) => {
      group.hidden = !group.querySelector('.paper:not([hidden])');
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => filterPapers(button));
  });
  filterPapers(buttons[0]);
  tools.hidden = false;
})();
