class Product{
    constructor(id,name,price,stock,status){
        this.id=id;
        this.name=name;
        this.price=price;
        this.stock=stock;
        this.status=status;
    }
}

let ProductList=[];
let productId=0;
let deleteButtons;
let updateButtons;
let selectCheckBox;
class ProductCrud{
    Add(name,price,stock,status){
        productId++;
        const newProduct=new Product(productId,name,price,stock,status);

        ProductList.push(newProduct);
        alert("Ürün Ekleme Başarılı");
        this.List();
    }
    Delete(id){
        let product=ProductList.find(urun=> urun.id==id);//liste içerisinde verilen şarta göre nesne bulma
        if(product){
            let productIndex=ProductList.findIndex(x=>x.id==product.id);
            ProductList.splice(productIndex,1);

            this.List();
        }
        else{
            alert("Ürün Bulunamadı");
        }
    }
    Update(id,name,price,stock,status){
        let product=ProductList.find(urun=> urun.id==id);
        if(product){
            product.name=name;
            product.price=price;
            product.stock=stock;
            product.status=status

            alert(`${product.name} Adlı Ürün Düzenleme İşlemi Başarılı`);
            this.List();
        }
        else{
            alert("Ürün Bulunamadı");
        }
    }
    List(){
        let dataList=document.querySelector(".dataList");
        dataList.innerHTML="";
        ProductList.forEach(product=>{
            let data=   `
                            <tr>
                                <td>${product.id}</td>
                                <td>${product.name}</td>
                                <td>${product.price} TL</td>
                                <td>${product.stock}</td>
                                <td>${product.status==true?"Active":"Passive"}</td>
                                <td><input type="checkbox" class="select" value="${product.id}"></td>
                                <td>
                                    <button class="delete" value="${product.id}">Sil</button>
                                    <button class="update" value="${product.id}">Güncelle</button>
                                </td>
                            </tr>
                        `;
            dataList.innerHTML+=data;
       });

       
       
       //silme butonlarını listeleyim silme için hazır hale getirme
        deleteButtons=document.querySelectorAll(".delete");
        deleteButtons.forEach((button)=>{
        button.addEventListener("click",function(){
            document.querySelector("#DeleteProduct #id").value=this.value;
            })
        })
       //güncelleme butonlarını listeleyim günceleme için hazır hale getirme
        deleteButtons=document.querySelectorAll(".update");
        deleteButtons.forEach((button)=>{
        button.addEventListener("click",function(){
            let product=ProductList.find(x=>x.id==this.value);

            document.querySelector("#UpdateProduct #id").value=product.id;
            document.querySelector("#UpdateProduct #name").value=product.name;
            document.querySelector("#UpdateProduct #price").value=product.price;
            document.querySelector("#UpdateProduct #stock").value=product.stock;
            document.querySelector("#UpdateProduct #status").checked=product.status;

            })
        })
    }
}

const ProductManagament=new ProductCrud()

document.querySelector(".add-product").addEventListener("click",function(){
    let productName=document.querySelector("#AddProduct #name").value;
    let productPrice=document.querySelector("#AddProduct #price").value;
    let productStock=document.querySelector("#AddProduct #stock").value;
    let productStatus=document.querySelector("#AddProduct #status").checked;

    ProductManagament.Add(productName,productPrice,productStock,productStatus);
});

document.querySelector(".delete-product").addEventListener("click",function(){
    const id=document.querySelector("#DeleteProduct #id").value;
    ProductManagament.Delete(id);
})

document.querySelector(".update-product").addEventListener("click",function(){

    const id=document.querySelector("#UpdateProduct #id").value;
    const name=document.querySelector("#UpdateProduct #name").value;
    const price=document.querySelector("#UpdateProduct #price").value;
    const stock=document.querySelector("#UpdateProduct #stock").value;
    const status=document.querySelector("#UpdateProduct #status").checked;

    ProductManagament.Update(id,name,price,stock,status);
})

function selectDelete(){
    checkSelect=document.querySelectorAll(".select");
    checkSelect.forEach((checkSelect)=>{
        if(checkSelect.checked==true){
            ProductManagament.Delete(checkSelect.value);
        }
    })
}
function selectUpdatePrice(){
    checkSelect=document.querySelectorAll(".select");
    checkSelect.forEach((checkSelect)=>{
        if(checkSelect.checked==true){
            ProductList.forEach((product)=>{
                if(product.id==checkSelect.value){
                    product.price=product.price*1.18;
                }
            });
        }
    })
    ProductManagament.List();
}

let selectAllStatus=false;
function selectAll(){
    selectAllStatus=!selectAllStatus;
    checkSelect=document.querySelectorAll(".select");
    checkSelect.forEach((checkSelect)=>{
        checkSelect.checked=selectAllStatus;
        document.querySelector(".selectAll").innerText=selectAllStatus?"Seçimi Bırak":"Tümünü Seç";
    })
}

let addProductPanelStatus=true;
document.querySelector(".add-io").addEventListener("click",function(){
    addProductPanelStatus=!addProductPanelStatus;
    document.getElementById("AddProduct").style.display=addProductPanelStatus?"block":"none";
    document.querySelector(".add-io").innerText=addProductPanelStatus?"˄":"˅"
    
})
let deleteProductPanelStatus=true;
document.querySelector(".delete-io").addEventListener("click",function(){
    deleteProductPanelStatus=!deleteProductPanelStatus;
    document.getElementById("DeleteProduct").style.display=deleteProductPanelStatus?"block":"none";
    document.querySelector(".delete-io").innerText=deleteProductPanelStatus?"˄":"˅"

})
let updateProductPanelStatus=true;
document.querySelector(".update-io").addEventListener("click",function(){
    updateProductPanelStatus=!updateProductPanelStatus;
    document.getElementById("UpdateProduct").style.display=updateProductPanelStatus?"block":"none";
    document.querySelector(".update-io").innerText=updateProductPanelStatus?"˄":"˅"

})