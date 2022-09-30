import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //if( categories.includes(newCategory) ) return;
    if( categories.find(category => category.toLowerCase() == newCategory.toLowerCase() ) ) return;

    setCategories( cat => [ newCategory, ...categories ] );
    //console.log(newCategory);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          onNewCategory={ onAddCategory  }
        />
        
        { categories.map( category =>(
              <GiftGrid 
                key={category} 
                category={ category } 
              />                    
            )
            
          ) }
    </>
  )
}
