import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCard } from "../context/CardContext";
import SubmitSuccessful from "./SubmitSuccessful";

const schema = yup
  .object({
    cardholderName: yup
      .string()
      .trim()
      .required(`Can't be blank`)
      .matches(/^[a-zA-Z\s]+$/, "Letters only"),
    cardNumber: yup
      .string()
      .trim()
      .required(`Can't be blank`)
      .matches(/^[\d\s]+$/, "Wrong format, numbers only")
      .test(
        "cardNumber",
        "Must be exactly 16 digits",
        (value) => value.replaceAll(" ", "").length === 16
      ),
    expMonth: yup
      .string()
      .trim()
      .required(`Can't be blank`)
      .matches(/^\d+$/, "Numbers only")
      .test(
        "expMonth",
        "Must be exactly 2 digits",
        (value) => value.length === 2
      ),
    expYear: yup
      .string()
      .trim()
      .required(`Can't be blank`)
      .matches(/^\d+$/, "Numbers only")
      .test(
        "expMonth",
        "Must be exactly 2 digits",
        (value) => value.length === 2
      ),
    cvc: yup
      .string()
      .trim()
      .required(`Can't be blank`)
      .matches(/^\d+$/, "Numbers only")
      .length(3, "Must be exactly 3 digits"),
  })
  .required();

const CardDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  const { setCard } = useCard();

  return (
    <div className="mt-10 lg:basis-1/3">
      {isSubmitSuccessful ? (
        <SubmitSuccessful />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
          <div className="form-control">
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              placeholder="e.g. Jane Appleseed"
              className={errors.cardholderName?.message ? "invalid" : null}
              {...register("cardholderName", {
                required: true,
                onChange: (e) =>
                  setCard((state) => ({
                    ...state,
                    [e.target.name]: e.target.value,
                  })),
              })}
            />
            {errors.cardholderName?.message && (
              <span className="inline-block text-sm text-red-500 mt-1">
                {errors.cardholderName?.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              id="cardNumber"
              placeholder="e.g. 1234 5678 9123 4567"
              className={errors.cardNumber?.message ? "invalid" : null}
              {...register("cardNumber", {
                required: true,
                onChange: (e) =>
                  setCard((state) => ({
                    ...state,
                    [e.target.name]: e.target.value,
                  })),
              })}
            />
            {errors.cardNumber?.message && (
              <span className="inline-block text-sm text-red-500 mt-1">
                {errors.cardNumber?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="exp-date">Exp. Date (mm/yy)</label>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="MM"
                    className={errors.expMonth?.message ? "invalid" : null}
                    {...register("expMonth", {
                      required: true,
                      onChange: (e) =>
                        setCard((state) => ({
                          ...state,
                          [e.target.name]: e.target.value,
                        })),
                    })}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="YY"
                    className={errors.expYear?.message ? "invalid" : null}
                    {...register("expYear", {
                      required: true,
                      onChange: (e) =>
                        setCard((state) => ({
                          ...state,
                          [e.target.name]: e.target.value,
                        })),
                    })}
                  />
                </div>
              </div>
              {errors.expMonth?.message ? (
                <span className="inline-block text-sm text-red-500 mt-1">
                  {errors.expMonth?.message}
                </span>
              ) : errors.expYear?.message ? (
                <span className="inline-block text-sm text-red-500 mt-1">
                  {errors.expYear?.message}
                </span>
              ) : null}
            </div>
            <div className="form-control">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                placeholder="e.g. 123"
                className={errors.cvc?.message ? "invalid" : null}
                {...register("cvc", {
                  required: true,
                  onChange: (e) =>
                    setCard((state) => ({
                      ...state,
                      [e.target.name]: e.target.value,
                    })),
                })}
              />
              {errors.cvc?.message && (
                <span className="inline-block text-sm text-red-500 mt-1">
                  {errors.cvc?.message}
                </span>
              )}
            </div>
          </div>
          <button type="sumbit" className="btn mt-4">
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};

export default CardDetailsForm;
