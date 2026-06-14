import fs from "node:fs";

export const read_work_exp = () => {
  try {
    const buffer = fs.readFileSync("./data/work/exp.json", "utf-8");
    return JSON.parse(buffer);
  } catch (Err) {
    console.log("Unable to fetch the experience");
    return null;
  }
};
