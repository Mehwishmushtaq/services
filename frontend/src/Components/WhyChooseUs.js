import React from "react";
import { FaCheck } from "react-icons/fa"; // For checkmarks

const WhyChooseUs = () => {
  const reasons = [
    "Consistent workflows and experts in QA.",
    "Cloud based CRM Solutions.",
    "CRM extension and plug-in development.",
    "Protection of confidential details.",
    "Quick process of development.",
    "With-in the budget.",
    "Professional CRM development team.",
    "Continuous support and maintenance throughout the business proceeding on CRM.",
    "CRM data migration solutions.",
    "Providing Artificial intelligence enabled CRM systems.",
    "Accessibility for the teams to exchange information and expertise.",
    "We are using an Agile methodology.",
    "Clear and comprehensive projections.",
    "Weekly updates and customized reports.",
    "Communications on a daily basis: calls, emails, chats, professional meetings.",
    "User-friendly, Clean UI, Simple navigation, Interactive layout, UX Modified.",
  ];

  return (
    <div className="container my-5">
      <h2 className="font-weight-bold">Why choose us?</h2>
      <p>
        Want advanced CRM system software using modern parameters? Here are the
        reasons to start a conversation with us.
      </p>
      <ul className="list-unstyled">
        {reasons.map((reason, index) => (
          <li key={index} className="d-flex align-items-start mb-2">
            <FaCheck className="text-success mr-2" />
            {reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
