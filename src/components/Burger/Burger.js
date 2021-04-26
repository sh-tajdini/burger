import React from "react";
//inject props from any component
import { withRouter } from "react-router-dom";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  console.log(props);
  //change object which is comming from burger builder to array
  let transformedIngredients = Object.keys(props.ingredients) // salad ,bacon , cheese
    //dar inja igkey ke az bala miad hamoon salad o chizo o gheyre ast ke felan tedad nadarad

    .map((igKey) => {
      return [...Array(props.ingredients[igKey])] //[,]

        .map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    //simplyfy this array with reduc: arr is previous and el is current value and initial value []
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding </p>;
  }

  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default withRouter(burger);
