import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface crendentialsProps {
  name: string;
}

const initialState: crendentialsProps = {
  name: "Kenneth",
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    sampleReduxSlice: (
      state: crendentialsProps,
      action: PayloadAction<Partial<crendentialsProps>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetSampleRedux: () => {
      return initialState;
    },
  },
});

export const { sampleReduxSlice, resetSampleRedux } = sampleSlice.actions;
export default sampleSlice.reducer;
