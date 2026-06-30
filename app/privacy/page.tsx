import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const privacyPolicies = [
  {
    title: "1. Introduction",
    content:
      "At IndieLaunch, we value your privacy and are committed to safeguarding any information shared with us when you use our website or related platforms.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We do not collect personal information, cookies, or any user data while you use our website. Our platform is designed to provide services without requiring any personal details.",
  },
  {
    title: "3. Data Usage and Retention",
    content:
      "As we do not collect any personal data, there is no data retention involved. Your use of our website is entirely anonymous.",
  },
  {
    title: "4. Data Sharing and Disclosure",
    content:
      "Since we do not collect any personal information, there is no data to share or disclose. Rest assured, your activity on our website remains private.",
  },
  {
    title: "5. Data Protection",
    content:
      "IndieLaunch is committed to maintaining a secure and privacy-respecting platform. While we do not collect data, we follow best practices to ensure the website's overall security.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "Our website may include links to external sites. Please note that we are not responsible for the privacy practices or content of these third-party websites.",
  },
  {
    title: "7. Your Control Over Your Data",
    content:
      "As no personal data is collected, you have complete privacy while using our services. There are no data requests or obligations imposed on you.",
  },
  {
    title: "8. Acceptance of Terms",
    content:
      "By using our website, you agree to the practices outlined in this policy. If you have questions about our privacy practices, please contact us.",
  },
  {
    title: "9. Use of Images Provided in the Project",
    content:
      "The images of people provided in this project are for illustrative purposes only. Using these images outside the context of this project or for any other purpose is strictly prohibited. Please refrain from such usage.",
  },
];

export default function Terms() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - IndieLaunch</title>
        <meta name="description" content="Privacy Policy for IndieLaunch" />
      </Head>
      <div className="font-brico font-normal">
        <div className="max-w-xl mx-auto">
          <div className="p-5 flex flex-col gap-5">
            <Link href="/"
              className="flex flex-row items-center rounded-xl gap-2 align-middle cursor-pointer p-2 text-sm w-fit hover:bg-primary-color/5 transition duration-300"
            >
              <ArrowLeft /> Home
            </Link>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <div className="text-sm font-normal flex flex-col gap-5">
              {privacyPolicies.map((policy, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h2 className="font-semibold text-lg">{policy.title}</h2>
                  <p
                    className="text-foreground-hsl/60"
                    dangerouslySetInnerHTML={{ __html: policy.content }}
                  ></p>
                </div>
              ))}
              <div>
                <p className="text-opacity-75">
                  This document was last updated on December 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
