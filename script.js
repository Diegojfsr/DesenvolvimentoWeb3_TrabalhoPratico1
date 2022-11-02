const generateFrase = function() {
    let url;
    let category =  document.getElementById("category").value;
 
    if(category !== "all") {
      url ="https://api.chucknorris.io/jokes/random?category=" + category;
    } else {
         url ="https://api.chucknorris.io/jokes/random";
    }
 
    fetch(url)
    .then(function(response) {
        return response.json(); 
    }) // Obtendo os dados JSON

    .then(function(data) {

        // Armazenar as cotações internamente
        // conclusão bem sucedida
        this.data = data; 

        // Exibindo a frase Quando a página é carregada
        console.log(this.data);
        
    // document.getElementById("icon").src = this.data.icon_url;
        document.getElementById("Frase").innerHTML = this.data.value;
    }).catch(function() {
        console.log("error");
    });
 
 }
 window.onload = function() {
     generateFrase();
     document.getElementById("generate").addEventListener('click', generateFrase);
 }