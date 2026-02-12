async function FetchProdutos () {
    
    let produtos = []
    
    await fetch("http://localhost:4567/")
        .then(Response => Response.json())
        .then((data) => {
            produtos = data;   
        })
        .catch(error => console.error(error));
    
        return produtos;

}
export default FetchProdutos;