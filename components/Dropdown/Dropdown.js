class Dropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.dropdown-button');
      //console.log(this.button)
      this.content = this.element.querySelector('.dropdown-content');
      //console.log(this.content)
      this.button.addEventListener('click',()=> this.toggleContent())    
    }
  
    toggleContent() {
      
      this.content.classList.toggle('dropdown-hidden');
    }
  }

  class Icon{
    constructor(element){
      this.element = element;
      this.button = this.element.querySelector('.dropdown-button');
      this.icon = this.element.querySelector('.btn-icon');
      //console.log(this.icon)

      this.button.addEventListener('click', ()=> this.buttonicon())
      this.button.addEventListener('click',function(){
        //console.log('iwasclicked')
      })   
    }
    buttonicon(){
      this.icon.classList.toggle('open');
    }

  }
  
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

  let icons = document.querySelectorAll('.dropdown').forEach( icon => new Icon(icon));
  console.log(icons)