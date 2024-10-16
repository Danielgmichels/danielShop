$(function () {
    let storage = (localStorage.produtos) ?
        JSON.parse(localStorage.produtos) : [];

    //Evento de cadastro
    $(document).on('submit', '#cadastraProduto', function () {
        console.log("Entrou")
        //Pegar valores dos campos
        let title = $('#title').val()
        let description = $('#description').val()
        let img = $('#img').val()
        let price = $('#price').val()

        //Criar objeto para gravar
        let item = {
            title: title,
            description: description,
            img: img,
            price: price
        }

        //Adicionar o objeto do item no array de produtos
        storage.push(item)

        //Transformar os dados em string json e salvar no storage
        localStorage.setItem("produtos", JSON.stringify(storage))

        //Direcionar o usuario para index
        localStorage()

        return false
    })

    let loadProdutos = () => {
        let estrutura = ``
        let lista = (localStorage.produtos) ? JSON.parse(localStorage.produtos) : []

        for(pos in lista){
            estrutura += `
                <tr>
                    <td>${lista[pos].title}</td>
                    <td>${lista[pos].price}</td>
                    <td>${lista[pos].img}</td>
                    <td>${lista[pos].description}</td>
                    <td>
                        <a href="#" class="btn btn-info editaItem" rel="${pos}">E</a>
                        <a href="#" class="btn btn-danger deletaItem" rel="${pos}">D</a>
                    </td>
                </tr>
            `
        }

        //Injetar as linhas na tabela
        $('#loadProdutos').html(estrutura)
    }

    //Chamando a função
    loadProdutos()

    //Deletar um item
    $(document).on('click', '.deletaItem', function(){
        let itemId = $(this).attr('rel')
        storage.splice(itemId, 1)
        localStorage.setItem("produtos", JSON.stringify(storage))
        loadProdutos()

        return false
    })
})