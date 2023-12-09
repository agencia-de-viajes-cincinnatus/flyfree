export default function CreateReservationForm() {
  return (
    <div className="rounded-xl bg-[#EDEDED] py-8 px-10 mb-6  shadow-lg">
      <h2 className="text-2xl font-bold text-[#242424] mb-2">
        Create reservation
      </h2>

      <form action="">
        <div className="flex space-x-4">
          <div className="w-2/4">
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="destination">Destination</label>
            </div>
            <select
              name="destination"
              id="destination"
              className="p-4 w-full bg-[#D9D9D9] mt-2"
              required
            >
              <option value="1">(Example)</option>
              <option value="2">(Example)</option>
              <option value="3">(Example)</option>
            </select>
          </div>

          <div className="w-2/4">
            <div className="font-bold text-[#696969] text-xl">
              <label htmlFor="date">Date</label>
            </div>
            <input
              type="date"
              name="date"
              id="date"
              className="p-3 w-full bg-[#D9D9D9] mt-2"
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button type="reset" className="bg-red-600 px-8 py-2 text-white font-bold rounded-xl text-lg">Cancel</button>
          <button type="submit" className="bg-tertiary px-8 py-2 text-white font-bold rounded-xl text-lg">Create</button>
        </div>
      </form>
    </div>
  );
}
