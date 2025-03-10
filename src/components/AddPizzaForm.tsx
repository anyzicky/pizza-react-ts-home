import React, { FC, FormEvent, useState } from "react";
import './styles.css'
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const initState = {
    title: '',
    price: '',
    img: ''
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {

    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
        const { title, price, img } = newPizza
        if(title && price && img) {
            addPizza({
                id: Date.now(),
                title,
                price: Number(price),
                img
            })
            setNewPizza(initState)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="Price"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="Image"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit"> + Add to menu</button>
        </form>
    )
}

export default AddPizzaForm