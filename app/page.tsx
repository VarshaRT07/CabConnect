'use client'
import PlaceSearch from "@/components/PlaceSearch";
import { PlacesResponse } from "@/lib/interface";
import { CarTaxiFront, CircleStop, Package, Plus, SquareArrowDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const defaultLocation: PlacesResponse = {
  place_id: 0,
  lat: "",
  lon: "",
  addresstype: "",
  name: "",
  display_name: ""
}
export default function Home() {
  const [pickupLocation, setPickupLocation] = useState<PlacesResponse>(defaultLocation);
  const [dropOffLocation, setDropOffLocation] = useState<PlacesResponse>(defaultLocation);

  console.log(pickupLocation);
  console.log(dropOffLocation);

  return (
    <div className="">
      <div className="flex items-center justify-between px-12 py-12 bg-white">
        {/* Left Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Go anywhere with Uber</h1>
          <div className="flex items-center gap-6 mb-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg text-black">
              <CarTaxiFront />
              Ride
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg text-black">
              <Package />
              Courier
            </button>
          </div>
          <div className="space-y-4">
            {/* Pickup Location */}
            <div className="flex items-center gap-4 bg-gray-100 rounded-lg px-4 py-3">
              <CircleStop />
              <PlaceSearch
                value={pickupLocation}
                placeholder="Search for a pickup location"
                onChange={(location) => setPickupLocation(location)}
              />
            </div>

            {/* Dropoff Location */}
            <div className="flex items-center gap-4 bg-gray-100 rounded-lg px-4 py-3">
              <SquareArrowDown />
              <PlaceSearch
                value={dropOffLocation}
                placeholder="Search for a dropoff location"
                onChange={(location) => setDropOffLocation(location)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-200 rounded-lg text-black">
              <Plus />
              Today
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-200 rounded-lg text-black">
              <Plus />
              Now
            </button>
          </div>

          <button className="mt-6 w-full px-4 py-3 bg-black text-white rounded-lg text-center hover:bg-gray-800">
            See prices
          </button>
        </div>

        {/* Right Section - Map */}
        <div className="w-1/2 absolute">
          <Image
            src="https://via.placeholder.com/600x400" /* Replace with map API or screenshot */
            alt="Map"
            fill
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
