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
// state.random => return the entire branch called random ( random renducer)
const selectRandomState = state => state.random;

function* getRandomGiphy() {
  // call select function (saga function) to obtain the state associated with the branch take only the currentOffset for the pagination!!!.
  const { currentOffset } = yield select(selectRandomState);

  try {
    const randomResult = yield call(
      axios.get,
      "https://api.giphy.com/v1/gifs/random",
      {
        params: {
          apiKey,
          limit: 50,
          offset: currentOffset
        }
      }
    );

    yield put(getRandomGiphySuccess(randomResult.data.data));
  } catch (e) {
    yield put(getRandomGiphyError());
  }
}

export default function*() {
  yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}
