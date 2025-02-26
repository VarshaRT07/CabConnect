import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          src="/cab.jpg"
          alt="cab"
          className="object-contain"
          width={1000}
          height={800}
        />
        <div className="absolute top-10 right-0">
          <SignIn />
        </div>
      </div>
    </>
  );
}
