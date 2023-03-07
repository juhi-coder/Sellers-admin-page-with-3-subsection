function saveToLocalStorage(event)
{
    event.preventDefault();
    const SellingPrice=event.target.SellingPrice.value;
    const ProductName=event.target.ProductName.value;
    const category=event.target.category.value;

    const obj={
        SellingPrice,
        ProductName,
        category
    }
    axios.post('https://crudcrud.com/api/60cdce0c7c6c4ed7a92df01d2b8d99da/sellersAdminPage',obj)
    .then((response)=>{
        showDetails(response.data)
        //console.log(response)
    })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4>something went wrong</h4>";
            console.log(err)
        })
    //localStorage.setItem(obj.d,JSON.stringify(obj))
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/60cdce0c7c6c4ed7a92df01d2b8d99da/sellersAdminPage")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++)
        {
            showDetails(response.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })  
    })


    function showDetails(obj){
        const p=document.getElementById('category').value

        const c=document.createElement('li')
        const a=document.getElementById('Electronic')
        const b=document.getElementById('Food')
        const d=document.getElementById('SkinCare')
        c.textContent=obj.SellingPrice+'-'+obj.ProductName+'-'+obj.category
        if(p==="Electronic"){
            a.appendChild(c);
        }
        else if(p==="Food"){
            b.appendChild(c);
        }
        else if(p==="SkinCare"){
            d.appendChild(c);
        }
       
            const DeleteItem=document.createElement('input')
            DeleteItem.type='button'
            DeleteItem.value='Delete'
            DeleteItem.onclick=()=>{
                axios.delete(`https://crudcrud.com/api/60cdce0c7c6c4ed7a92df01d2b8d99da/sellersAdminPage/${obj._id}`).then((response)=>{
                    if(p==="Electronic"){
                        a.removeChild(c);
                    }
                    else if(p==="Food"){
                        b.removeChild(c);
                    }
                    else if(p==="SkinCare"){
                        d.removeChild(c);
                    }
                }).catch((err)=>console.log(err))
                    
            }
            
            c.appendChild(DeleteItem);
        //    // c.appendChild(EditItem);
        //     //p.appendChild(c);
            }
        