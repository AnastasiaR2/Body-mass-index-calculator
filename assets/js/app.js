
  function imt(){

    let mass = +massInput.value;
  
    let height = +heightInput.value;

    if(height > 3){

      height = height / 100;

    }
  
    let index = mass / (height ** 2);

    index = Math.floor(index * 10) / 10;

    indexPlace.innerHTML = index;

    if(index <= 16){

      meaningPlace.innerHTML = 'выраженный дефицит массы тела';

    }else if( (index > 16) && (index < 18.5) ){

      meaningPlace.innerHTML = 'недостаточная (дефицит) масса тела';

    }else if( (index >= 18.5) && (index < 25) ){

      meaningPlace.innerHTML = 'норма';

    }else if( (index >= 25) && (index < 30) ){

      meaningPlace.innerHTML = 'избыточная масса тела (предожирение)';

    }else if( (index >= 30) && (index < 35) ){

      meaningPlace.innerHTML = 'ожирение 1 степени';

    }else if( (index >= 35) && (index < 40) ){

      meaningPlace.innerHTML = 'ожирение 2 степени';

    }else if(index >= 40){

      meaningPlace.innerHTML = 'ожирение 3 степени';

    }

  }