import axios from "axios";
import { createReadStream, createWriteStream, promises as fsPromise } from "fs";
import { join } from "path";
import * as FormData from "form-data";
import { constants } from "../constants";
import { successWriter } from "../utilities/customLogger";
import { PapyrusLocalFile } from "../types/helper";

/**
 * Upload a file to the server.
 * @param {PapyrusLocalFile} localFile The local file object that contains the title and the path of the file as specified by the user
 * @param {string} currentPath The current working directory of the terminal (needed for path resolution)
 */
export const uploadHandler = async (
  localFile: PapyrusLocalFile,
  currentPath: string
): Promise<void> => {
  try {
    let finalFilePath = await filePathGenerator(currentPath, localFile.path);
    let formData = new FormData();
    formData.append("title", localFile.title);
    formData.append("file", createReadStream(finalFilePath));
    await axios.post(constants.SERVER_URL + "/file/upload", formData, {
      headers: formData.getHeaders(),
    });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Validate current path and custom path value and returns the right one.
 * This helper function allows the user to either specify just the file name (which is there in the current path) or provide the fully qualified file path name.
 * @param {string} currentPath The current working directory where the terminal is at present
 * @param {string} path The path name passed on by the user, which may or may not be the fully qualified path name
 * @returns {Promise<string>} A promise that resolves to the properly determined path
 */
const filePathGenerator = async (
  currentPath: string,
  path: string
): Promise<string> => {
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
