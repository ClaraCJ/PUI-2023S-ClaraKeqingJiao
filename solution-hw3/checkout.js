var glazingOptions = document.getElementById("glazingOptions");
var packOptions = document.getElementById("packOptions");
// glazing
var obj = {
    0: 'Keep Original',
    1: 'Sugar milk',
    2: 'Vanilla milk',
    3: 'Double chocolate'
}

// pack size
var obj1 = {
    0: 1,
    1: 3,
    2: 6,
    3: 12
}

// price
var obj3 = {
    0: 0,
    1: 0,
    2: 0.5,
    3: 1.5
}
for (var i = 0; i <= 3; i++) {
    var option = document.createElement('option');
    glazingOptions.appendChild(option);
    option.innerText = obj[i]
}
for (var i = 0; i <= 3; i++) {
    var option = document.createElement('option');
    packOptions.appendChild(option);
    option.innerText = obj1[i]
}


function updatePrice() {
    // obtain selected items' index
    var index = glazingOptions.selectedIndex;
    var glazingPrice = obj3[index];
    var index1 = packOptions.selectedIndex;
    var packSize = obj1[index1];
    if (packSize == 6) {
        packSize = 5;
    }
    if (packSize == 12) {
        packSize = 10;
    }
    var sum = (2.49 + glazingPrice) * packSize;
    // console.log(sum.toFixed(2));
    var total = document.getElementById("checkoutPrice");
    total.innerText = "$" + sum.toFixed(2);
}

// initialize price
updatePrice();
