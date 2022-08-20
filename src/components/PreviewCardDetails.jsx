import { useCard } from "../context/CardContext";

const PreviewCardDetails = () => {
  const { card } = useCard();

  const cardNumber = card.cardNumber.replaceAll(" ", "");

  return (
    <div className="flex flex-col lg:gap-y-8">
      <div className="relative max-w-full w-[300px] h-[190px] ml-auto sm:w-[400px] sm:h-[210px] lg:order-1 lg:w-[380px] lg:ml-0 lg:translate-x-20">
        <img
          src="/images/bg-card-back.png"
          alt="Card Back"
          className="absolute top-0 left-0 w-full h-full drop-shadow-2xl"
        />
        <span className="absolute top-1/2 right-9 text-sm -translate-y-1/2 text-gray-200 tracking-widest sm:right-12 sm:text-base">
          {card.cvc}
        </span>
      </div>
      <div className="relative max-w-full w-[300px] h-[170px] -mt-[83px] sm:w-[395px] sm:h-[200px] sm:-mt-[91px] lg:w-[380px] lg:-mt-0">
        <img
          src="/images/bg-card-front.png"
          alt="Card Front"
          className="absolute top-0 left-0 w-full h-full drop-shadow-2xl"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 p-5 flex flex-col justify-between sm:p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="w-4 h-4 rounded-full border border-gray-200"></div>
          </div>
          <div>
            <div className="text-gray-200 text-lg sm:text-2xl tracking-widest">
              {cardNumber ? (
                [...Array(16).keys()].map((item, idx) =>
                  (idx + 1) % 4 === 0 ? (
                    <span key={idx} className="mr-2">
                      {cardNumber[idx]}
                    </span>
                  ) : (
                    <span key={idx}>{cardNumber[idx]}</span>
                  )
                )
              ) : (
                <>
                  <span className="mr-2">0000</span>
                  <span className="mr-2">0000</span>
                  <span className="mr-2">0000</span>
                  <span className="mr-2">0000</span>
                </>
              )}
            </div>
            <div className="flex items-center justify-between text-gray-300 mt-5">
              <p className="uppercase tracking-wider text-sm">
                {card.cardholderName || "Jane Appleseed"}
              </p>
              <div className="text-sm space-x-1">
                <span className="tracking-wide">{card.expMonth || "00"}</span>
                <span>/</span>
                <span className="tracking-wide">{card.expYear || "00"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCardDetails;
