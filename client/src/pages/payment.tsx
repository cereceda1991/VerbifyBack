import React, { useState } from "react";
import PurchaseSummary from "@/components/PurchaseSummary";
import PaymentInfo from "@/components/PaymentInfo";
import styles from "@/styles/Payment.module.css";
import PaymentConfirmed from "@/components/PaymentConfirmed";

const plansArray = [
  {
    id: 0,
    name: "Plan mensual",
    price: 40,
    features: [
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
    ],
  },
  {
    id: 1,
    name: "Plan anual",
    price: 300,
    features: [
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
    ],
  },
  {
    id: 2,
    name: "Plan semestral",
    price: 200,
    features: [
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
      "Featured Feature 01",
    ],
  },
];

function Payment() {
  const [plan, setPlan] = useState(plansArray[0]);
  const [confirmed, setConfirmed] = useState(false);

  const handleClickPrevious = () => {
    const prevPlanId = (plan.id - 1 + plansArray.length) % plansArray.length;
    setPlan(plansArray[prevPlanId]);
  };

  const handleClickNext = () => {
    const nextPlanId = (plan.id + 1) % plansArray.length;
    setPlan(plansArray[nextPlanId]);
  };

  const handleClickConfirm = () => {
    setConfirmed(true);
  };

  return (
    <div>
      {!confirmed ? (
        <div className={styles.all}>
          <div>
            <PaymentInfo
              plan={plan.name}
              price={plan.price}
              id={plan.id}
              handleClickConfirm={handleClickConfirm}
            />
          </div>
          <div className={styles.right}>
            <PurchaseSummary
              plan={plan.name}
              price={plan.price}
              features={plan.features}
              handleClickPrevious={handleClickPrevious}
              handleClickNext={handleClickNext}
            />
          </div>
        </div>
      ) : (
        <PaymentConfirmed />
      )}
    </div>
  );
}

export default Payment;
