import axios from "axios";
import { createReadStream, createWriteStream, promises as fsPromise } from "fs";
import { join } from "path";
import * as FormData from "form-data";
import { constants } from "../constants";
import { successWriter } from "../utilities/customLogger";

export const uploadHandler = async (
  title: string,
  currentPath: string,
  path: string
) => {
  try {
    let finalFilePath = await filePathGenerator(currentPath, path);
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

export const downloadHandler = async (title: string, currentPath: string) => {
  try {
    let { data } = await axios.get(
      constants.SERVER_URL + "/file/download?key=" + title
    );
    const response = await axios.get(data.url, { responseType: "stream" });
    const writer = createWriteStream(join(currentPath, data.originalName));
    response.data.pipe(writer);
    return new Promise((_) => {
      writer.on("finish", () => {
        console.log(
          successWriter(
            `Your file has been downloaded with the name ${data.originalName}`
          )
        );
        writer.close();
      });
      writer.on("error", () => {
        throw Error("Could not write file.");
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
