import axios, { AxiosResponse } from "axios";
import { Child } from "../models/Child";

const groupId = "86413ecf-01a1-44da-ba73-1aeda212a196";
const institutionId = "dc4bd858-9e9c-4df7-9386-0d91e42280eb";
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export default class ChildrenService {
  getChildren = (): Promise<AxiosResponse<{ children: Child[] }>> => {
    return axios.get(`https://app.famly.co/api/daycare/tablet/group`, {
      params: {
        accessToken,
        groupId,
        institutionId,
      },
    });
  };

  checkInChildApi = (
    childId: string,
    pickupTime: string
  ): Promise<AxiosResponse<any, any>> => {
    return axios.post(
      `https://app.famly.co/api/v2/children/${childId}/checkins`,
      {
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        pickupTime,
      }
    );
  };

  checkOutChildApi = (childId: string): Promise<AxiosResponse<any, any>> => {
    return axios.post(
      `https://app.famly.co/api/v2/children/${childId}/checkout`,
      {
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      }
    );
  };
}
