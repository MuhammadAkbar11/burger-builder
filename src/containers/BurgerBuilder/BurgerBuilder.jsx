import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 1,
        meat: 2,
        tomato: 1,
        cheese: 1,
      },
    };
  }

  render() {
    const { ingredients } = this.state;

    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
