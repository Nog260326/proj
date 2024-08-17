import { useState } from "react";

export const WrapWithLoader = (ToWrap: any) => {
    const newWithLoaderComp = (props: any) => {
        const [loading, setLoading] = useState(true);
        setTimeout(() =>{
            setLoading(false);
        }, 2000);
        // console.log(props);
        return(
            <div>
                {loading ? <p>Loading....</p> : <ToWrap />}
            </div>
        );
    }
    return newWithLoaderComp;
}


