<template>
  <div>
    <!-- dummy container  -->
    <!-- <div class=" w-full mt-16 grid md:flex">
          <div class=" w-full md:w-1/2">
          <div class=" md:pt-20 md:pl-20 mx-auto w-[96%] md:mx=0 md:max-w-[570px]" >
            <h1 class="text-5xl font-semibold">
              Tulipe Ushuru <br> Tujitegemee. 
            </h1>
            <p class="text-[#475467] text-lg mt-8">The convenient way for taxpayers to file their tax returns, make tax payments, and access various tax-related services online.<br> <br>
              Kenya Revenue Authority online services. Apply and pay for the services conveniently through your eCitizen account.</p>

              <div class="space-x-4 flex mt-8">
                <button class=" button btn-secondary"> Sign in </button>
                <button class=" button btn-tertiary"> Learn more </button>
            </div>           
          </div>
        </div>  -->
    <!-- Right side image -->
    <!-- <div class=" w-[96%] md:w-1/2 mx-auto md:mx=0 mt-8 md:mt-0  ">
            <img  src="public/Group_1.png" alt="">

          </div>
        </div>  -->

    <Carousel />
    <!-- Red container div -->
    <section
      class="bg-[#BC252B] min-w-[100%] lg:flex grid bg-cover relative h-auto mt-16 z-10 pb-5"
    >
      <img class="absolute -bottom-70 left-0" src="public/left.svg" alt="" />
      <img class="absolute -top-70 right-0" src="public/right.svg" alt="" />
      <img class="absolute -top-50  -z-10 left-0" src="public/Gradient-left.png" alt="" />
      <img class="absolute  -bottom-70 -z-10 right-0" src="public/Gradient-right.png" alt="" />
      

      <!-- Left section -->
      <div
        class="pt-10 md:pt-36 lg:pb-56 lg:pl-24 px-8 text-white w-full lg:w-[42%] z-12"
      >
        <h1 class="font-bold text-4xl">About KRA</h1>
        <p class="text-lg">
          The Kenya Revenue Authority was established by an Act of Parliament,
          Chapter 469 of the laws of Kenya, which became effective on 1st July
          1995. KRA is charged with collecting revenue on behalf of the
          government of Kenya. One of the core functions of the Authority is to
          assess, collect and account for all revenues.
        </p>
      </div>

      <!-- Right section -->
      <div
        class="bg-[url('public/KRA-lion-bg.png')] bg-contain   md:w-[500px] md:h-[500px] lg:mt-[109px] mt-15 mx-auto lg:ml-[15%] hidden  relative bg-no-repeat items-center justify-center md:flex"
      >
        <img class="-mt-25" src="public/KRA-lion.svg" alt="" />
        <!-- Buttons around the logo -->

        <button class="flex absolute button btn-lion top-10 left-15">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21.61V12.54"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.93014 2.48004L4.59014 5.44004C3.38014 6.11004 2.39014 7.79004 2.39014 9.17004V14.82C2.39014 16.2 3.38014 17.88 4.59014 18.55L9.93014 21.52C11.0701 22.15 12.9401 22.15 14.0801 21.52L19.4201 18.55C20.6301 17.88 21.6201 16.2 21.6201 14.82V9.17004C21.6201 7.79004 20.6301 6.11004 19.4201 5.44004L14.0801 2.47004C12.9301 1.84004 11.0701 1.84004 9.93014 2.48004Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Customs</p>
        </button>

        <button class="flex absolute button btn-lion top-18 -right-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>File returns</p>
        </button>

        <button class="flex absolute button btn-lion top-50 -right-20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.75 12L10.58 14.83L16.25 9.17004"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Tax Compliance</p>
        </button>

        <button class="flex absolute button btn-lion bottom-25 right-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.75 12L10.58 14.83L16.25 9.17004"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>More</p>
        </button>

        <button class="flex absolute button btn-lion bottom-30 -left-5">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6H1M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>payments</p>
        </button>

        <button class="flex absolute button btn-lion top-40 -left-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>Amnesty</p>
        </button>
      </div>
    </section>

    <!-- Navigating Taxes, Building Futures -->
    <section class="mt-2 text-xl text-[#475467] rounded-xl w-[90%] mx-auto">
      <div class="md:pl-8 pt-8">
        <h1 class="text-[#101828] font-semibold text-4xl">
          Navigating Taxes, Building Futures
        </h1>
        <p Class=" mt-5">
          Revolutionizing taxation collection through innovative and efficient
          solutions, fostering transparency,<br />
          compliance, and economic sustainability for a prosperous future.
        </p>
      </div>
      <!-- Text containers below -->
      <div class="grid md:flex gap-8 mt-10 md:mt-24 md:px-8">
        <div class="flex-col gap-2">
          <h1 class="text-[#101828]">Access your profile easily</h1>
          <p class="text-base">
            Effortlessly manage and view your taxpayer profile, accessing
            comprehensive information on income, deductions, compliance status,
            personal details and more through an intuitive and user-friendly
            interface.
          </p>
        </div>

        <div class="flex-col gap-2">
          <h1 class="text-[#101828]">Make payments directly</h1>
          <p class="text-base">
            Streamline your tax responsibilities by making secure and direct
            payments through an efficient online platform, ensuring a seamless
            and hassle-free experience for fulfilling your individual tax
            obligations.
          </p>
        </div>

        <div class="flex-col gap-2">
          <h1 class="text-[#101828]">Switch accounts</h1>
          <p class="text-base">
            Navigate between your individual and business profiles with the
            flexibility to manage diverse tax obligations seamlessly. Switch
            effortlessly to access and fulfill related tax responsibilities
            within a single, user-friendly platform.
          </p>
        </div>
      </div>
    </section>

    <!-- Individual tax payers -->
    <section class="w-[90%] mx-auto text-[#475467] text-xl font-semibold mt-20">
      <!-- Heading -->
      <div class="mt-8 md:pl-8 md:w-[60%]">
        <div class="rounded-2xl bg-[#FEF3F2] w-24 md:py-1 flex gap-[6px]">
          <img class="pl-[10px]" src="public/Dot.svg" alt="" />
          <p class="text-sm text-[#B42318] font-medium">Individual</p>
        </div>

        <div class="mt-3">
          <h1 class="text-4xl text-[#101828]">Individual tax payers</h1>
          <p class="mt-5 font-normal">
            Individual taxpayers encompass a diverse group, including salaried
            employees, self-employed individuals, professionals, investors,
            pensioners, and others, who earn income and are obligated to pay
            taxes in accordance with the applicable tax laws of their respective
            jurisdictions.
          </p>
        </div>
      </div>

      <!-- lower section -->
      <section
        class="mt-16 md:px-8 grid md:flex md:gap-2 lg:gap-0 justify-between max-h-[690px]"
      >
        <!-- right div -->
        <div class="grid gap-4 md:w-1/2">
          <div>
            <h1 class="text-[#101828] mt-2">Filing Tax Returns:</h1>
            <p class="mt-2 font-medium text-base">
              Individual taxpayers are required to file annual tax returns. They
              can use the KRA system to submit their returns, providing details
              of their income, deductions, and any other relevant information.
            </p>
          </div>

          <div>
            <h1 class="text-[#101828] mt-2">Tax Compliance Status</h1>
            <p class="mt-2 font-medium text-base">
              Individuals can verify their tax compliance status through the KRA
              system, ensuring that they are up to date with their tax
              obligations.
            </p>
          </div>

          <div>
            <h1 class="text-[#101828] mt-2">Tax statements</h1>
            <p class="mt-2 font-medium text-base">
              The system allows individuals to access and download their tax
              statements, which include details of income, deductions, and tax
              paid.
            </p>
          </div>

          <div>
            <h1 class="text-[#101828] mt-2">Tax Payments</h1>
            <p class="mt-2 font-medium text-base">
              Individual taxpayers can make tax payments through the KRA system,
              including income tax, value-added tax (VAT), and other applicable
              taxes.
            </p>
          </div>
        </div>

        <div>
          <img class=" md:flex" src="public/Content.png" alt="" />
        </div>
      </section>
    </section>

    <!-- Business tax payers -->
    <section class="w-[90%] mx-auto text-[#475467] text-xl font-semibold mt-[80] md:mt-[100px] ">
      <!-- Heading -->
      <div class="mt-8 md:pl-70 lg:w-[60%]">
        <div class="rounded-2xl bg-[#F8F9FC] w-24 md:py-1 flex gap-[6px]">
          <img class="pl-[10px]" src="public/BlueDot.svg" alt="" />
          <p class="text-sm text-[#363F72] font-medium">Individual</p>
        </div>

        <div class="mt-3">
          <h1 class="text-4xl text-[#101828]">Individual tax payers</h1>
          <p class="mt-5 font-normal">
            Individual taxpayers encompass a diverse group, including salaried
            employees, self-employed individuals, professionals, investors,
            pensioners, and others, who earn income and are obligated to pay
            taxes in accordance with the applicable tax laws of their respective
            jurisdictions.
          </p>
        </div>
      </div>
      <!-- lower section -->
      <section class="mt-16 md:px-8 grid md:flex md:gap-2 lg:gap-0 justify-between">
        <!--Right image  -->
        <div>
          <img class=" md:flex" src="public/Content2.png" alt="" />
        </div>

        <!-- left div -->
        <div class="grid gap-4 md:w-1/2">
          <div>
            <h1 class="text-[#101828] mt-2">Filing Tax Returns:</h1>
            <p class="mt-2 font-medium text-base">
              Individual taxpayers are required to file annual tax returns. They
              can use the KRA system to submit their returns, providing details
              of their income, deductions, and any other relevant information.
            </p>
          </div>

          <div>
            <h1 class="text-[#101828] mt-2">Tax Compliance Status</h1>
            <p class="mt-2 font-medium text-base">
              Individuals can verify their tax compliance status through the KRA
              system, ensuring that they are up to date with their tax
              obligations.
            </p>
          </div>

          <div>
            <h1 class="text-[#101828] mt-2">Tax statements</h1>
            <p class="mt-2 font-medium text-base">
              The system allows individuals to access and download their tax
              statements, which include details of income, deductions, and tax
              paid.
            </p>
          </div>

          <div>
            <h1 class="text-[#101828] mt-2">Tax Payments</h1>
            <p class="mt-2 font-medium text-base">
              Individual taxpayers can make tax payments through the KRA system,
              including income tax, value-added tax (VAT), and other applicable
              taxes.
            </p>
          </div>
        </div>
      </section>
    </section>

    <!-- Invoicing -->
    <section class="bg-[#2C2829] md:h-auto mt-12 grid md:flex md:pb-20">
      <!-- Right text -->
      <div class="md:pt-32 md:pl-28 px-6 pt-6 text-white text-lg  md:w-1/2">
        <h1 class="font-roboto font-semibold text-4xl">Invoicing</h1>
        <p class="md:w-[69.5%] mt-5">
          Transform the way you manage your business seamlessly with ETIMS
          E-Invoicing. In the fast-paced and dynamic landscape of modern
          business, efficient financial processes are crucial for success. ETIMS
          E-Invoicing is your comprehensive solution to streamline and optimize
          the invoicing workflow, allowing you to focus on what matters most –
          the growth and success of your business.
        </p>
        <button class="flex gap-2 mt-2 font-semibold">
          <p class="text-lg">Learn more</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16675 9.99984H15.8334M15.8334 9.99984L10.0001 4.1665M15.8334 9.99984L10.0001 15.8332"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <p class="text-lg mt-10">Available in:</p>

        <div class="text-base flex gap-12 mt-5">
          <div>
            <div
              class="bg-[url('public/web-ellipse.png')] bg-cover flex justify-center items-center h-[86px] w-[86px]"
            >
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.9264 25.246H7.07363M31.9264 25.246V13C31.9264 9.93525 31.9264 8.4045 30.9741 7.45225C30.0235 6.5 28.4911 6.5 25.4264 6.5H13.5736C10.5089 6.5 8.97813 6.5 8.02588 7.45225C7.07363 8.4045 7.07363 9.93525 7.07363 13V25.246M31.9264 25.246L34.7604 28.171L34.9034 28.3205C35.4246 28.8931 35.7243 29.633 35.7484 30.407L35.75 30.6134C35.75 30.8571 35.75 30.9774 35.7435 31.0797C35.6936 31.8693 35.3575 32.6136 34.7981 33.1731C34.2386 33.7325 33.4943 34.0686 32.7047 34.1185C32.5494 34.1251 32.3939 34.1273 32.2384 34.125H6.76162C6.51787 34.125 6.39763 34.125 6.29525 34.1185C5.50566 34.0686 4.76138 33.7325 4.20194 33.1731C3.64251 32.6136 3.30635 31.8693 3.2565 31.0797C3.25 30.9774 3.25 30.8555 3.25 30.615L3.25162 30.4086C3.27574 29.6347 3.57539 28.8948 4.09662 28.3221L4.23962 28.1726L7.07363 25.246M15.4375 30.0625H23.5625"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M20.7188 10.9688C20.7188 11.292 20.5903 11.602 20.3618 11.8305C20.1332 12.0591 19.8232 12.1875 19.5 12.1875C19.1768 12.1875 18.8668 12.0591 18.6382 11.8305C18.4097 11.602 18.2812 11.292 18.2812 10.9688C18.2812 10.6455 18.4097 10.3355 18.6382 10.107C18.8668 9.8784 19.1768 9.75 19.5 9.75C19.8232 9.75 20.1332 9.8784 20.3618 10.107C20.5903 10.3355 20.7188 10.6455 20.7188 10.9688Z"
                  fill="black"
                />
              </svg>
            </div>
            <p class="mt-5">Web version</p>
          </div>

          <div>
            <div
              class="bg-[url('public/web-ellipse.png')] bg-cover flex justify-center items-center h-[86px] w-[86px]"
            >
              <svg
                width="21"
                height="33"
                viewBox="0 0 21 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1150_30083)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.07461 0.824219C2.4182 0.824219 1.78867 1.08498 1.32452 1.54913C0.860367 2.01328 0.599609 2.64281 0.599609 3.29922V29.6992C0.599609 30.3556 0.860367 30.9852 1.32452 31.4493C1.78867 31.9135 2.4182 32.1742 3.07461 32.1742H17.9246C18.581 32.1742 19.2105 31.9135 19.6747 31.4493C20.1389 30.9852 20.3996 30.3556 20.3996 29.6992V3.29922C20.3996 2.64281 20.1389 2.01328 19.6747 1.54913C19.2105 1.08498 18.581 0.824219 17.9246 0.824219H3.07461ZM2.24961 3.29922C2.24961 3.08042 2.33653 2.87057 2.49125 2.71586C2.64596 2.56114 2.85581 2.47422 3.07461 2.47422H5.54961V4.12422C5.54961 4.34302 5.63653 4.55286 5.79125 4.70758C5.94596 4.8623 6.15581 4.94922 6.37461 4.94922H14.6246C14.8434 4.94922 15.0533 4.8623 15.208 4.70758C15.3627 4.55286 15.4496 4.34302 15.4496 4.12422V2.47422H17.9246C18.1434 2.47422 18.3533 2.56114 18.508 2.71586C18.6627 2.87057 18.7496 3.08042 18.7496 3.29922V29.6992C18.7496 29.918 18.6627 30.1279 18.508 30.2826C18.3533 30.4373 18.1434 30.5242 17.9246 30.5242H3.07461C2.85581 30.5242 2.64596 30.4373 2.49125 30.2826C2.33653 30.1279 2.24961 29.918 2.24961 29.6992V3.29922Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1150_30083">
                    <rect width="21" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p class="mt-5">Mobile version</p>
          </div>
        </div>
      </div>

      <!-- Left section -->
      <div
        class="md:w-1/2 bg-[url('public/Tailor.png')] bg-cover pb-5 bg-no-repeat  bg-center md:relative h-auto"
      >
        <img class="md:absolute md:mt-60" src="public/Invoice.png" alt="" />
      </div>
    </section>

    <!-- Property management with eRITS, tutorial, KRA checkers, Technology... -->
    <section>
      <!-- Property Management -->
      <div class="w-[90%] mt-24 mx-auto">
        <h1 class="text-4xl text-[#101828] text-center font-semibold">
          Property Management with eRITS
        </h1>
        <p class="text-[#475467] text-xl mt-2 text-center">
          Onboard your residential and commercial properties to eRITS with a
          click of a button
        </p>

        <div
          class="bg-[url('public/modern-apartment.png')] bg-cover bg-no-repeat h-auto py-6 mt-21"
        >
          <div
            class="md:w-[40%] w-[80%] mx-auto md:ml-[55%] bg-[#222222B2] backdrop-blur-lg rounded-xl relative"
          >
            <div class="py-9 px-6 text-white grid gap-4 justify-start">
              <img src="public/eRITS.svg" alt=" " />
              <h1 class="text-2xl font-semibold mt-4">
                eRITS Property Management System
              </h1>
              <p>
                Enjoy a hassle-free experience with our simplified registration
                process. Register your rental properties, file and pay your
                rental income taxes seamlessly while enjoying our bundled
                property management system
              </p>
              <button class="button btn-tertiary w-[190px]">
                Get Started on ERITS
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tutorials -->
      <div class="w-[90%] mt-28 mx-auto">
        <h1 class="text-4xl text-[#101828] font-semibold">Tutorials</h1>

        <div class="grid md:flex mt-7 justify-between">
          <div>
            <img src="public/Laptop1.png" alt="" />
            <p class="mt-8 text-[#475467] font-medium">
              File Income Tax Returns
            </p>
          </div>

          <div>
            <img src="public/Laptop2.png" alt="" />
            <p class="mt-8 text-[#475467] font-medium">File a NIL Return</p>
          </div>

          <div>
            <img src="public/Laptop3.png" alt="" />
            <p class="mt-8 text-[#475467] font-medium">
              File Withholding Income Tax Returns
            </p>
          </div>

          <div>
            <img src="public/Laptop4.png" alt="" />
            <p class="mt-8 text-[#475467] font-medium">
              File Withholding Income Tax Returns
            </p>
          </div>
        </div>
      </div>

      <!-- KRA Checkers -->
      <div class="w-[83%] mx-auto mt-11">
        <h1 class="text-4xl text-[#101828] text-center font-semibold">
          KRA Checkers
        </h1>
        <p class="text-[#475467] text-[22px] font-medium mt-2 text-center">
          Select Checker Below
        </p>

        <div class="mt-9 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            class="border border-[#EAECF0] rounded-xl py-4 px-4 hover:bg-gray-300 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">
                Staff Checker
              </h1>
              <p class="text-[#475467]">verify agents that work KRA</p>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="border border-[#EAECF0] hover:bg-gray-300 rounded-xl py-4 px-4 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">
                Application Status Checker
              </h1>
              <p class="text-[#475467]">Save my login details for next time.</p>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="border border-[#EAECF0] hover:bg-gray-300 rounded-xl py-4 px-4 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">Pin checker</h1>
              <p class="text-[#475467]">Save my login details for next time.</p>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="border border-[#EAECF0] rounded-xl py-4 hover:bg-gray-300 px-4 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">
                Tax Compliance Certificate /Exemption <br>   Certificate/Excise
                License/Certificate Checker
              </h1>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="border border-[#EAECF0] hover:bg-gray-300 rounded-xl py-4 px-4 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">
                Withholding Tax Agent Checker
              </h1>
              <p class="text-[#475467]">Verify Withholding Agent.</p>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="border border-[#EAECF0] hover:bg-gray-300 rounded-xl py-4 px-4 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">
                Control Unit checker
              </h1>
              <p class="text-[#475467]">Verify Control Unit Serial Number</p>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="border border-[#EAECF0] hover:bg-gray-300 rounded-xl py-4 px-4 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">
                Invoice Number checker
              </h1>
              <p class="text-[#475467]">
                Validate Control Unit Invoice Number.
              </p>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            class="border border-[#EAECF0] rounded-xl hover:bg-gray-300 py-4 px-4 flex justify-between"
          >
            <div>
              <h1 class="text-[#344054] font-semibold text-xl">
                Payment Registration Number (PRN)Checker
              </h1>
              <p class="text-[#475467]">Save my login details for next time.</p>
            </div>
            <svg
              class="self-center"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66675 9.99984H16.3334M16.3334 9.99984L10.5001 4.1665M16.3334 9.99984L10.5001 15.8332"
                stroke="#E36F04"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Technology... -->
      <div class=" mt-16 py-10  lg:w-[95%] bg-[#9E0008] pt-16 lg:pl-9 lg:ml-19 md:pr-[90px] lg:h-[431px] rounded-l-xl text-white grid lg:flex">
        <div class="  w-[94%] mx-auto" >
        <h1 class=" font-semibold text-3xl ">
          Technology is not only changing the way we interact but also the way we do business.
        </h1>
        <p class=" text-xl mt-8">
          It is not surprising that technology has also affected how tax is administered. KRA as part of its agenda to enhance service delivery as well as promote tax compliance continues to implement systems that leverage on technology to simplify tax operations.
        </p>
      </div>
        <img class="md:h-[463px] md:w-auto w-[94%] mx-auto mt-6 md-mt-0" src="public/Accountant.png" alt="">

      </div>



    </section>
  </div>
</template>

<script setup>
import Carousel from "@/components/Carousel.vue";
</script>
