import loadingSpinner from "@/public/assets/loading-spinner.svg";
import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen relative z-30 bg-[#f1f2f3] flex justify-center items-center">
      <Image
        src={loadingSpinner}
        width={500}
        height={400}
        alt="loading spinner"
      />
    </div>
  );
}
