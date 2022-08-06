import { CURRENCY } from "../ActionType";

const initialState = {
  currency_Name_rd: {
    currency_Code: "IN",
    currency_Logo: "₹",
    currency_Logo_Img: 25,
    currency_Name: "INR",
    // currency_Footer_img: "footer-bg2.png",
    id: 1,
  },
};

const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY:
      return Object.assign({}, state, {
        currency_Name_rd: action.payload,
      });

    default:
      return state;
  }
};

export default CurrencyReducer;
