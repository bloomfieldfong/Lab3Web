const state = {
  filter : ['ALL','COMPLETED','ACTIVE'],
  list : [],
  charging : true
};

const render = lState => {
  const topBar = document.createElement('div');
  topBar.className = 'topBar'

  for(let i = 0; i < 3; i++){
    const filter = document.createElement('button');
    filter.className = "filter";
    filter.innerHTML = state.filter[i];
    topBar.appendChild(filter);
  }

  const input = document.createElement('input');
 
  root.appendChild(topBar)
  root.appendChild(input)
}
render(state);