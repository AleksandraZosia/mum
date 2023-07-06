import styles from "../styles/Plans.module.css";

import Plan from "../components/Plan";
const Plans = ({ plans }) => {
  return (
    <div className={styles.plans}>
      {plans.map((plan) => (
        <Plan plan={plan} key={plan.key} />
      ))}
    </div>
  );
};
export default Plans;
