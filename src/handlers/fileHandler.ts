import { promises } from "fs";

export const uploadHandler = async (path: string) => {
  try {
    await promises.readFile(path);
  } catch (error) {
    console.log(error.message);
  }
};
