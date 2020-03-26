import axios from "axios";
import { put, call } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import {
  SEARCH_PERFORMED,
  searchSuccess,
  searchError
} from "../actions/search";
import keys from "../config/keys";

const { apiKey } = keys;

function* doSearch({ searchTerm }) {
  try {
    const searchResults = yield call(
      axios.get,
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          apiKey,
          q: searchTerm,
          limit: 50
        }
      }
    );

    yield put(searchSuccess(searchResults.data.data));
  } catch (e) {
    yield put(searchError(searchResults.data.data));
  }
}

export default function*() {
  yield takeLatest(SEARCH_PERFORMED, doSearch);
}
