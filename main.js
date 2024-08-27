const lista = document.getElementById('lista')

fetch('./html_dinamica/data.json')
.then((resp) => resp.json())
.then((data) => {

data.forEach((produto) => {
    const li = document.createElement('li')
    li.innerHTML = 
    "<h4>" + produto.nome + "</h4>" +
     "<p>" + produto.preco + "</p>" + 
     "<p>" + produto.id + "</p>" +
     "<hr>"
    lista.append(li)
})
})