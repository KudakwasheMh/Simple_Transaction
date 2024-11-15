//Customer
//addevent listener
var cadd = document.getElementById("custadd");
cadd.addEventListener("click", ToCustomer);
let customer =[]; // initialize customer array     
function ToCustomer(event){
    event.preventDefault(); //prevents reload      

    //get values
    var cname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;

    if (cname == "" || lname == "") {
        alert("Please fill out all fields");
    }
    else {
        var cid = Date.now();
        var cust = {
            id : cid,
            name : cname,
            lname: lname
        };
        customer.push(cust);// push to customer array
        console.log(customer);
        //add to table
        var ctab = document.getElementById("cust");
        var crow = ctab.insertRow(1);
        var ccell1 = crow.insertCell(0);
        var ccell2 = crow.insertCell(1);
        ccell1.innerHTML = cname;
        ccell2.innerHTML = lname;

        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";

        //Delete customer and update dropdown
        crow.addEventListener("click", function(){
            this.remove();
            dropdown.remove(this.value);
        });

        //Add customer to dropdown
        const dropdown = document.getElementById("customer");
        const option = document.createElement("option");
        option.value = cname;
        option.text = cname;
        dropdown.add(option);
    }
}

//Product
var cadd = document.getElementById("prodadd");
cadd.addEventListener("click", ToProduct);
let product =[]; // initialize product array  
    
function ToProduct(event){
    event.preventDefault(); //prevents reload
    
    //get values
    var pname = document.getElementById("name").value;
    var price = document.getElementById("price").value;

    if (pname == "" || price == "") {
        alert("Please fill out all fields");
    }
    else {
        var pid = Date.now();
        var prod = {
            id : pid,
            name : pname,
            price: price
        };
        product.push(prod);// push to product array
        console.log(product);
        //add to table
        var ptab = document.getElementById("prod");
        var prow = ptab.insertRow(1);
        var pcell1 = prow.insertCell(0);
        var pcell2 = prow.insertCell(1);
        pcell1.innerHTML = pname;
        pcell2.innerHTML = "R" + price;

        document.getElementById("name").value = "";
        document.getElementById("price").value = "";

        //Delete product
        prow.addEventListener("click", function(){
            this.remove();
            dropdown.remove(this.value);
        });

        //Add Product to dropdown
        const dropdown = document.getElementById("product");
        const option = document.createElement("option");
        option.value = pname;
        option.text = pname;
        dropdown.add(option);
    }
}


//Transaction
var tadd = document.getElementById("transadd");
tadd.addEventListener("click", ToTransaction);
let Transaction =[]; // initialize transaction array  
    
function ToTransaction(event){
    event.preventDefault(); //prevents reload 

    //get values
    var cust = document.getElementById("customer").value;
    var prod = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var price = 0;

    if (cust == "" || product == "" || isNaN(quantity) || quantity <= 0) {
        alert("Please fill out all fields");
    }

     // Find the selected product's price
    const selectedprod = product.find(p => p.name === prod);
    if (selectedprod) {
        price = selectedprod.price;
    }

    //calculate total transaction price
    const total = price * quantity;
        var tid = Date.now();
        var transaction = {
            id : tid,
            customer : cust,
            product : prod,
            quantity: quantity,
            price: total
        };
        Transaction.push(transaction);// push to transaction array
        console.log(Transaction);
        
        //add to table
        var ttab = document.getElementById("trans");
        var trow = ttab.insertRow(1);
        var tcell1 = trow.insertCell(0);
        var tcell2 = trow.insertCell(1);
        var tcell3 = trow.insertCell(2);
        var tcell4 = trow.insertCell(3);
        tcell1.innerHTML = cust;
        tcell2.innerHTML = prod;
        tcell3.innerHTML = quantity;
        tcell4.innerHTML = "R" + total;

        document.getElementById("quantity").value = "";

        //Delete transaction
        trow.addEventListener("click", function(){
            this.remove();
        });
    
}



