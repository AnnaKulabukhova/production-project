import type { AsyncThunkAction } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { AxiosStatic } from 'axios';
import axios from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
  api: jest.Mocked<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg): Promise<any> {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
    return result;
  }
}
