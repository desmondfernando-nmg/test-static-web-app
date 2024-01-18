import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchAll as apiFetchAll } from "./questionMappingAPI"
import Question from "../model/Question"

export interface QuestionMapping {
  Questions: Question[]
  Study: string
}

const initialState: QuestionMapping = {
  Questions: [],
  Study: "Test",
}

export const fetchAllQuestions =
  (study: string): AppThunk =>
  (dispatch) => {
    console.log("featchAllQuestions")
    apiFetchAll(study).then((value) => {
      console.log("featchAllQuestions ", study)
      dispatch(fetchAll(value.data))
    })
  }

export const questionMappingSlice = createSlice({
  name: "questionMapping",
  initialState,
  reducers: {
    fetchAll: (state, action: PayloadAction<Question[]>) => {
      state.Questions = action.payload
    },
  },
})

export const questionMappings = (state: RootState) => state.questionMapping
const { fetchAll } = questionMappingSlice.actions
export default questionMappingSlice.reducer
