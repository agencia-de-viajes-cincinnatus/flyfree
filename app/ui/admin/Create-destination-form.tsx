"use client";

import { createDestination } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export default function CreateDestinationForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createDestination, initialState);

  return (
    <div className="rounded-xl bg-[#EDEDED] py-8 px-10 mb-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#242424] mb-2">
        Create destination
      </h2>

      <form action={dispatch}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="destination">Country</label>
            </div>
            <input
              type="text"
              name="country"
              id="country"
              className="p-3 w-full bg-[#D9D9D9] mt-2"
              aria-describedby="country-error"
            />
            <div id="country-error" aria-live="polite" aria-atomic="true">
              {state.errors?.country &&
                state.errors.country.map((error: string) => (
                  <p className="mt-2 text-base text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="date">City</label>
            </div>
            <input
              type="text"
              name="city"
              id="city"
              className="p-3 w-full bg-[#D9D9D9] mt-2"
              aria-describedby="city-error"
            />
            <div id="city-error" aria-live="polite" aria-atomic="true">
              {state.errors?.city &&
                state.errors.city.map((error: string) => (
                  <p className="mt-2 text-base text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="date">Price</label>
            </div>
            <input
              type="number"
              name="price"
              id="price"
              className="p-3 w-full bg-[#D9D9D9] mt-2"
              aria-describedby="price-error"
            />
            <div id="price-error" aria-live="polite" aria-atomic="true">
              {state.errors?.price &&
                state.errors.price.map((error: string) => (
                  <p className="mt-2 text-base text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="date">Description</label>
            </div>
            <textarea
              name="description"
              id="description"
              className="p-3 w-full bg-[#D9D9D9] mt-2"
              aria-describedby="description-error"
            ></textarea>
            <div id="description-error" aria-live="polite" aria-atomic="true">
              {state.errors?.description &&
                state.errors.description.map((error: string) => (
                  <p className="mt-2 text-base text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="date">Score</label>
            </div>
            <input
              type="number"
              name="score"
              id="score"
              className="p-3 w-full bg-[#D9D9D9] mt-2"
              aria-describedby="score-error"
            />
            <div id="score-error" aria-live="polite" aria-atomic="true">
              {state.errors?.score &&
                state.errors.score.map((error: string) => (
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
