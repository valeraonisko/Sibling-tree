const treeUls = document.getElementsByTagName('ul')[0];
const treeLis = document.querySelectorAll('li');
for (let i = 0; i< treeLis.length; i++) {
  let li = treeLis[i];
  let span = document.createElement('span');
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

treeUls.addEventListener('click', (event)=>{
  let target = event.target;
  if (target.tagName != 'SPAN') {
    return;
  }
  let li = target.parentNode;
  let childrenContainer = li.getElementsByTagName('ul')[0];
  if (!childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
})
