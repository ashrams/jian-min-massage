import Head from "next/head";
import Svg from "@components/Svg";

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <title>Jian Min Massage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Located in the heart of Chinatown in Boston, MA. Jian Min Massage offers Chinese full deep tissue massage, foot massage and cupping therapy to treat injuries, muscle soreness or to promote health and wellness."
        />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta
          property="og:url"
          content="https://www.jianminmassage.com"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://www.jian-min-massage.netlify.app/social.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Jian Min Massage"
          key="ogsitename"
        />
        <meta property="og:title" content="Jian Min Massage" key="ogtitle" />
        <meta
          property="og:description"
          content="Chinese massage therapy in Boston, MA."
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Svg />
      <main className="overflow-hidden">
        <header
          className="items-center md:h-screen relative text-center"
          id="top-of-page"
        >
          <div className="absolute bg-white h-20 md:h-28 top-0 w-full">
            <div className="flex h-full gap-x-6 items-center justify-center">
              <svg height="32" width="32">
                <use xlinkHref="#icon-yin-yang" />
              </svg>
              <img height="53" width="142" src="img/logo.png" />
            </div>
          </div>
          <div className="flex flex-col h-full justify-center max-w-5xl mx-auto px-6">
            <h1 className="font-light font-sans lg:text-7xl md:mt-0 mt-32 tracking-wide text-5xl uppercase">
              Jian Min Massage
            </h1>
            <p className="font-serif leading-relaxed max-w-lg mb-12 mt-6 mx-auto">
              We offer Chinese full deep tissue massage, foot massage and
              cupping therapy to treat injuries, muscle soreness or to promote
              health and wellness.
            </p>
            <button className="bg-light-pink font-light h-14 hover:bg-extra-light-pink focus:bg-extra-light-pink focus:outline-none font-sans mx-auto shadow-lg tracking-wide uppercase w-44">
              Contact Us
            </button>
          </div>
          <div className="bg-gray-700 bg-opacity-20 bottom-0 md:absolute md:h-36 md:mt-0 md:py-0 mt-12 py-6 w-full">
            <div className="h-full items-center justify-between max-w-5xl md:flex mx-auto px-6">
              <div className="flex flex-col items-center md:my-0 my-8">
                <div className="relative border-b border-gray-800 pb-1 mb-1 font-light font-sans inline-block text-lg tracking-wide uppercase">
                  <div className="absolute -ml-9 mt-1">
                    <svg height="20" width="20">
                      <use xlinkHref="#icon-clock" />
                    </svg>
                  </div>
                  Opening Hours
                </div>
                <div className="font-serif text-sm lg:text-base">
                  Monday to Friday 9:30 am - 9:00 pm
                </div>
              </div>
              <div className="flex flex-col items-center md:my-0 my-8">
                <div className="relative border-b border-gray-800 pb-1 mb-1 font-light font-sans inline-block text-lg tracking-wide uppercase">
                  <div className="absolute -ml-9 mt-1">
                    <svg height="20" width="20">
                      <use xlinkHref="#icon-phone" />
                    </svg>
                  </div>
                  Get in Touch
                </div>
                <div className="font-serif text-sm lg:text-base">
                  (617) 208-9288
                </div>
              </div>
              <div className="flex flex-col items-center md:my-0 my-8">
                <div className="relative border-b border-gray-800 pb-1 mb-1 font-light font-sans inline-block text-lg tracking-wide uppercase">
                  <div className="absolute -ml-9 mt-1">
                    <svg height="20" width="20">
                      <use xlinkHref="#icon-address" />
                    </svg>
                  </div>
                  Address
                </div>
                <div className="font-serif text-sm lg:text-base">
                  12A Tyler Street, Boston, MA 02111
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-16 md:my-24 max-w-5xl mx-auto px-6 text-center">
          <h2 className="border-b border-light-pink font-light font-sans inline-block text-2xl tracking-wide uppercase">
            Our Treatments
          </h2>
          <p className="font-serif italic leading-relaxed max-w-md mb-12 md:mb-20 mx-auto mt-8 text-sm">
            See below for details on some of our most popular services. Please
            note, we only take{" "}
            <span className="font-semibold">payment in cash</span>.
          </p>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-3">
            <li className="md:border-b md:border-r md:border-gray-100 flex flex-col h-80 items-center">
              <svg height="36" width="36">
                <use xlinkHref="#icon-massage" />
              </svg>
              <h3 className="font-light font-sans mt-3 text-xl uppercase">
                Deep Tissue Massage
              </h3>
              <span className="border-b border-light-pink my-3 w-16"></span>
              <p className="font-serif mb-3 px-8 text-sm">
                For chronic pain, muscle pain, and injuries. Choice of strength
                available (light, medium, strong).
              </p>
              <span className="font-light font-sans my-3 text-sm">
                $50 for 30 minutes
              </span>
              <span className="font-light font-sans text-sm">
                $70 for 60 minutes
              </span>
            </li>
            <li className="md:border-b lg:border-r md:border-gray-100 flex flex-col h-80 items-center">
              <svg height="36" width="36">
                <use xlinkHref="#icon-lotus" />
              </svg>
              <h3 className="font-light font-sans mt-3 text-xl uppercase">
                Relaxing Massage
              </h3>
              <span className="border-b border-light-pink my-3 w-16"></span>
              <p className="font-serif mb-3 px-8 text-sm">
                Relax and rejuvinate. Releases tension and improves circulation
                and movement range.
              </p>
              <span className="font-light font-sans my-3 text-sm">
                $40 for 30 minutes
              </span>
              <span className="font-light font-sans text-sm">
                $60 for 60 minutes
              </span>
            </li>
            <li className="md:border-b md:border-r lg:border-r-0 md:border-gray-100 flex flex-col h-80 items-center md:pt-10 lg:pt-0">
              <svg height="36" width="36">
                <use xlinkHref="#icon-hot-stone" />
              </svg>
              <h3 className="font-light font-sans mt-3 text-xl uppercase">
                Hot Stone Massage
              </h3>
              <span className="border-b border-light-pink my-3 w-16"></span>
              <p className="font-serif mb-3 px-8 text-sm">
                Warm your body and relieve muscle tension, pain, stress and
                anxiety.
              </p>
              <span className="font-light font-sans my-3 text-sm">
                $50 for 30 minutes
              </span>
              <span className="font-light font-sans text-sm">
                $80 for 60 minutes
              </span>
            </li>
            <li className="md:border-b lg:border-b-0 lg:border-r md:border-gray-100 flex flex-col h-80 items-center md:pt-10">
              <svg height="36" width="36">
                <use xlinkHref="#icon-foot-massage" />
              </svg>
              <h3 className="font-light font-sans mt-3 text-xl uppercase">
                Foot Massage
              </h3>
              <span className="border-b border-light-pink my-3 w-16"></span>
              <p className="font-serif mb-3 px-8 text-sm">
                Improves circulation, stimulates muscles, reduces tension and
                eases pain.
              </p>
              <span className="font-light font-sans my-3 text-sm">
                $40 for 30 minutes
              </span>
              <span className="font-light font-sans text-sm">
                $60 for 60 minutes
              </span>
            </li>
            <li className="md:border-r md:border-gray-100 flex flex-col h-80 items-center md:pt-10">
              <svg height="36" width="36">
                <use xlinkHref="#icon-cupping" />
              </svg>
              <h3 className="font-light font-sans mt-3 text-xl uppercase">
                Chinese Cupping
              </h3>
              <span className="border-b border-light-pink my-3 w-16"></span>
              <p className="font-serif mb-3 px-8 text-sm">
                Traditional treatment to remove toxins and improve blood flow,
                metabolism, and respiratory conditions.
              </p>
              <span className="font-light font-sans my-3 text-sm">$30</span>
            </li>
            <li className="flex flex-col h-80 items-center md:pt-10">
              <svg height="36" width="36">
                <use xlinkHref="#icon-mortar" />
              </svg>
              <h3 className="font-light font-sans mt-3 text-xl uppercase">
                Lymphatic Detox
              </h3>
              <span className="border-b border-light-pink my-3 w-16"></span>
              <p className="font-serif mb-3 px-8 text-sm">
                Stimulates circulation, reduces swelling and water retention,
                improves the immune system, energizes, promotes body and mental
                relaxation.
              </p>
              <span className="font-light font-sans my-3 text-sm">
                $100 for 60 minutes
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-light-green md:flex">
          <div className="md:w-1/2 lg:w-2/5 w-full">
            <img
              alt="Person getting massaged"
              height="1152"
              width="884"
              src="img/massage.jpg"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:w-3/5">
            <h2 className="border-b border-white font-light font-sans inline-block mb-6 md:pt-0 pt-16 text-2xl tracking-wide uppercase">
              About Us
            </h2>
            <p className="font-serif leading-relaxed lg:leading-loose max-w-xl md:pb-0 mx-10 pb-16 text-sm lg:text-base text-center">
              Our experienced masseuses offer a variety of massages to promote
              health and wellness. We offer baby oil, coconut oil and Chinese
              herbal medicine oil for massage, but customers are welcome to
              bring in their own choice of essence or massage oil. Please call
              ahead for appointments. Walk ins are welcome, but appointments are
              highly recommended. Cash only.
            </p>
          </div>
        </div>
        <div className="bg-light-gray py-16 md:py-24 text-center">
          <h2 className="border-b border-light-pink font-light font-sans inline-block text-2xl tracking-wide uppercase">
            Location
          </h2>
          <div className="md:flex items-center bg-white max-w-5xl md:mt-12 mt-8 mx-auto text-left">
            <div className="md:order-1 md:w-3/5 lg:w-3/5">
              <img alt="Map of location" src="img/map.jpg" />
            </div>
            <div className="leading-relaxed md:py-0 md:w-2/5 lg:w-2/5 px-10 py-10">
              <p className="font-bold">We're located at</p>
              <p>
                12A Tyler Street
                <br /> Boston, MA 02111
              </p>
              <p className="font-serif italic pt-6 text-sm">
                Our location in the heart of Chinatown is convenient to transit,
                shops, and restaurants.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-3 py-20 relative">
          <a
            className="absolute bg-light-pink border-2 border-light-pink hover:bg-white hover:text-light-pink focus:bg-white focus:text-light-pink focus:outline-none flex text-white justify-center items-center footer-arrow h-10 -top-5 w-10"
            href="#top-of-page"
          >
            <svg className="fill-current" height="20" width="20">
              <use xlinkHref="#icon-chevron-up" />
            </svg>
            <span className="hidden">Return to the top of the page</span>
          </a>
          <div className="flex h-full gap-x-6 justify-center">
            <svg height="40" width="40">
              <use xlinkHref="#icon-lotus" />
            </svg>
            <div className="hidden md:flex md:flex-col md:font-light md:font-sans md:uppercase md:w-42">
              <div className="border-b border-light-pink lg:text-xl tracking-widest">
                <span className="pl-1">Jian Min</span>
              </div>
              <div className="mt-1 text-xs tracking-wider">Massage Therapy</div>
            </div>
          </div>
          <div className="flex flex-col py-10 md:py-0 text-center">
            <h3 className="font-light font-sans inline-block tracking-wide uppercase">
              Contact Info
            </h3>
            <span className="border-b border-light-pink flex items-center mx-auto pb-1 w-32"></span>
            <p className="text-sm py-2">Phone: (617) 208-9288</p>
            <a
              className="hover:underline focus:underline focus:outline-none text-sm"
              href="mailto:jianminmassagetherapy@gmail.com"
            >
              jianminmassagetherapy@gmail.com
            </a>
          </div>
          <div className="flex flex-col text-center">
            <h3 className="font-light font-sans inline-block tracking-wide uppercase">
              Hours
            </h3>
            <span className="border-b border-light-pink flex items-center mx-auto pb-1 w-16"></span>
            <p className="text-sm py-2">Monday to Friday</p>
            <p className="text-sm">9:30 am to 9:00 pm</p>
          </div>
        </div>
      </main>
    </html>
  );
}
