let productId = 0;
const ProductList = [];

class Product {
    constructor(id, name, price, stock, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.status = status;
    }

    Detail() {
        console.log("Product Name: " + this.name + " Price: " + this.price + " Stock: " + this.stock);
    }
}

class ProductCrud {
    Add(name, price, stock, status) {
        productId++;
        const newProduct = new Product(productId, name, price, stock, status);
        ProductList.push(newProduct);
        alert(product.name + "isimli ürün eklendi paşam");
        this.listProduct();
    }

    Delete(id) {
        let product = ProductList.find(p => p.id === id);
        if (product) {
            let productIndex = ProductList.findIndex(p => p.id === id);
            ProductList.splice(productIndex, 1);
            alert (product.name  + "isimli ürün silindi paşam: ") ;
            this.listProduct();
        } else {
            alert("Kör müsün doğru gir aq " + id + "ya bastın parmağını siktiğim ");
        }
    }

    Update(id, name, price, stock, status) {
        let index = ProductList.findIndex(p => p.id === id);
        if (index !== -1) {
            let product = ProductList[index];
            product.name = name;
            product.price = price;
            product.stock = stock;
            product.status = status;
            alert(product.name + "isimli ürün güncellendi paşam");
            this.listProduct();
        } else {
            alert("Kör müsün doğru gir aq " + id + "ya bastın parmağını siktiğim ");
        }
    }

    listProduct() {
        let detailList = document.querySelector(".dataList");
        detailList.innerHTML = "";
        ProductList.forEach(product => {
            let data = '<tr><td>' + product.id + '</td><td>' + product.name + '</td><td>' + product.price + '</td><td>' + product.stock + '</td><td>' + product.status + '</td><td class="settings"><button onclick="productCrud.Update(' + product.id + ', prompt(\'Name:\', \'' + product.name + '\'), prompt(\'Price:\', \'' + product.price + '\'), prompt(\'Stock:\', \'' + product.stock + '\'), confirm(\'Status:\'));">Update</button><button onclick="productCrud.Delete(' + product.id + ')">Delete</button></td></tr>';
            detailList.innerHTML += data;
        });
    }
}

const productCrud = new ProductCrud();



const ProductManager = new ProductCrud();

document.querySelector(".add-product").addEventListener("click", function () {
    let productName = document.querySelector("#AddProduct #name").value;
    let productPrice = document.querySelector("#AddProduct #price").value;
    let productStock = document.querySelector("#AddProduct #stock").value;
    let productStatus = document.querySelector("#AddProduct #status").checked;

    ProductManager.Add(productName, productPrice, productStock, productStatus);
});


document.querySelector(".delete-product").addEventListener("click", function () {
    let productId = parseInt(document.querySelector("#DeleteProduct #id").value);
    if (!isNaN(productId)) {
        ProductManager.Delete(productId);
    }
});

document.querySelector(".update-product").addEventListener("click", function () {
    let productId = parseInt(document.querySelector("#UpdateProduct #id").value);
    let productName = document.querySelector("#UpdateProduct #name").value;
    let productPrice = document.querySelector("#UpdateProduct #price").value;
    let productStock = document.querySelector("#UpdateProduct #stock").value;
    let productStatus = document.querySelector("#UpdateProduct #status").checked;

    if (!isNaN(productId)) {
        ProductManager.Update(productId, productName, productPrice, productStock, productStatus);
    }
});