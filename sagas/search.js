import axios from "axios";
import { put, call, select } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import { PERFORM_SEARCH, searchSuccess, searchError } from "../actions/search";
import keys from "../config/keys";

const { apiKey } = keys;

// state.search => return the entire branch called search ( search renducer)
const selectSearchState = state => state.search;

function* doSearch() {
  try {
    // call select function (saga function) to obtain the state associated with the branch take only the currentOffset for the pagination!!!.
    const { currentOffset, searchTerm } = yield select(selectSearchState);

    const searchResults = yield call(
      axios.get,
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          apiKey,
          q: searchTerm,
          limit: 50,
          offset: currentOffset
        }
      }
    );

    yield put(searchSuccess(searchResults.data.data));
  } catch (e) {
    yield put(searchError());
  }
}

export default function*() {
  yield takeLatest(PERFORM_SEARCH, doSearch);
}
