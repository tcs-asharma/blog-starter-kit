import fs from "fs"
import path from  "path";
 
export default async function handler(req, res) {
  
  try {
 
    const filePath = path.resolve('.next', 'build-manifest.json');
    const buffer = fs.readFileSync(filePath);
    const response = buffer;
    const json = JSON.parse(buffer.toString());
    res.status(200).json(json.pages['/']);
  } catch (error) {
    res
    .status(error.response?.status || '500')
    .json({ message: error });
  }
}
