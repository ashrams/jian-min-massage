export default function Contact() {
  return (
    <div
      className="bg-white md:flex max-w-5xl -mt-40 mx-auto px-12 md:px-16 lg:px-20 py-20 shadow-lg"
      id="contact"
    >
      <div className="flex flex-col md:pr-12 md:w-1/2">
        <h2 className="border-b border-light-pink font-light font-sans inline-block text-xl tracking-wide uppercase w-max">
          Contact Us
        </h2>
        <p className="font-serif md:max-w-xs my-6 leading-relaxed text-sm">
          Please complete the request form and a member of our team will contact
          you by phone within 24 hours to confirm your booking.
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
        <a className="focus:outline-none py-4 text-sm" href="tel:6172089288">
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
          action="/thanks"
          className="font-sans text-sm"
          name="contactForm"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          id="contact-form"
        >
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p className="pb-4">
            <label className="flex flex-col">
              <span>Name / 名 * </span>
              <input
                className="bg-light-gray border border-gray-200 mt-1 py-1 px-2"
                type="text"
                name="name / 名"
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
                <option value="Foot Massage">Foot Massage - 脚底按摩</option>
                <option value="Chinese Cupping">Chinese Cupping - 拔罐</option>
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
                name="Duration / 龄"
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
                name="Massage Therapist / 按摩治疗师"
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
  );
}
