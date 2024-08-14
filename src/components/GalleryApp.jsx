import React from 'react'
import {useState} from 'react'

const GalleryApp = (props) => {
    const [indice,setIndice] = useState(0)
    const [show,setShow] = useState(false)
    const {esculturas} = props;
    const handleNext = () =>{
      if(indice<esculturas.length -1){
        setIndice(indice+1);
    }
  };
  const handlePrev = () =>{
    if(indice>0){
      setIndice(indice-1);
  }
};


  return (
    
    <article>
     <button onClick={handlePrev}> Anterior</button>
     <button onClick={handleNext}> Siguiente</button>
    
    <section>
        <h3>{esculturas[0].name}</h3>
        <small>{esculturas[0].artist}</small>
    </section>
    <section>
    <img src={esculturas[0].url} alt={esculturas[0].alt} />

    </section>
    <section>
        <button onClick={()=>setShow(!show)}>Descripción</button>
        { show && <p> {esculturas[0].description} </p>}
        
    </section>

    </article>



  );
};

export default GalleryApp