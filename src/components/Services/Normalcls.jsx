import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const Schedule = () => {
  const [phone, setPhone] = useState(""); // State to store phone number with country code

  const scheduleData = [
    {
      time: "06:30 AM (60 mins)",
      monday: "Bending & Twisting",
      tuesday: "Hip & Shoulder Opening",
      wednesday: "Front & Middle Split",
      thursday: "Backbending & Shoulder",
      friday: "Hatha & Core",
    },
    {
      time: "07:45 AM (60 mins)",
      monday: "Hip Opening & Shoulder",
      tuesday: "Backbending & Shoulder",
      wednesday: "Ashtanga Series",
      thursday: "Bending & Twisting",
      friday: "Inversion & Core",
    },
    {
      time: "09:30 AM (75 mins)",
      monday: "Gentle Stretching",
      tuesday: "Hip & Leg Stretching",
      wednesday: "Backbending & Shoulder",
      thursday: "Hatha & Core",
      friday: "Bending & Twisting",
    },
    {
      time: "11:30 AM (60 mins)",
      monday: "Available for Private Class",
      tuesday: "Full Body Opening",
      wednesday: "Available for Private Class",
      thursday: "Gentle Stretching",
      friday: "Available for Private Class",
    },
    {
      time: "05:15 PM (45 mins)",
      monday: "Available for Private Class",
      tuesday: "Kids Yoga",
      wednesday: "Available for Private Class",
      thursday: "Kids Yoga",
      friday: "Available for Private Class",
    },
    {
      time: "06:30 PM (60 mins)",
      monday: "Hip & Shoulder",
      tuesday: "Backbending & Shoulder",
      wednesday: "Twisting & Forwardbend",
      thursday: "Hatha & Core",
      friday: "Front & Middle Split",
    },
    {
      time: "07:40 PM (60 mins)",
      monday: "Gentle Stretching",
      tuesday: "Full Body Opening",
      wednesday: "Backbending & Shoulder",
      thursday: "Twisting & Forwardbend",
      friday: "Hip & Shoulder",
    },
  ];

  // Slots available based on schedule
  const slotNames = [
    "Bending & Twisting",
    "Hip & Shoulder Opening",
    "Backbending & Shoulder",
    "Hatha & Core",
    "Inversion & Core",
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto mt-[120px]">
      {/* Daily Classes Schedule */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Daily Classes Schedule
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">06:30 AM</th>
              <th className="border border-gray-300 px-4 py-2">07:45 AM</th>
              <th className="border border-gray-300 px-4 py-2">09:30 AM</th>
              <th className="border border-gray-300 px-4 py-2">11:30 AM</th>
              <th className="border border-gray-300 px-4 py-2">05:15 PM</th>
              <th className="border border-gray-300 px-4 py-2">06:30 PM</th>
              <th className="border border-gray-300 px-4 py-2">07:40 PM</th>
            </tr>
          </thead>
          <tbody>
            {["monday", "tuesday", "wednesday", "thursday", "friday"].map(
              (day, dayIndex) => (
                <tr key={dayIndex} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {day}
                  </td>
                  {scheduleData.map((item, timeIndex) => (
                    <td
                      key={timeIndex}
                      className={`border border-gray-300 px-4 py-2 ${
                        item[day] ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      {item[day] || "Not Available"}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Booking Form: Always visible */}
      <div className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Book Your Class</h3>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number with Country Code and Flags */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <PhoneInput
              country={"us"} // Default country
              value={phone}
              onChange={setPhone}
              enableSearch={true}
              containerClass="w-full"
              inputClass="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              buttonClass="bg-white border-gray-300"
              dropdownClass="border-gray-300"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Address</label>
            <textarea
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
              placeholder="Enter your address"
              rows="4"
              required
            />
          </div>

          {/* Slot Name Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Slot Name</label>
            <select
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            >
              {slotNames.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Slot Timing Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Slot Timing</label>
            <select
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            >
              {scheduleData.map((item, index) => (
                <option key={index} value={item.time}>
                  {item.time}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition-all shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
