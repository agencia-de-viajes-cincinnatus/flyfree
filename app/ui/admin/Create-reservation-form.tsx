"use client";

import { Destination } from "@/app/lib/definitions";
import { createReservation } from "@/app/lib/reservationActions";
import { useFormState } from "react-dom";

export default function CreateReservationForm({
  destinations,
}: {
  destinations: Destination[];
}) {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createReservation, initialState);

  return (
    <div className="rounded-xl bg-[#EDEDED] py-8 px-10 mb-6  shadow-lg">
      <h2 className="text-2xl font-bold text-[#242424] mb-2">
        Create reservation
      </h2>

      <form action={dispatch}>
        <div className="flex space-x-4">
          <div className="w-2/6">
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="destination">Destination</label>
            </div>
            <select
              name="destination"
              id="destination"
              className="p-4 w-full bg-[#D9D9D9] mt-2"
              defaultValue=""
              aria-describedby="destination-error"
            >
              <option value="" disabled>
                Select a destination
              </option>
              {destinations?.map((destination) => (
                <option key={destination.id} value={destination.id}>
                  {destination.city}
                </option>
              ))}
            </select>
            <div id="destination-error" aria-live="polite" aria-atomic="true">
              {state.errors?.destination &&
                state.errors?.destination.map((error: string) => (
                  <p className="mt-2 text-base text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div className="w-2/6">
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="date">Date</label>
            </div>
            <input
              type="date"
              name="date"
              id="date"
              className="p-3 w-full bg-[#D9D9D9] mt-2"
              aria-describedby="date-error"
            />
          <div id="date-error" aria-live="polite" aria-atomic="true">
              {state.errors?.date &&
                state.errors?.date.map((error: string) => (
                  <p className="mt-2 text-base text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div className="w-2/6">
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="passengers">Passengers</label>
            </div>
            <input
              type="number"
              name="passengers"
              id="passengers"
              className="p-4 w-full bg-[#D9D9D9] mt-2"
              aria-describedby="passengers-error"
            />
          <div id="passengers-error" aria-live="polite" aria-atomic="true">
              {state.errors?.passengers &&
                state.errors?.passengers.map((error: string) => (
                  <p className="mt-2 text-base text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div aria-live="polite" aria-atomic="true">
          {state.errors && (
            <p className="mt-2 text-md text-red-500" key={state.message}>
              {state.message}
            </p>
          )}
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            type="reset"
            className="bg-red-600 px-8 py-2 text-white font-bold rounded-xl text-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-tertiary px-8 py-2 text-white font-bold rounded-xl text-lg"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
