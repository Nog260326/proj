import React, { Component, FC, useState } from 'react';
import {Button_Componenet} from '../ButtonComponent/Button_Componenet';


const ButtonWrapper = (props: any) => { 
    const [loading, setLoading] = useState(true);
    setTimeout(() =>{
        setLoading(false);
    }, 2000);

    console.log(props);

    return(
        <div>
            {loading ? <p>Loading....</p> : <Button_Componenet value={8}/>}
        </div>
    );
}

export default ButtonWrapper;