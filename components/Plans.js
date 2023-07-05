import styles from "../styles/Plans.module.css";
import Image from "next/image";
const Plans = () => {
  const avilablePlans = [
    {
      name: "POJEDYNCZE SPOTKANIE",
      price: 150,
      benefits: [
        "Pełna elastyczność",
        "Umawiane ad-hock",
        "Płatne po każdej lekcji",
      ],
      key: 1,
    },
    {
      name: "PLAN MIESIĘCZNY",
      price: 120,
      benefits: [
        "4 zaplanowane spotkania",
        "Płatne z góry za miesiąc",
        "Przygotowany plan nauki",
      ],
      key: 2,
    },
    {
      name: "PLAN KWARTALNY",
      price: 100,
      benefits: [
        "12 zaplanowanych spotkań",
        "Płatne z góry za kwartał lub co miesiąc",
        "Przygotowany plan nauki",
      ],
      key: 3,
    },
  ];
  return (
    <div className={styles.plans}>
      {avilablePlans.map((plan) => (
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
      ))}
    </div>
  );
};
export default Plans;
