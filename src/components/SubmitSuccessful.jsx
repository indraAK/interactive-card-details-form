const SubmitSuccessful = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/images/icon-complete.svg" alt="Icon Complete" />
      <h1 className="uppercase text-3xl text-[hsl(278_68%_11%)] tracking-widest mt-8 mb-3">
        Thank You!
      </h1>
      <p className="text-[hsl(279_6%_55%)] text-lg">
        We've added your card details
      </p>
      <button className="btn mt-10" onClick={() => location.reload()}>
        Continue
      </button>
    </div>
  );
};

export default SubmitSuccessful;
