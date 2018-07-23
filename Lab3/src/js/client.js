const state = {
  filter : ['ALL','COMPLETED','ACTIVE'],
  list : [],
  charging : true,
  filterActive: 0
};

const listInput = (title) => {
  state.list.push([title, false]);
}

const solicitud = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
solicitud
  .then(resultado => resultado.json())
  .then(resultadoJSON =>{
    for (let i = 0; i < resultadoJSON.length; i += 1) {
      state.list.push([resultadoJSON[i].title, resultadoJSON[i].isCompleted])
    }
    console.log(state.tasks)
    render(state);});

const render = lState => {

  root.innerHTML = null;
  const topBar = document.createElement('div');
  topBar.className = 'topBar';

  const downBar = document.createElement('div');
  const input = document.createElement('input');
  input.className = 'input';
  const addButton = document.createElement('button');
  addButton.className = 'addButton'
  addButton.innerHTML = "Add"

  const middleBar = document.createElement('div');
  middleBar.className = 'middleBar';

  downBar.appendChild(addButton);
  downBar.appendChild(input);

  for(let i = 0; i < 3; i++){
    const filter = document.createElement('button');
    filter.className = "filter";
    filter.innerHTML = state.filter[i];
    topBar.appendChild(filter);

    filter.onclick = (self) =>{ 
      lState.filterActive = i;
      render(lState)
    }

    addButton.onclick = () =>{ 
      listInput(document.getElementsByClassName('input')[0].value);
      console.log(document.getElementsByClassName('input')[0].value)
      console.log(state.list)
      render(lState)
    }

  }
  root.appendChild(topBar);
  switch(lState.filterActive){
    case 0:
    console.log(state.list)
      for(let x=0; x < state.list.length; x++){
        const states = document.createElement('button');
        states.className = "states"
        states.innerHTML = state.list[x][0]; 
        middleBar.appendChild(states)
        root.appendChild(middleBar); 
      }
      break;
    case 1:

      for(let k=0; k < state.list.length; k++){
        if(state.list[k][1] == true){
          const states = document.createElement('button');
          states.className = "states"
          states.innerHTML = state.list[k][0]; 
          middleBar.appendChild(states)
          root.appendChild(middleBar); 
        }
      }
      break;
    case 2:

      for(let j=0; j < state.list.length; j++){
        if(state.list[j][1] == false){
          const states = document.createElement('button');
          states.className = "states"
          states.innerHTML = state.list[j][0]; 
          middleBar.appendChild(states)
          root.appendChild(middleBar);  
        }
      }
      break;
  } 

  
  root.appendChild(downBar);  
}

render(state);