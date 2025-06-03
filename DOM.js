const title = document.getElementById('title');


document.body.style.backgroundColor = 'silver';

title.style.color = 'green'

const headings = document.querySelectorAll('h3');
 headings.forEach( element =>{
    element.style.textTransform = 'uppercase'
 })

 const fruitList = document.getElementById('fruList');
 const newFruit = document.createElement('li')
 newFruit.textContent ='Orange'
 fruitList.appendChild(newFruit)
 
 const img1 = document.createElement('img');
 img1.src = 'orange.jpeg'
 img1.height = 200
 img1.width = 250
 img1.style.border ='solid 2px'
 newFruit.appendChild(img1)
 

 const vegList = document.getElementById('vegList');
 const newVeggie = document.createElement('li')
 newVeggie.textContent = 'Cabbage'
 vegList.appendChild(newVeggie)

 const img = document.createElement('img')
 img.src = 'cabbage.webp'
 img.height = 200
 img.width = 200
 img.style.display = 'grid'
 newVeggie.append(img)
 



 
 


