const treeUl = document.querySelector('ul');

treeUl.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName !== 'SPAN') {
    return;
  }
  const li = target.parentNode;
  const childrenContainer = li.querySelector('ul');
  if (!childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
})
