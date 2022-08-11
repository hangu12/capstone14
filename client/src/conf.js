const prod = () => (
  process.env.NODE_ENV == 'production'
)

// export const API_BASE = prod() ? 'https://usedproduct.herokuapp.com/api' : 'http://localhost:5000/api';  
// export const IMAGE_HOST = prod() ? 'https://usedproduct.herokuapp.com' : 'http://localhost:5000';  

export const API_BASE = prod() ? 'https://evening-spire-23810.herokuapp.com/api' : 'http://localhost:5000/api';  
// export const IMAGE_HOST = prod() ? 'https://evening-spire-23810.herokuapp.com' : 'http://localhost:5000';  

// export const API_BASE = 'https://usedproduct.herokuapp.com/api';
// export const IMAGE_HOST = 'https://usedproduct.herokuapp.com';

// export const API_BASE = 'https://evening-spire-23810.herokuapp.com/api';
// export const IMAGE_HOST = 'https://evening-spire-23810.herokuapp.com';


export const CATEGORY_MAP = {
  "1": "Baby Items",
  "2": "Books",
  "3": "Clothing",
  "4": "Electronics",
  "5": "Home",
  "6": "Vehicles"
};

export const CATEGORIES = Object.entries(CATEGORY_MAP).map(([key, value]) => {
  return {
    value: key, label: value
  }
})

