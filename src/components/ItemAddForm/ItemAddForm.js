import React, { Component } from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({ 
            value: e.target.value
        });
    };

    render() {
        const { value } = this.state;
        const { onAdded } = this.props;
        return (
            <div className="item-add-form">
                <input
                onChange={this.handleChange}
                value={value}
                ></input>
                <button 
                onClick={() => onAdded(value)}
                className="btn btn-outline-secondary"
                >Add Item</button>
            </div>
        )
    }
}

export default ItemAddForm;

