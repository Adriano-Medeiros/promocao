import React from 'react';
import { useParams } from 'react-router-dom';


const PagesPromotionForm = () =>{
    const { id } = useParams();

    return(
        <div>
            FORM1
           {id && (<div>id: {id} </div>)}     

        </div>

    );
    

};

export default PagesPromotionForm;