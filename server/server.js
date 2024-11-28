const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Promo Fernet 750 ml Coca Cola 2,25 ml', 
      oldPrice: 20000, 
      price: 18000, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_795949-MLA46620925823_072021-O.webp'
    },
    {
      id: 2, 
      name: 'Dulce de Leche Vacalin 1 K',  
      oldPrice: 5300, 
      price: 4800, 
      urlImg: 'https://bondialmundo.com/wp-content/uploads/2023/09/Dulce-de-leche-6.png' 
    },
    { 
      id: 3, 
      name: 'Cerealitas tostadas de arroz 160 G',  
      oldPrice: 2800, 
      price: 2400, 
      urlImg: 'https://statics.dinoonline.com.ar/imagenes/large_460x460/2140656_1_l.jpg' 
    },
    { 
      id: 3, 
      name: 'Ala liquido para diluir rinde 3 litros',  
      oldPrice: 5900, 
      price: 5500, 
      urlImg: 'https://stage.gpsm2.iurco.com/media/catalog/product/cache/0a44d03194bff726087c68ca93501384/7/7/7791290791008_1_.jpg' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
