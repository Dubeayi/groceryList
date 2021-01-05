import React from "react";
import axios from "axios";
import ListDisplay from "./ListDisplay.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['eggs, bacon'],
            newItem: '',
            newQuantity: '',
        }
        this.getList = this.getList.bind(this);
        this.newItem = this.newItem.bind(this);
        this.newQuantity = this.newQuantity.bind(this);
        this.addItem = this.addItem.bind(this);
        this.increaseItemByOne = this.increaseItemByOne.bind(this);
        this.decreaseItemByOne = this.decreaseItemByOne.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentDidMount() {
        this.getList();
     }
    deleteItem() {

    }
    increaseItemByOne( id, quantity) {
        var increase = quantity + 1
        axios.put(`list/${id}`, {
            id: id,
            quantity: increase
        })
        .then(
            this.state.list[id-1].quantity + 1
        )
        .then(this.componentDidMount())
        .catch(err=> {
            console.log(err)
        })
    }
    decreaseItemByOne(id, quantity) {
        axios.put(`list/${id}`, {
            id: id,
            quantity: quantity - 1 
        })
        .then(
            this.state.list[id-1].quantity - 1
        )
        .then(this.componentDidMount())
        .catch(err=> {
            console.log(err)
        })
    }

    addItem(e) {
        e.preventDefault();
        let item = this.state.newItem;
        let quantity = this.state.newQuantity;

        if (this.state.newItem.length > 0 && this.state.newQuantity.length > 0) {
            axios.post('/list', {
                item: item,
                quantity: quantity
            })
            .then(req => {
                this.state.list.push({item, quantity})
            }
            )
            .then(
                this.componentDidMount()
            )
            .then(
                this.setState({
                    item: "",
                    quantity: ""
                })
            )
            .catch(err => {
                console.log(err);
            })
        } else {
            alert('please fill in both fields!');
        }
    }

    newItem(e) {
        this.setState({
            newItem: e.target.value
        })
        console.log(this.state.newItem)

    }
    newQuantity(e) {
        this.setState({
            newQuantity: e.target.value
        })
        console.log(this.state.newQuantity)
    }

    getList() {
        axios.get('/list')
        .then(res => {
            this.setState({
                list: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    

    render(){
        return (
         <div>
            <header>
                <h2>Welcome to your Grocery List!</h2>
            </header>
              <div>
                <h3> Add new Items to the Shopping List </h3>
                  <form onSubmit = {this.addItem}>
                      <label>item<span>   </span></label>
                      <input type="text" placeholder="what else do we need?" onChange = {this.newItem}>
                      </input>
                  </form>
                  <form>
                      <label>quantity<span>   </span></label>
                      <input type="text" placeholder="how many do we want?" onChange = {this.newQuantity}>
                      </input>
                  </form>
                  <button type = "reset" onClick = {this.addItem}>Add item</button>
                  <br></br>
              </div>
              <h3>Here is what we have so far:</h3>
                  <ListDisplay 
                    items ={this.state.list}
                    increase ={this.increaseItemByOne}
                    decrease ={this.decreaseItemByOne}
                    delete = {this.deleteItem}
                  />
        </div>
        )
    }
}

export default App

