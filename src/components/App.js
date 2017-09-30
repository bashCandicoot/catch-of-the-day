import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'

class App extends React.Component {
    constructor() {
        super()
        //  initialize state
        this.state = {
            fishes: {},
            order: {}
        };
        // bind addFish function to App component
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
    }
    
    addFish(fish) {
        // update our state
        const fishes = {...this.state.fishes};
        // add new fish
        const timestamp = Date.now()
        fishes[`fish-${timestamp}`] = fish;
        // the fishes state has changed so we set it
        // could also do { fishes } instad of { fishes: fishes }
        this.setState({fishes: fishes});

    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh afff"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;
