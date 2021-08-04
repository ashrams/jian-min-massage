import Head from "next/head";
import Svg from "@components/Svg";

export default function Thanks() {
  return (
    <html lang="en">
      <div className="absolute bg-white h-20 md:h-28 top-0 w-full">
        <div className="flex h-full gap-x-6 items-center justify-center">
          <svg height="32" width="32">
            <use xlinkHref="#icon-yin-yang" />
          </svg>
          <img alt="Jian Min logo" height="53" width="142" src="img/logo.png" />
        </div>
      </div>
    </html>
  );
}
