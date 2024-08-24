function riscar(e){

e.target.style.textDecoration = 'line-through';

}




$('form').on('submit', (e) => {
    e.preventDefault()

   const valor =  $('#tarefa').val()
  
  //add linha
   $('.mostrar').append(`<li>${valor}</li>`)

   //risca ao clicar
   $('.mostrar li').on('click', (e) => riscar(e))
    
})

