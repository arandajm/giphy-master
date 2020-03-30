import keys from "../config/keys";
import axios from "axios";
import { put, call, select } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import {
  GET_RANDOM_GIPHY,
  getRandomGiphySuccess,
  getRandomGiphyError
} from "../actions/random";
const { apiKey } = keys;

function* getRandomGiphy() {
  try {
    const randomResult = yield call(
      axios.get,
      "https://api.giphy.com/v1/gifs/random",
      {
        params: {
          apiKey
        }
      }
    );

    // dispatch action in saga with put
    yield put(getRandomGiphySuccess(randomResult.data.data));
  } catch (e) {
    yield put(getRandomGiphyError());
  }
}

export default function*() {
  yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}
