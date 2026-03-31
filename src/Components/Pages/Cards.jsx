import { toast } from "react-toastify";

const Cards = ({ SelectCard, setSelectCard }) => {
  const handelClickRemove = (card) => {
    const filterRemove = SelectCard.filter(
      (SelectCards) => SelectCards.id !== card.id,
    );
    setSelectCard(filterRemove);
    toast.success("Removed Successful!");
  };
  const totalPrice = SelectCard.reduce((sum, itm) => sum + itm.price, 0);
  const handelClickCheckout = () => {
    setSelectCard([]);
    toast.success("🎉 Proceed to Checkout Successful!");
  };

  return (
    <>
      <section className="pb-30 bg-white text-black">
        <h2 className="text-3xl font-bold">Your Cards</h2>

        {SelectCard.length === 0 ? (
          <>
            <div className="flex flex-col items-center justify-center h-100 rounded-2xl border border-gray-300 mt-10">
              <p className="text-6xl mb-4">📪</p>
              <h2 className="text-3xl font-bold mb-2">No cards selected yet</h2>
              <p className="text-gray-500 font-semibold">
                Click on any product to add it here
              </p>
            </div>
          </>
        ) : (
          <>
            {SelectCard.map((card) => (
              <>
                <div
                  key={card.id}
                  className="flex flex-col sm:flex-row items-center justify-between mt-10 border border-gray-300 rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                    <div className="rounded-full w-fit bg-base-300 border border-gray-400">
                      <img src={card.icon} alt="" className="w-20 p-4" />
                    </div>
                    <div className="ml-5 flex flex-col gap-3">
                      <h2 className="text-2xl font-bold">{card.name}</h2>
                      <p className="text-xl font-bold">${card.price}</p>
                    </div>
                  </div>
                  <span
                    onClick={() => handelClickRemove(card)}
                    className="text-xl font-bold text-red-500 cursor-pointer"
                  >
                    Remove
                  </span>
                </div>
              </>
            ))}
            {/* total and checkout btn */}
            <>
              <div className="flex items-center justify-between py-10">
                <h2 className="text-2xl font-bold">Total:</h2>
                <p className="text-2xl font-bold">${totalPrice}</p>
              </div>
              <button
                onClick={handelClickCheckout}
                className="btn text-xl font-bold text-white w-full rounded-full py-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] "
              >
                Proceed to Checkout
              </button>
            </>
          </>
        )}
      </section>
    </>
  );
};

export default Cards;
