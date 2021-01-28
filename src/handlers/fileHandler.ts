import axios from "axios";
import { createReadStream, promises as fsPromise } from "fs";
import { join } from "path";
import * as FormData from "form-data";
import { constants } from "../constants";

export const uploadHandler = async (
  title: string,
  currentPath: string,
  path: string
) => {
  try {
    let finalFilePath = await filePathGenerator(currentPath, path);
    console.log(finalFilePath);
    let formData = new FormData();
    formData.append("title", title);
    formData.append("file", createReadStream(finalFilePath));
    await axios.post(constants.SERVER_URL + "/file/upload", formData, {
      headers: formData.getHeaders(),
    });
  } catch (error) {
    console.log(error.message);
  }
};

const filePathGenerator = async (currentPath: string, path: string) => {
  try {
    await fsPromise.readFile(join(currentPath, path));
    return join(currentPath, path);
  } catch (_) {
    return path;
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
