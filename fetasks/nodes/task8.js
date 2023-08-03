const product = {
    name: 'Smartphone',
    details: {
      brand: 'XYZ',
      color: 'Black'
      // price property is missing
    }
  };
  
  const price = product.details?.price ?? 'Price not available';
  
  console.log(price);
  