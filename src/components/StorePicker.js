import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    goToStore(event) {
        event.preventDefault();
        console.log(this.storeInput.value)
        // console.log(this.goToStore());
        // first grab texzt from box
        /// then transition the url to store/:storeId
    }
    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="store name"
                defaultValue={getFunName()} 
                ref={ (input) => {this.storeInput = input } } />

                <button type="submit">visitin store</button>
            </form>
        )
    }
}

export default StorePicker
