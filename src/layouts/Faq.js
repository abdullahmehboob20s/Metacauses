import Accordion from "components/Accordion";
import Description from "components/Description";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/layout/Faq.module.scss";

function Faq() {
  const isBellow1024px = useMediaQuery("(max-width : 1024px)");
  return (
    <div className={`bg-light-blue`}>
      <div className="container-wrapper-2 py-100px">
        <header className="mb-70px">
          <h3 className="fs-18px black text-center font-ubuntu weight-4 mb-10px">
            Any questions? We have answers!
          </h3>
          <h1 className="fs-48px black text-center weight-7 font-ubuntu">
            Metacauses FAQs
          </h1>
        </header>

        <main className={`${styles.faqs}`}>
          <Accordion title="What is Metacauses and what is its mission?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Who is Metacauses’ first Grantee, Global Response Management?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="After Metacauses’ initial grant, how will future Grantees be selected?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="How can I make donations?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Are there any transaction fees for this donation?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Will I receive a confirmation of my donation?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Can I change my mind and cancel after I have donated?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="How much of my donation will be provided to selected causes and supporting Grantees?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Is my donation tax-deductible in the United States?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="How will my donation be handled before transferring funds to Grantees?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="What's the Roadmap?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Who is the founder of Metacauses?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Who is the NFT artist for the Metacauses Ukraine Aid Initiative?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Who is the developer for the Metacauses Ukraine Aid Initiative?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="Who created the Metacauses logo?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
          <Accordion title="How can I contact Metacauses?">
            {" "}
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses' mission is to provide aid to the most extreme
              humanitarian causes of the day by raising capital – for specific
              causes – through cryptocurrency donations.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The causes that Metacauses tackles are selected by the community.
              Then, once the community has selected a charitable cause and funds
              are raised through donations, Metacauses provides grants directly
              to other charitable organizations who can provide the most benefit
              to the selected cause.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              The first charity that Metacauses will focus on is to provide
              humanitarian aid to the people of Ukraine. To assist with the
              Ukraine crisis, our first emergency grant will be issued to Global
              Response Management, which is already currently working on the
              ground in Ukraine and Poland. Global Response Management, provides
              lifesaving emergency medical care in areas of the world impacted
              by war, conflict, and disaster.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Future causes and grantees will be selected by the Metacauses
              community.
            </Description>
            <Description
              lineHeight="lh-1_6"
              fontSize={isBellow1024px ? "fs-14px" : "fs-18px"}
              className="font-open-sans mb-15px"
            >
              Metacauses is a US-based nonprofit, incorporated in the US state
              of Hawaii. Metacauses is recognized as a tax-exempt organization
              under section 501(c)(3) of the Internal Revenue Code (Tax ID:
              88-1352640). Contributions to organizations with 501(c)(3) status
              are tax-deductible in the United States. If you have any
              questions, please email support@metacauses.org.
            </Description>
          </Accordion>
        </main>
      </div>
    </div>
  );
}

export default Faq;
