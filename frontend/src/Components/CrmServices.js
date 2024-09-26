import React from "react";

const CrmServices = () => {
  const services = [
    {
      title: "Transition control and risk management",
      description:
        "It also includes identifying an action plan for change and steps to ensure that adjustments are made safely and prevent unwanted effects the process of change could have.",
    },
    {
      title: "Migration of data from the existing spreadsheets or CRM",
      description:
        "Transfer your data with no data corruption, and influence your current business operations to a new CRM system.",
    },
    {
      title: "Application Integration",
      description:
        "The main benefit of CRM is the fact that it can be integrated with other software. CRM can be integrated with ERP that is currently in use, too.",
    },
    {
      title: "Cloud applications",
      description:
        "We offer customized cloud-based CRM platforms to support salesforce as well as HubSpot Integration services. We offer custom integration with a variety of cloud and non-cloud-based SaaS as well as ERP system software.",
    },
    {
      title: "Business Analytics",
      description:
        "CRM platforms assist with business analytics. It also provides an individualized, detailed account of the entire process and the latest trends in CRM after analyzing every single detail in depth.",
    },
    {
      title: "Tools to implement CRM",
      description:
        "We build CRM business development tools for streamlined accessibility, including customs regulations development, schedule management, work lists, affiliation management, alerts/notifications, and automated process models.",
    },
    {
      title: "CRM Integration Services",
      description:
        "We can integrate CRM applications with your Sales and Marketing management services, including inventory and inventory management services. We also offer supply chain management, Human Resource Management services Accounting & Finance management services, and projects management.",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="col-md-6">
              <h5 className="font-weight-bold">{service.title}</h5>
            </div>
            <div className="col-md-6">
              <p>{service.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CrmServices;
