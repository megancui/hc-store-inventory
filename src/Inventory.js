import React from "react";
import SimpleMediaCard from "./SimpleMediaCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './Inventory.css';

class Inventory extends React.Component {
  state = {
    inventory: []
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick() {

    //create a new object that will eventually be pushed
    const tempObject = {};
    //tempObject.item = this.state.item
    tempObject.quantity = this.state.quantity;
    tempObject.price = this.state.price;
    tempObject.image = this.state.image;
    tempObject.name = this.state.name;

    //create temp array to not mutate state
    var tempArray = this.state.inventory;

    console.log(tempArray);

    //push temp object to temp array
    tempArray.push(tempObject);
    this.setState({
      inventory: tempArray,
      name: "",
      quantity: "",
      price: "",
      image: ""
    });

  };
  
  clearInventory() {
    this.setState({
      inventory: [],
      name: "",
      quantity: "",
      price: "",
      image: ""
    })
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearInventory = this.clearInventory.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <h2>Add item</h2>
        <div className="input-container">
          <TextField
            name="name"
            label="Item Name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <TextField
            name="image"
            label="Image"
            value={this.state.image}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <TextField
            name="quantity"
            label="Quantity"
            value={this.state.quantity}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <TextField
            name="price"
            label="Price"
            value={this.state.price}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <Button color="primary" onClick={() => this.handleClick()}>
            Add to inventory
          </Button>
          <Button color="primary" onClick={() => this.clearInventory()}>
            Clear Inventory
          </Button>
        </div>
        <div className="cards-container">
          {this.state.inventory.map((item, index) => (
            <SimpleMediaCard key={index} item={item} function={console.log(item)} />
          ))}
        </div>
      </div>
    );
  }
}

export default Inventory;
