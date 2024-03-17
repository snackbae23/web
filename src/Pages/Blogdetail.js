import React from "react";
import Footer from "../Components/Footer";
import TeamSlider from "../Components/TeamSlider";

const Blogdetail1 = () => {
  return (
    <div>
      <div className="w-full h-fit flex  flex-col md:flex-row ">
        {/* Right */}

        <div className="md:w-[50%] w-[100%] flex flex-col h-fit items-center gap-2 bg-white p-12">
          <h1 className="md:text-[2.63rem] text-[1.6rem] md:mt-[100px]  mt-[80px] font-semibold  ">
            Blog detail title lorem ipsum
          </h1>
          <p className="text-[0.88rem] text-black w-[90%] text-wrap ">
            Review, pay, book, and invite friends to earn coupons with every
            interaction on Snackbae. Discover new restaurants, reserve a table,
            and enjoy exclusive discounts and offers.
          </p>
          <div className="flex  w-full justify-between">
            <p className=" text-slate-500 w-fit px-3 py-1 rounded-xl flex">
              May 23,2023 | 6 min |{" "}
              <img
                className="relative w-[1.5rem] h-[1.5rem] z-[0]"
                alt=""
                src="/Frame (1).png"
              />
            </p>
            <div className="flex flex-row mt-2  gap-[0.68rem]">
              <img
                className="relative w-[1.14rem] h-[1.19rem] overflow-hidden shrink-0"
                alt=""
                src="/facebook-app-symbol.png"
              />
              <img
                className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                alt=""
                src="/linkedin 1.png"
              />
              <img
                className="relative w-[1.36rem] h-[1.36rem] overflow-hidden shrink-0"
                alt=""
                src="/Frame.png"
              />
            </div>
          </div>
          <img className="object-cover" alt="" src="/rectangle-481@2x.png" />
          <div className="relative tracking-[-0.02em] leading-[1.56rem] inline-block  mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="relative tracking-[-0.02em] leading-[1.56rem] inline-block mt-6 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </div>
          <div className="relative tracking-[-0.02em] leading-[1.56rem] inline-block mt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </div>
        </div>

        {/* left */}

        <div className="md:w-[50%] w-[100%] flex flex-col  h-fit  gap-2 bg-white p-12">
          <h1 className="md:text-[2rem] text-[1.6rem] md:mt-[120px] mt-[30px] font-semibold flex justify-start">
            Most Popular Blogs
          </h1>

          <div className=" w-full flex  flex-col md:flex-row mt-3 ">
            <img
              className=" top-[1rem] left-[0rem] md:rounded-sm rounded-lg md:w-[11.04rem] w-full h-[9.16rem] object-cover"
              alt=""
              src="/rectangle-22342@2x.png"
            />
            <div className="flex flex-col">
              <div className=" text-slate-500 w-fit px-3 py-1 rounded-xl flex">
                May 23, 2023
              </div>
              <b className="  text-[1.rem] leading-[1.75rem] inline-block font-web-heading-4 ml-4 ">
                Popular Food Street
              </b>
              <div className=" text-[0.88rem] tracking-[-0.02em] leading-[1.56rem] font-open-sans inline-block ml-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className=" w-full flex  flex-col md:flex-row mt-3 ">
            <img
              className=" top-[1rem] left-[0rem] md:rounded-sm rounded-lg md:w-[11.04rem] w-full h-[9.16rem] object-cover"
              alt=""
              src="/rectangle-22342@2x.png"
            />
            <div className="flex flex-col">
              <div className=" text-slate-500 w-fit px-3 py-1 rounded-xl flex">
                May 23, 2023
              </div>
              <b className="  text-[1.rem] leading-[1.75rem] inline-block font-web-heading-4 ml-4 ">
                Popular Food Street
              </b>
              <div className=" text-[0.88rem] tracking-[-0.02em] leading-[1.56rem] font-open-sans inline-block ml-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className=" w-full flex  flex-col md:flex-row mt-3 ">
            <img
              className="top-[1rem] left-[0rem] md:rounded-sm rounded-lg md:w-[11.04rem] w-full h-[9.16rem] object-cover"
              alt=""
              src="/rectangle-22342@2x.png"
            />
            <div className="flex flex-col">
              <div className=" text-slate-500 w-fit px-3 py-1 rounded-xl flex">
                May 23, 2023
              </div>
              <b className="  text-[1.rem] leading-[1.75rem] inline-block font-web-heading-4 ml-4 ">
                Popular Food Street
              </b>
              <div className=" text-[0.88rem] tracking-[-0.02em] leading-[1.56rem] font-open-sans inline-block ml-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className=" w-full flex  flex-col md:flex-row mt-3 ">
            <img
              className=" top-[1rem] left-[0rem] md:rounded-sm rounded-lg md:w-[11.04rem] w-full h-[9.16rem] object-cover"
              alt=""
              src="/rectangle-22342@2x.png"
            />
            <div className="flex flex-col">
              <div className=" text-slate-500 w-fit px-3 py-1 rounded-xl flex">
                May 23, 2023
              </div>
              <b className="  text-[1.rem] leading-[1.75rem] inline-block font-web-heading-4 ml-4 ">
                Popular Food Street
              </b>
              <div className=" text-[0.88rem] tracking-[-0.02em] leading-[1.56rem] font-open-sans inline-block ml-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className=" w-full flex  flex-col md:flex-row mt-3 ">
            <img
              className=" top-[1rem] left-[0rem] md:rounded-sm rounded-lg md:w-[11.04rem] w-full h-[9.16rem] object-cover"
              alt=""
              src="/rectangle-22342@2x.png"
            />
            <div className="flex flex-col">
              <div className=" text-slate-500 w-fit px-3 py-1 rounded-xl flex">
                May 23, 2023
              </div>
              <b className="  text-[1.rem] leading-[1.75rem] inline-block font-web-heading-4 ml-4 ">
                Popular Food Street
              </b>
              <div className=" text-[0.88rem] tracking-[-0.02em] leading-[1.56rem] font-open-sans inline-block ml-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="lg:mx-24 mt-8 mx-5">
        <h1 className=" font-extrabold h-14 ">Trending Blogs</h1>
        <TeamSlider />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blogdetail1;
