import React, { Component } from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {
    state = {
        value: ''
    }

    handleSubmit = (e) => {
        this.props.onAdded(this.state.value)
        e.preventDefault();
        this.setState({
            value: ''
        });
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
            <form className="item-add-form d-flex" onSubmit={this.handleSubmit}>
                <input
                className="form-control"
                value={this.state.value}
                type="text"
                onChange={this.handleChange}
                placeholder="What needs to be done"
                ></input>
                <button 
                className="btn btn-outline-secondary"
                >Add</button>
            </form>
        )
    }
}

export default ItemAddForm;

