import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IJob {
  jobVacancyCode: string;
  positionName: string;
  corporateId: string;
  corporateName: string;
  status: string;
  descriptions: string;
  corporateLogo: string;
  applied: boolean;
  workModel?: { id: string; text: string };
  salaryFrom: number;
  salaryTo: number;
  postedDate: string;
}

type TJobState = {
  isLoading: boolean;
  data: Array<IJob>;
};

const initialState: TJobState = {
  isLoading: false,
  data: [],
};

export const job = createSlice({
  name: "job",
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<TJobState["data"]>) => {
      return {
        ...state,
        data: payload,
      };
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
    submitJob: (state, { payload }: PayloadAction<string>) => {
      const newData = state.data.map((job) =>
        job.jobVacancyCode === payload
          ? {
              ...job,
              applied: true,
            }
          : job
      );

      sessionStorage.setItem("temp-job", JSON.stringify(newData));
      return {
        ...state,
        data: newData,
      };
    },
    withdrawJob: (state, { payload }: PayloadAction<string>) => {
      const newData = state.data.map((job) =>
        job.jobVacancyCode === payload
          ? {
              ...job,
              applied: false,
            }
          : job
      );

      sessionStorage.setItem("temp-job", JSON.stringify(newData));
      return {
        ...state,
        data: newData,
      };
    },
  },
});

export const { setData, setIsLoading, submitJob, withdrawJob } = job.actions;
export default job.reducer;
