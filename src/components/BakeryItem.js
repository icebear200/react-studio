// TODO: create a component that displays a single bakery item
export default function BakeryItem(props){

    
    return (
        <div>     
        <img class= "itemImage" src = {props.data.image} />
        <div className= "itemInfo"> 
        <div className="infoPadding"> 
        <div className="title "> {props.data.name} </div> 
        <div className="description"> {props.data.description} </div>
        <div className="price"> ${props.data.price} 
         <button onClick={ () => props.increment(props.data.name)}> Add To Cart</button> 
         </div> 
         </div>
        </div>
        </div>

    )


}

