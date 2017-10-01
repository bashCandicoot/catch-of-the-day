import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes'

class App extends React.Component {
    constructor() {
        super()
        //  initialize states
        this.state = {
            fishes: {},
            order: {}
        };
        // bind addFish function to App component
        this.addFish = this
        .addFish
        .bind(this);
        // bind loadSamples function to App component
        this.loadSamples = this
        .loadSamples
        .bind(this);
        // bind addToOrder function to App component
        this.addToOrder = this
            .addToOrder
            .bind(this);
    }

    addFish(fish) {
        // update our state
        const fishes = {
            ...this.state.fishes
        };
        // add new fish
        const timestamp = Date.now()
        fishes[`fish-${timestamp}`] = fish;
        // the fishes state has changed so we set it could also do { fishes } instad of
        // { fishes: fishes }
        this.setState({fishes: fishes});

    }

    loadSamples() {
        // sample fishes comes from the sample-fishes import
        this.setState({fishes: sampleFishes});
    }

    addToOrder(key) {
        // make a copy of order state
        const order = {...this.state.order};
        // create the new number of fish ordered, or update by one
        order[key] = order[key] + 1 || 1;
        // now update the the order state
        this.setState({ order: order});


        console.log(';eyheah')
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh afff"/>
                    <ul className="list-of-fishes">
                        {/* props can be called anything, there is no 'details' prop */}
                        {/* we want to pass the key down to the Fish component. key={key} is for react
                        to distinguish each fish in this.state.fishes, we must make our own prop
                        if we want to pass down the key down, and we make a prop called index */}
                        {Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}/>)
}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;
