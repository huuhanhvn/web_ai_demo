const root = document.getElementById('cards');
const search = document.getElementById('search');

function render(list){
  root.innerHTML = '';
  if(list.length === 0){
    root.innerHTML = '<div class="empty">Không tìm thấy vai trò phù hợp…</div>';
    return;
  }
  list.forEach(x => {
    const card = document.createElement('section');
    card.className = 'card';
    card.innerHTML = `
      <h3>${x.name}</h3>
      <div>${x.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <ul>${x.tasks.map(t=>`<li>${t}</li>`).join('')}</ul>
    `;
    root.appendChild(card);
  });
}

function filter(){
  const q = (search.value||'').toLowerCase();
  const filtered = window.ROLES.filter(x => 
    x.name.toLowerCase().includes(q) || 
    x.tags.some(t => t.toLowerCase().includes(q)) ||
    x.tasks.some(t => t.toLowerCase().includes(q))
  );
  render(filtered);
}

search.addEventListener('input', filter);
render(window.ROLES);
