import React from "react";

interface category {
    name : string,
    img : string
}

const CategoryItem = (props : category) => {



    return (
        <div className="text-center justify-start">
            <div className="justify-center">
                <img className="mx-auto h-12 w-12" src={props.img} alt="img"/>
                <p className={`mt-2 text-md ${props.name.length > 4 ? ("font-bold text-xs") : ("font-bold")}`}>{props.name}</p>
            </div>
        </div>
    );
};


export default CategoryItem;
