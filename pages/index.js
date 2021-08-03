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
              <img
                alt="Jian Min logo"
                height="53"
                width="142"
                src="img/logo.png"
              />
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
            <a className="focus:outline-none" href="#contact">
              <button className="hover:bg-extra-light-pink focus:bg-extra-light-pink focus:outline-none bg-light-pink h-14 font-sans mx-auto shadow-lg tracking-wide uppercase w-44">
                Contact Us
              </button>
            </a>
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
                  Open Daily 9:30 am - 9:00 pm
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
                <a
                  className="focus:outline-none focus:bg-gray-200 focus:bg-opacity-40 font-serif text-sm lg:text-base"
                  href="tel:6172089288"
                >
                  (617) 208-9288
                </a>
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
                Relxation Massage
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
        <div className="bg-light-gray pb-32 pt-16 md:pb-48 md:pt-24 text-center">
          <h2 className="border-b border-light-pink font-light font-sans inline-block text-2xl tracking-wide uppercase">
            Location
          </h2>
          <div className="md:flex items-center bg-white max-w-5xl md:mt-12 mt-8 mx-auto text-left">
            <div className="md:order-1 md:w-3/5 lg:w-3/5">
              <img
                alt="Map of location"
                height="325"
                width="614"
                src="img/map.jpg"
              />
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
        <div className="bg-light-green px-6 py-20 relative">
          <a
            className="absolute bg-light-pink border-2 border-light-pink hover:bg-white hover:text-light-pink focus:bg-white focus:text-light-pink focus:outline-none flex text-white justify-center items-center footer-arrow h-10 -top-24 w-10"
            href="#top-of-page"
          >
            <svg className="fill-current" height="20" width="20">
              <use xlinkHref="#icon-chevron-up" />
            </svg>
            <span className="hidden">Return to the top of the page</span>
          </a>
          <div
            className="bg-white md:flex max-w-5xl -mt-40 mx-auto px-12 md:px-16 lg:px-20 py-20 shadow-lg"
            id="contact"
          >
            <div className="flex flex-col md:pr-12 md:w-1/2">
              <h2 className="border-b border-light-pink font-light font-sans inline-block text-xl tracking-wide uppercase w-max">
                Contact Us
              </h2>
              <p className="font-serif md:max-w-xs my-6 leading-relaxed text-sm">
                Please complete the request form and a member of our team will
                contact you by phone within 24 hours to confirm your booking.
              </p>
              <a
                className="focus:outline-none text-sm"
                href="mailto:jianminmassagetherapy@gmail.com"
              >
                Email:
                <span className="ml-2 underline">
                  jianminmassagetherapy@gmail.com
                </span>
              </a>
              <a
                className="focus:outline-none py-4 text-sm"
                href="tel:6172089288"
              >
                Phone:
                <span className="ml-2 underline">(617) 208-9288</span>
              </a>
              <div className="gap-x-2 flex flex-row items-center mt-2">
                <a className="contact-logo" href="">
                  <svg height="28" width="28">
                    <use xlinkHref="#icon-trip-advisor" />
                  </svg>
                </a>
                <a
                  className="contact-logo"
                  href="https://www.yelp.com/biz/jian-min-massage-therapy-boston-2"
                >
                  <svg height="28" width="28">
                    <use xlinkHref="#icon-yelp" />
                  </svg>
                </a>
                <a className="contact-logo" href="">
                  <svg height="20" width="20">
                    <use xlinkHref="#icon-google" />
                  </svg>
                </a>
              </div>
              <div className="mt-10 mb-10 md:mb-0">
                <h3 className="border-b border-light-pink inline-block font-sans font-light tracking-wide uppercase">
                  Hours
                </h3>
                <p className="font-serif my-2 text-sm">
                  Open Daily 9:30 am - 9:00 pm
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <form
                action="/contact-thanks"
                className="font-sans text-sm"
                name="contactForm"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                id="contact-form"
              >
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <p className="pb-4">
                  <label className="flex flex-col">
                    <span>Name / 名 * </span>
                    <input
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2"
                      type="text"
                      name="name"
                    />
                  </label>
                </p>
                <div className="flex gap-x-4">
                  <label className="flex flex-col w-1/2">
                    <span>Email / 电子邮件 * </span>
                    <input
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2"
                      type="email"
                      name="email"
                    />
                  </label>
                  <label className="flex flex-col w-1/2">
                    <span>Phone / 电话 * </span>
                    <input
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2"
                      type="tel"
                      name="phone"
                    />
                  </label>
                </div>
                <p className="py-4">
                  <label>
                    Treatment / 按摩 :
                    <select
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2 w-full"
                      name="treatment[]"
                    >
                      <option value="select" selected>
                        Choose an option
                      </option>
                      <option value="Deep Tissue Massage">
                        Deep Tissue - 大力按摩
                      </option>
                      <option value="Relaxation Massage">
                        Relaxation Massage - 放松按摩
                      </option>
                      <option value="Hot Stone Massage">
                        Hot Stone Massage - 热石
                      </option>
                      <option value="Foot Massage">
                        Foot Massage - 脚底按摩
                      </option>
                      <option value="Chinese Cupping">
                        Chinese Cupping - 拔罐
                      </option>
                      <option value="Lymphatic Detox">
                        Lymphatic Detox - 全身淋巴排毒
                      </option>
                    </select>
                  </label>
                </p>
                <p className="pb-4">
                  <label>
                    Duration / 龄 :
                    <select
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2 w-full"
                      name="treatment[]"
                    >
                      <option value="select" selected>
                        Choose an option
                      </option>
                      <option value="30 Minutes">30 Minutes</option>
                      <option value="60 Minutes">60 Minutes</option>
                    </select>
                  </label>
                </p>
                <p className="pb-4">
                  <label>
                    Massage Therapist / 按摩治疗师 :
                    <select
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2 w-full"
                      name="treatment[]"
                    >
                      <option value="select" selected>
                        No preference
                      </option>
                      <option value="Ah Heung">Ah Heung</option>
                      <option value="Ah Lin">Ah Lin</option>
                    </select>
                  </label>
                </p>
                <div className="flex gap-x-4 pb-4">
                  <label className="flex flex-col w-1/2">
                    <span>Date / 日 * </span>
                    <input
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2"
                      type="date"
                      name="date"
                    />
                  </label>
                  <label className="flex flex-col w-1/2">
                    <span>Time / 时 * </span>
                    <input
                      className="bg-light-gray border border-gray-200 mt-1 py-1 px-2"
                      type="time"
                      name="time"
                    />
                  </label>
                </div>
                <input type="hidden" name="form-name" value="contactForm" />
                <button
                  className="bg-light-pink hover:bg-extra-light-pink focus:bg-extra-light-pink focus:outline-none tracking-wide my-4 py-3 px-6 uppercase shadow-lg"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col mt-6 items-center">
            <svg height="40" width="40">
              <use xlinkHref="#icon-lotus" />
            </svg>
          </div>
        </div>
      </main>
    </html>
  );
}
