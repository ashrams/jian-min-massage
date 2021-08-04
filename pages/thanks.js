import Link from "next/link";
import Head from "next/head";
import Svg from "@components/Svg";

export default function Thanks() {
  return (
    <html lang="en">
      <Svg />
      <div className="absolute bg-white h-20 md:h-28 top-0 w-full">
        <div className="flex h-full gap-x-6 items-center justify-center">
          <svg height="32" width="32">
            <use xlinkHref="#icon-yin-yang" />
          </svg>
          <img alt="Jian Min logo" height="53" width="142" src="img/logo.png" />
        </div>
      </div>
      <div className="bg-light-gray h-screen text-center">
        <p className="font-serif leading-relaxed mb-12 pt-52">
          Thank you for your request, we will be in touch shortly.
        </p>
        <Link href="/">
          <a className="flex items-center w-full justify-center">
            <svg className="mr-2 transform -rotate-90" height="12" width="12">
              <use xlinkHref="#icon-chevron-up" />
            </svg>
            <span className="border-b border-light-pink tracking-wide font-sans uppercase">
              Back
            </span>
          </a>
        </Link>
      </div>
    </html>
  );
}
