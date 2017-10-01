import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
    render() {
        // data massaging, mmmm...
        const details = this.props.details
        return (
            <li className="menu-fish">
                {/* loop through the fishes we sent in the details prop */}
                <img src={details.image} alt={details.name}/>
                <h3 className="fish-name">
                    {details.name}
                </h3>
                <span className="price">{formatPrice(details.price)}</span>
                <p>{details.desc}</p>
                <button>Add to order</button>
            </li>
        )
    }
}

export default Fish;