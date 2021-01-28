import axios from "axios";
import { createReadStream } from "fs";
import * as FormData from "form-data";
import { constants } from "../constants";

export const uploadHandler = async (path: string) => {
  try {
    let formData = new FormData();
    formData.append("title", "sample");
    formData.append("file", createReadStream(path));
    await axios.post(constants.SERVER_URL + "/file/upload", formData, {
      headers: formData.getHeaders(),
    });
  } catch (error) {
    console.log(error.message);
  }
};
