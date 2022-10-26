function configureListeners() {
    let images = document.getElementbyTagName('img');  


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
           
            break;            
        case 'pn3':
           
            break;   
        case 'pn4':
           
            break;   
        case 'pn5':
            
            break;   
        case 'pn6':
           
            break;   
        case 'pn7':
            
            break;   
        case 'pn8':
            
            break;   
        case 'pn9':
            
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = // select element with corresponding id
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}
