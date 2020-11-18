import React, { Component } from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {
    render() {
        const { onAdded } = this.props;
        return (
            <div className="item-add-form">
                <button 
                onClick={() => onAdded('Hello')}
                className="btn btn-outline-secondary"
                >Add Item</button>
            </div>
        )
    }
}

export default ItemAddForm;

