import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>The Best Junk Food Delivered in less than 15 minutes! </h2>
      <p>
        Choose your favorite meal(s) from our selection.
      </p>
      <p>
        All our meals are 100%-guarantee cooked with high-rate fat ingredients and all kinds of vegetables, fruits or healthy components are banned from the recette. 
      </p>
      <p>
        Don't event leave your couch, your delivery is already on his way.
      </p>
    </section>
  );
};

export default MealsSummary;
