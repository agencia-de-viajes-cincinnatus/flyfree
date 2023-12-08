export default function CreateDestinationForm() {
  return (
    <div className="rounded-xl bg-[#EDEDED] py-8 px-10 mb-6">
      <h2 className="text-2xl font-bold text-[#242424] mb-2">
        Create destination
      </h2>

      <form action="">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="destination">Country</label>
            </div>
            <input
              type="text"
              name="country"
              id="country"
              required
              className="p-3 w-full bg-[#D9D9D9] mt-2"
            />
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
              required
            />
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
              required
            />
          </div>

          <div>
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="date">Description</label>
            </div>
            <textarea name="description" id="description" className="p-3 w-full bg-[#D9D9D9] mt-2"></textarea>
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
              required
            />
          </div>
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
