import axios from "axios";
import { createReadStream } from "fs";
import * as FormData from "form-data";
import { constants } from "../constants";

export const uploadHandler = async (title: string, path: string) => {
  try {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("file", createReadStream(path));
    await axios.post(constants.SERVER_URL + "/file/upload", formData, {
      headers: formData.getHeaders(),
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const downloadHandler = async (title: string) => {
  try {
    let { data } = await axios.get(
      constants.SERVER_URL + "/file/download?key=" + title
    );
    return data.url;
  } catch (error) {
    console.log(error.message);
  }
};
