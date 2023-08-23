//GET

const listProducts = () => {
    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .catch(error => console.log(error))
}

const createProducts = (name, imageUrl, price) => {
    fetch(`http://localhost:3000/products`,{
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name,
            imageUrl,
            price
        })
    })
    .then(response => {
        if(response.ok){
            return response.body
        }
    })
    throw new Error("Não foi possível criar o produto.")
}

export const servicesProducts = {
    listProducts,
    createProducts
}