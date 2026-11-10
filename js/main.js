// function getApi() {

    // var xhttp = new XMLHttpRequest();

    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var result = this.responseText;
    //         var mohamed = JSON.parse(result); 
    //         var yassin = mohamed.products;



    //         var basket = "";
    //         for (var i = 0; i < yassin.length; i++) {

    //             var cartoona = ` <div class="md:col-4 text-center mb-12">
    //             <img src="${yassin[i].images[0]}" class="w-100  style="height:350px">
    //             <h4>${yassin[i].title}</h4>
    //             <h6>${yassin[i].description}</h6>
    //             <h6>${yassin[i].brand}</h6>
    //             <h6>${yassin[i].rating} of 5</h6>
    //             <h6>${yassin[i].price}$</h6>
    //             <h6>${yassin[i].id}$</h6>
    //             </div>
    //             `;
    //             basket = basket + cartoona;
    //         }


    //         document.querySelector(".test").innerHTML = basket;

    //     }
    // }

    // xhttp.open("GET", 'https://dummyjson.com/products', true);
    // xhttp.send();

// }

// getApi()
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================

fetch("https://dummyjson.com/products")
.then(function(result){
    return result . json()
})
.then(function(mohamed){
    var yassin = mohamed.products;
      var basket = "";
            for (var i = 0; i < yassin.length; i++) {

                var cartoona = ` <div class="md:col-4 text-center mb-12">
                <img src="${yassin[i].images[0]}" class="w-100  style="height:350px">
                <h4>${yassin[i].title}</h4>
                <h6>${yassin[i].description}</h6>
                <h6>${yassin[i].brand}</h6>
                <h6>${yassin[i].rating} of 5</h6>
                <h6>${yassin[i].price}$</h6>
                <h6>${yassin[i].id}$</h6>
                </div>
                `;
                basket = basket + cartoona;
            }


            document.querySelector(".test").innerHTML = basket;


})