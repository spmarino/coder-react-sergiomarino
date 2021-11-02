import {useState, React, createContext, useContext} from 'react'

  const CartContext = createContext([])

  export const UseCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
const [CartList, SetCartList] = useState([])


const AddItem = (Item) =>{
SetCartList([...CartList, Item])
}

const IconCart = () => {
return CartList.reduce( (acum, valor)=> acum + valor.Quantity, 0 )
}


const PriceTotal =() =>{
    return CartList.reduce((acum, valor)=> (acum + (valor.Quantity * valor.Item.price)), 0)
}

const DelItem = (id) => {
    const items = CartList.filter((item)=> item.Item.id !== id)
    SetCartList(items)
}


const EmptyCart = () =>{
    SetCartList([])
}

    return (
        <CartContext.Provider value= {{
            CartList,
            AddItem,
            EmptyCart,
            DelItem,
            IconCart,
            PriceTotal
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
