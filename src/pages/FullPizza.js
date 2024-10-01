import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
    const [pizza, setPizza] = React.useState('');
    const { id } = useParams();

    React.useEffect(() => {
        async function fetchPizzas() {
            try {
                const { data } = await axios.get('https://64e650ea09e64530d17fdd35.mockapi.io/items/' + id);
                setPizza(data);

            } catch (error) {
                alert('Ошибка при получении пицци')
            };
        }

        fetchPizzas();
    }, []);

    if (!pizza || pizza === '') {

        return <div className='container--one'>
            <img src='https://usagif.com/wp-content/uploads/loading-74.gif' />
        </div>

    };

    return (
        <div className='container--one'>
            <img className='imgPizzas' src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
            <h4>Рейтинг {pizza.rating}</h4>
        </div>
    )
}
export default FullPizza;