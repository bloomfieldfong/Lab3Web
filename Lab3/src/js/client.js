const state = {
  filter : ['ALL','COMPLETED','ACTIVE'],
  list : [[1,"khe"],[0,"gasdd"],[1,'mich'],[2,'ma']],
  charging : true
};

const listInput = (text, i) => {
  state.list.push([i, text]);
}

const render = lState => {
  const topBar = document.createElement('div');
  topBar.className = 'topBar';

  const downBar = document.createElement('div');
  const input = document.createElement('input');
  input.className = 'input';
  const addButton = document.createElement('button');
  addButton.className = 'addButton'

  downBar.appendChild(addButton);
  downBar.appendChild(input);

  for(let i = 0; i < 3; i++){
    const filter = document.createElement('button');
    filter.className = "filter";
    filter.innerHTML = state.filter[i];
    topBar.appendChild(filter);

    filter.onclick = () =>{ 
      switch(i){
        case 0:
          root.innerHTML = null;    
          render(state);
          for(let x=0; x < state.list.length; x++){
            const allStates = document.createElement('button');
            allStates.innerHTML = state.list[x][1];
            allStates.className = 'allStates';
            root.appendChild(allStates);

          }
          break;
        case 1:
          root.innerHTML = null;    
          render(state);
          for(let k=0; k < state.list.length; k++){
            if(state.list[k][0] === 1){
              const completedStates = document.createElement('button');
              completedStates.innerHTML = state.list[k][1]
              completedStates.className = 'allStates'
              root.appendChild(completedStates);
            }
          }
          break;
        case 2:
          root.innerHTML = null;    
          render(state);
          for(let j=0; j < state.list.length; j++){
            if(state.list[j][0] === 2){
              const activeStates = document.createElement('button');
              activeStates.innerHTML = state.list[j][1]
              activeStates.className = 'allStates'
              root.appendChild(activeStates);
            }
          }
          break;
      }
      
    }
  }

  root.appendChild(topBar);
  root.appendChild(downBar);
}
render(state);