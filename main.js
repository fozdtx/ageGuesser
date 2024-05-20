function pixalise(input){
  return input + 'px';
}



var DIPPLE_BUTTON_UUID = crypto.randomUUID();

function DIPPLE_Button(){
  
  return '_DIPPLE_BUTTON_UUID_' + DIPPLE_BUTTON_UUID;
  
  DIPPLE_BUTTON_UUID = crypto.randomUUID();
  
}



var DIPPLE_Button_Create_Location = 'unidef';


var DIPPLE_Button_Label = 'Click Me';

function DIPPLE_Create_Button(_DIPPLE_BUTTON_){
  if (_DIPPLE_BUTTON_ === ('_DIPPLE_BUTTON_UUID_' + DIPPLE_BUTTON_UUID)){
    
    
    if (DIPPLE_Button_Create_Location === 'unidef'){
      document.body.innerHTML += '<button id="'+'_DIPPLE_BUTTON_UUID_' + DIPPLE_BUTTON_UUID+'" class="ripple-button" onclick="createRipple(event)">'+ DIPPLE_Button_Label +'</button>';
    }
    else {
      document.getElementById(DIPPLE_Button_Create_Location).innerHTML += '<button id="'+ '_DIPPLE_BUTTON_UUID_' + DIPPLE_BUTTON_UUID +'" class="ripple-button" onclick="createRipple(event)">'+ DIPPLE_Button_Label +'</button>';
    }
    
    
  }
  else {
    console.error('DIPPLE ERROR INVALID DATATYPE EXPECTED DIPPLE_Button() DataType only');
  }
}








function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  const rect = button.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add("ripple");
  const ripples = button.getElementsByClassName("ripple");
  if (ripples.length > 0) {
    ripples[0].remove();
  }
  button.appendChild(circle);
}













function DIPPLE_Style_Element(_DIPPLE_ELEMENT){
  
  if (_DIPPLE_ELEMENT.includes('_DIPPLE_')){
    
    
    
    var get_root = document.getElementById(_DIPPLE_ELEMENT).style;
    
    return {
      
      
      background(bg){
        
        get_root.backgroundColor = bg;
        
      },
      
      
      
      
      textColor(col){
        
        
        get_root.color = col;
        
        
      },
      
      
      
      
      borderWidth(px){
        
        
        get_root.borderWidth = px;
        
        
      },
      
      
      
      borderColor(col){
        
        get_root.borderColor = col;
        
      },
      
      
      
      
      borderStyle(type){
        
        get_root.borderStyle = type;
        
      },
      
      
      
      
      borderRadius(px){
        
        get_root.borderRadius = px;
        
      },
      
      
      
      font(fon){
        
        get_root.fontFamily = fon;
        
      },
      
      
      
      fontSize(px){
        
        get_root.fontSize = pixalise(px);
        
      },
      
      
      
      fontStyle(st){
        
        get_root.fontStyle = st;
        
      },
      
      
      
      
      height(px){
        
        get_root.height = pixalise(px);
        
      },
      
      
      width(px){
        
        get_root.width = pixalise(px);
        
      }
      
      
      
    }
    
    
    
  }
  else {
    console.error('DIPPLE ERROR INVALID OPERANDS T O DIPPLE STYLES ONLY ACCEPTS DIPE DATATYPES');
  }
  
}
