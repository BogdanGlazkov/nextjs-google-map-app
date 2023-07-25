import { useContext } from "react";
import Image from "next/image";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

const BusinessToast = () => {
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );

  return (
    <>
      {selectedBusiness ? (
        <div className="fixed bottom-5 right-5 z-10 flex items-center gap-5 bg-purple-400 opacity-90 p-4 rounded-2xl text-white">
          <div>
            <h2 className="font-semibold text-[20px]">
              {selectedBusiness.name}
            </h2>
            <p>0.2km Away</p>
          </div>
          <div className="bg-purple-300 p-4 rounded-xl cursor-pointer hover:scale-105 transition-all">
            <Image src="/send.png" alt="Nav" width={20} height={20} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BusinessToast;
