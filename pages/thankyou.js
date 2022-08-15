import Image from "next/image";
import thankyou from "../public/thankyou.jpg";

export default function Thankyou() {
  return (
    <div>
      <div className="text-6xl text-center text-white mb-10 mt-10">
        Thank you for supporting V1 Swap
      </div>
      <div className="text-center text-lg">
        We will get back to you with V2 Swap and official documentation
      </div>
      <div>
        <Image src={thankyou} alt="thankyou" />
      </div>
    </div>
  );
}
