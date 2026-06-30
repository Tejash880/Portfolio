import { ArrowLeft } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
const questions = [
  {
    title: "1. Introduction",
    content:
      "These terms and conditions outline the rules for using IndieLaunch services and software, tailored to create landing pages for SAAS/MVP/Startups.",
  },
  {
    title: "2. Agreement to Terms and Conditions",
    content:
      "By purchasing and using IndieLaunch, you agree to these terms and conditions.",
  },
  {
    title: "3. Responsibilities",
    content:
      "IndieLaunch is not responsible for what the user does with the user-generated content.",
  },
  {
    title: "4. Guarantee",
    content:
      "IndieLaunch does not give any warranty, guarantee or other term as to the quality, fitness for purpose or otherwise of the software.",
  },
  {
    title: "5. Refunds",
    content:
      "Due to the digital nature of IndieLaunch, once access to the platform is granted, no refunds or exchanges will be issued.",
  },
  {
    title: "6. Change to Terms",
    content:
      "IndieLaunch may modify these terms and conditions from time to time. You will be notified of any significant changes. However, you are responsible for reviewing these terms periodically for updates.",
  },
];

export default function Terms() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - IndieLaunch</title>
        <meta name="description" content="Terms and Services for IndieLaunch" />
      </Head>
      <div className="font-brico font-normal">
        <div className="max-w-xl mx-auto ">
          <div className="p-5 flex flex-col gap-5">
            <Link
              href="/"
              className="flex flex-row items-center rounded-xl gap-2 align-middle cursor-pointer p-2 text-sm w-fit hover:bg-primary-color/5 transition duration-300"
            >
              <ArrowLeft /> Home
            </Link>
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            <div className="text-sm font-normal flex flex-col gap-5">
              {questions.map((question, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h2 className="font-semibold text-lg">{question.title}</h2>
                  <p
                    className="text-foreground-hsl/60"
                    dangerouslySetInnerHTML={{ __html: question.content }}
                  ></p>
                </div>
              ))}
              <div>
                <p className="text-opacity-60">
                  This document was last updated on the December 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
