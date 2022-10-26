function configureListeners() {
    var images = document.getElementbyTagName('img');  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
        }
    } 

function addOpacity(event) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}
// notes for myself to remember: classList is a DOM property that allows for styling
// css classes of an element.
function removeOpacity(event) {
     if (this.classList.contains('dim')) {
        this.classList.remove('dim')
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
           price = '$14.99'
           colorName = 'Lime Green'
           updatePrice(colorName, price)
            break;           
        case 'pn2':
           price = '$11.14'
           colorName= 'Medium Brown'
           updatePrice(colorName, price)
            break;            
        case 'pn3':
           price = '$22.99'
           colorName = 'Royal Blue'
           updatePrice(colorName, price)
            break;   
        case 'pn4':
           price = '$4.99'
           colorName = 'Solid Black'
           updatePrice(colorName, price)
            break;   
        case 'pn5':
            price = '$8.22'
            colorName = 'Solid Cyan'
            updatePrice(colorName, price)
            break;   
        case 'pn6':
           price = '$11.99'
           colorName = 'Solid Purple'
           updatePrice(colorName, price)
            break;   
        case 'pn7':
            price = '$13.42'
            colorName = 'Solid Red'
            updatePrice(colorName, price)
            break;   
        case 'pn8':
            price = '$21.98'
            colorName = "Solid White"
            updatePrice(colorName,price)
            break;   
        case 'pn9':
            price = '$14.99'
            colorName = 'Solid Yellow'
            updatePrice(colorName,price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
}

// I checked and double checked so that my JS looked the same as in the solution
// because I kept getting bugs, but even after changing everything I still can't
// get it to work. There is some kind of error with the configureListeners even
// though nothing is showing up wrong in VS Code. 