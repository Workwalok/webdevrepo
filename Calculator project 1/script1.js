// src/TherapyPlans.js
import axios from "axios";
import React, { useEffect, useState } from "react";

const TherapyPlans = ({ patientId }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/therapy-plans/${patientId}`
        );
        setPlans(response.data);
      } catch (error) {
        console.error("Error fetching therapy plans:", error);
      }
    };

    fetchPlans();
  }, [patientId]);

  return (
    <div>
      <h2>Therapy Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan._id}>
            <h3>Goals:</h3>
            <ul>
              {plan.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
            <h3>Activities:</h3>
            <ul>
              {plan.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
            <h3>Progress Reports:</h3>
            <ul>
              {plan.progressReports.map((report, index) => (
                <li key={index}>
                  {new Date(report.date).toLocaleDateString()}: {report.report}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TherapyPlans;
