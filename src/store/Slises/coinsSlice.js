import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const coinNames = [
  "Bitcoin",
  "Ethereum",
  "XRP",
  "Cardano",
  "Shiba-inu",
  "Cosmos",
  "EOS",
  "Fantom",
  "Mina",
  "Kava",
  "Tether",
  "NEM",
  "Aave",
  "Gala",
  "Binance USD",
  "Tezos",
];

const initialState = {
  coinsList: [],
  currentSendCoin: {},
  currentReceiveCoin: {},
  exchangeRate: "loading...",
  isMinAmountToBeExchanged: true,
  minAmount: 50,
};

export const getCoins = createAsyncThunk(
  "coinsList/getCoins",
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get("https://api.coincap.io/v2/assets");
    const list = result.data.data;
    const filteredList = list.filter((coin) => coinNames.includes(coin.name));
    dispatch(setCoins(filteredList));
    dispatch(setUrlForCoins());
    dispatch(setCurrentSendCoin());
    dispatch(setCurrentReceiveCoin());
    dispatch(setExchangeRate());
  }
);

export const CoinsSlice = createSlice({
  name: "coinsList",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coinsList = [...state.coinsList, ...action.payload];
    },
    setCurrentSendCoin: (state) => {
      const currentCoin = state.coinsList.filter(
        (coin) => coin.name === "Bitcoin"
      );
      state.currentSendCoin = currentCoin;
      state.minAmount = Number(50 / currentCoin[0].priceUsd).toFixed(6)
    },
    setUserSendCurrentCoin: (state, action) => {
      state.currentSendCoin[0] = action.payload;
    },
    setUrlForCoins: (state) => {
      state.coinsList = state.coinsList.map((coin) => {
        const coinName = coin.name;
        const url = `/images/${coinName}.png`;
        return {
          ...coin,
          url: url,
        };
      });
    },
    setAmountForSendCoin: (state, action) => {
      state.currentSendCoin[0].amount = action.payload;
      localStorage.setItem("sendAmount", action.payload)
      console.log(state.currentSendCoin);
      if (state.currentSendCoin[0].amount) {
        let receiveCalc = Number(
          (state.currentSendCoin[0].priceUsd *
            Number(state.currentSendCoin[0].amount)) /
            Number(state.currentReceiveCoin[0].priceUsd)
        );
        state.currentReceiveCoin[0].amount = receiveCalc;
        localStorage.setItem("receiveAmount", receiveCalc)
      }
      if (state.currentSendCoin[0].amount === "") {
        state.currentReceiveCoin[0].amount = "";
        localStorage.removeItem("receiveAmount")
        localStorage.removeItem("sendAmount")
      }
      console.log(state.currentSendCoin);
    },
    setCurrentReceiveCoin: (state) => {
      const currentCoin = state.coinsList.filter(
        (coin) => coin.name === "Tether"
      );
      state.currentReceiveCoin = currentCoin;
    },
    setUserReceiveCurrentCoin: (state, action) => {
      state.currentReceiveCoin[0] = action.payload;
      console.log(state.currentReceiveCoin[0].priceUsd);
    },
    setAmountForReceiveCoin: (state, action) => {
      state.currentReceiveCoin[0].amount = action.payload;
      localStorage.setItem("receiveAmount", action.payload)
      console.log(state.currentReceiveCoin);
      if (state.currentReceiveCoin[0].amount) {
        let sendCalc = Number(
          (state.currentReceiveCoin[0].priceUsd *
            Number(state.currentReceiveCoin[0].amount)) /
            Number(state.currentSendCoin[0].priceUsd)
        );
        state.currentSendCoin[0].amount = sendCalc;
        localStorage.setItem("sendAmount", sendCalc)
      }
      if (state.currentReceiveCoin[0].amount === "") {
        state.currentSendCoin[0].amount = "";
        localStorage.removeItem("receiveAmount")
        localStorage.removeItem("sendAmount")
      }
      console.log(state.currentSendCoin);
    },
    setClearAmount: (state) => {
      state.currentReceiveCoin[0].amount = "";
      state.currentSendCoin[0].amount = "";
    },
    setExchangeRate: (state) => {
      state.exchangeRate =
        Number(state.currentSendCoin[0].priceUsd) /
        Number(state.currentReceiveCoin[0].priceUsd);
    },
    setisMinAmountToBeExchanged: (state) => {
    if (Number(state.currentSendCoin[0].priceUsd) * Number(state.currentSendCoin[0].amount) < 50) {
    state.isMinAmountToBeExchanged = false;
    if (!state.currentSendCoin[0].amount) {
      state.isMinAmountToBeExchanged = false;
    }
  } else {
    state.isMinAmountToBeExchanged = true;
    localStorage.setItem("currentSendCoin", JSON.stringify(state.currentSendCoin[0]))
    localStorage.setItem("currentReceiveCoin", JSON.stringify(state.currentReceiveCoin[0]))
    if (!state.currentSendCoin[0].amount) {
      state.isMinAmountToBeExchanged = false;
    }
  }
  console.log(state.isMinAmountToBeExchanged);
},
setMinAmount: (state, action) => {
  state.minAmount = Number(50 / action.payload.priceUsd).toFixed(6)
}
  },
});

export const {
  setCoins,
  setCurrentSendCoin,
  setUrlForCoins,
  setAmountForSendCoin,
  setAmountForReceiveCoin,
  setCurrentReceiveCoin,
  setUserReceiveCurrentCoin,
  setUserSendCurrentCoin,
  setClearAmount,
  setExchangeRate,
  setisMinAmountToBeExchanged,
  setMinAmount,
} = CoinsSlice.actions;
export default CoinsSlice.reducer;
