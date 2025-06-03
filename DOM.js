const title = document.getElementById('title');


document.body.style.backgroundColor = 'silver';

title.style.color = 'green'

const headings = document.querySelectorAll('h3');
 headings.forEach( element =>{
    element.style.textTransform = 'uppercase'
 })

 const fruitList = document.getElementById('fruList');
 const newFruit = document.createElement('li')
//  newFruit.textContent ='Orange'
//  newFruit.style.fontWeight = 'Bold'
//  newFruit.style.fontSize = '30px'
 newFruit.textContent = 'Orange'
 newFruit.style.fontWeight = 'Bold'
 newFruit.style.fontSize = '30px'
//  newFruit.style.marginBottom = '20px'
 newFruit.style.display = 'flex'
 newFruit.style.flexDirection = 'column'
 
//  newFruit.style.marginBottom = '20px'
 fruitList.appendChild(newFruit)
 
 const img1 = document.createElement('img');
 img1.src = 'orange.jpeg'
 img1.height = 200
 img1.width = 200
 img1.style.marginTop = '50px'
 img1.style.borderRadius = '20px'
 img1.style.boxShadow = '10px 10px 20px'
//  img1.style.border ='solid 2px'
 newFruit.append(img1)
 
 

 const vegList = document.getElementById('vegList');
 const newVeggie = document.createElement('li')
 newVeggie.textContent = 'Cabbage'
 newVeggie.style.fontWeight = 'Bold'
 newVeggie.style.fontSize = '30px'
 newVeggie.style.marginBottom = '10px'
 vegList.appendChild(newVeggie)

 const img = document.createElement('img')
 img.src = 'cabbage.webp'
 img.height = 200
 img.width = 200
 img.style.display = 'grid'
 img.style.marginTop = '60px'
 img.style.borderRadius = '20px'
 img.style.boxShadow = '10px 10px 20px'
 newVeggie.append(img)
 



 
 


