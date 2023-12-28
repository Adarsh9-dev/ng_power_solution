import FooterLogo from "../../webImages/mainLogo1.png";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
              If you have any questions or need help, feel free to contact with our team.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                {/* Privacy Policy | © {new Date().getFullYear()} GymTraction <br />{" "} */}
             
                NO-343, SRI LAKSHMI PALACE, 10TH CROSS, 6TH MAIN, “B” BLOCK, A.E.C.S LAYOUT, KUDLU GATE, HOSUR MAIN ROAD, BANGALORE -560068.
              </p>
            </div>

            {/* middle div */}
            {/* <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Fitness Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div> */}

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Power Backup Solution & Service</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
              Data Center Solution & Service
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
              Cooling Solution & Service
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Power Quality Analysis Solution</p>
              <p className="text-[16px] text-[#646464] font-medium">
              Power Solution
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
              Service Solution
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
