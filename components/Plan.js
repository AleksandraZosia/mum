import styles from "../styles/Plan.module.css";
import Image from "next/image";
const Plan = ({ plan }) => {
  return (
    <div key={plan.key} className={styles.plan}>
      <h4>{plan.name}</h4>
      <h2>{plan.price} zł za 90 minut</h2>
      <div className={styles.benefits}>
        {plan.benefits.map((benefit, i) => (
          <span key={i}>
            <Image
              src="/icon-arrow.svg"
              alt="dekoracyjna strzałka"
              width={27.2}
              height={17}
            />
            {benefit}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Plan;
