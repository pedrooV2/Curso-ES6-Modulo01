
// 2. Const e Let
// Const
  // As constantes não podem ter seu valor reatribuído, mas sa mutação dos valores é possível.
  const user = { name : 'Pedro Lucas'};

  user.name = 'Gabriel';
  
  console.log(user); 
  
  // Let
  // São variáveis de escopo. Ela pode ter seu valor reatribuído
  function bigger(x){
    let y = 2;
  
    if(x > 5){
      console.log(x, y);
    }
  }
  //console.log(y); Não enxerga a variável "y"
  
  bigger(10);
  
  /*============================================================================================*/