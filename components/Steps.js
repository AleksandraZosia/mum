import styles from "../styles/Steps.module.css";
import Image from "next/image";

const Steps = () => {
  const steps = [
    {
      key: 1,
      title: "Krok 1 - konsultacja",
      description:
        "Pierwszym krokiem naszego spotkania będzie nawiązanie relacji i budowanie zaufania. W trakcie spotkania przeprowadzimy test Gallupa, który pozwoli nam odkryć indywidualne talenty i mocne strony dziecka. Ten test pomoże mi lepiej poznać dziecko i zrozumieć jak najlepiej rozwijać jego potencjał.",
    },
    {
      key: 2,
      title: "Krok 2 - dobranie metody nauki",
      description:
        " Kolejnym etapem terapii jest dobranie optymalnej metody nauki, uwzględniając wyniki testu Gallupa oraz naturalne zainteresowania i schematy zachowań. Wykorzystając wyniki testu, identyfikujemy indywidualne talenty i mocne strony dziecka. Następnie dostosowuję proces nauki, wykorzystując te zainteresowania, na przykład przez wprowadzenie elementów muzycznych.",
    },
    {
      key: 3,
      title: "Krok 3 - wspólna praca",
      description:
        "Trzecim krokiem w długotrwałym procesie pracy terapeutycznej z dzieckiem w spektrum autyzmu/aspergera jest wspieranie dziecka w nauce poza szkołą, umożliwiając mu indywidualne uczenie się przy wykorzystaniu swoich talentów i dopasowanych do niego metod.",
    },
  ];

  return (
    <div className={styles.steps}>
      {steps.map((step) => {
        return (
          <div key={step.key}>
            <Image
              src={`/step${step.key}.svg`}
              width={180}
              height={180}
              alt="grafika ozdobna"
            />
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
