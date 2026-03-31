const Pricing = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto px-2 py-30">
          <header className="text-center space-y-3 mb-10 text-black">
            <h1 className="text-5xl font-extrabold">
              Simple, Transparent Pricing
            </h1>
            <p className="font-semibold">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
            <div className="card card-body rounded-3xl border-none text-black shadow-xl bg-gray-100 flex flex-col  transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-cyan-100/50">
              <div className="flex-1 pt-5">
                <h1 className="text-3xl font-bold">Starter</h1>
                <p className="mt-1 opacity-90">Perfect for getting started</p>

                <div className="mt-8 mb-10">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-xl opacity-80">/Month</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Access to 10 free tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Basic templates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Community support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>1 project per month
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-5 pb-2">
                <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-6 border-none">
                  Get Started Free
                </button>
              </div>
            </div>

            <div className="card card-body rounded-3xl shadow-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex flex-col h-full relative transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-cyan-100/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2  bg-[#FEF3C6] text-[#BB4D00]  text-sm font-bold px-6 py-1.5 rounded-full shadow-md z-20">
                Most Popular
              </div>

              <div className="flex-1 pt-8">
                <h1 className="text-3xl font-bold">Pro</h1>
                <p className="mt-1 opacity-90">Best for professionals</p>

                <div className="mt-8 mb-10">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-xl opacity-80">/Month</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-white">✓</span>
                    Access to all premium tools
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">✓</span>
                    Unlimited templates
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">✓</span>
                    Unlimited projects
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">✓</span>
                    Cloud sync
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">✓</span>
                    Advanced analytics
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-5 pb-2">
                <div className="btn py-6 rounded-full w-full bg-white border-none">
                  <button className="bg-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold   w-full">
                    Start Pro Trial
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-body rounded-3xl  border-none text-black shadow-xl bg-gray-100 flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-cyan-100/50">
              <div className="flex-1 pt-5">
                <h1 className="text-3xl font-bold">Enterprise</h1>
                <p className="mt-1 opacity-90">For teams and businesses</p>

                <div className="mt-8 mb-10">
                  <span className="text-5xl font-bold">$99</span>
                  <span className="text-xl opacity-80">/Month</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Team collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Dedicated support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    SLA guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Custom branding
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-5 pb-2">
                <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-6 border-none">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
