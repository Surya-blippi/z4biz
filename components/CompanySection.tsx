export const CompanySection = () => {
    return (
      <div className="mt-16">
        <div className="flex justify-between items-center">
          <div className="flex space-x-16">
            <img src="/bmo-logo.png" alt="BMO" className="h-8 opacity-50" />
            <img src="/desjardins-logo.png" alt="Desjardins" className="h-8 opacity-50" />
            <img src="/assumption-logo.png" alt="Assumption Life" className="h-8 opacity-50" />
          </div>
  
          <div className="max-w-md">
            <p className="text-xl">
              <span className="font-semibold">From hiring to retiring</span>, streamline
              every aspect of your HR with one powerful, <span className="font-semibold">all-in-one platform</span>.
            </p>
          </div>
        </div>
      </div>
    );
  };