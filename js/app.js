$(function(){
    let estrutura = ``

    let loadProdutos = () => {
        // $.ajax({
        //     url : "/produtos.json",
        //     dataType : "JSON",
        //     success : function(data){
                //Fazer loop nos produtos
                let lista = ((localStorage.produtos) ? JSON.parse(localStorage.produtos) : [])

                for(pos in lista){
                    estrutura += `
                        <div class="col-md-3 col-sm-12">
                        <div class="card">
                            <img src="img/${lista[pos].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${lista[pos].title}</h5>
                                <p class="card-text">${lista[pos].description}</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                                <span class="badge bg-danger fs-6">R$ ${lista[pos].price}</span>
                            </div>
                        </div>
                        </div>
                    `
                }

                //Injetar o conteúdo no index
                $('#loadProdutos').html(estrutura)
            // }  
        // })
    }

    //Carregar produtos
    loadProdutos()
})