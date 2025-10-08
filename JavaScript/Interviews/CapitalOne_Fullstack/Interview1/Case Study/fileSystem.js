/**
map -> boolean
home/user/docs/	
home/user/images/
home/user/videos/
test.txt
test2.txt
/ 
 
*/
class StorageSystem {
  constructor(path = []) {
    this.storage = new Map(path);
  }

  #createResponse(success, data = null, error = null) {
    return { success, data, error };
  }

  #fileExists(path) {
    return this.storage.has(path);
  }

  #validDirFormat(path) {
    return path.endsWith("/") || path === "";
  }

  addFile(path) {
    if (this.storage.has(path))
      return this.#createResponse(false, null, `File already exits. ${path}`);

    this.storage.set(path, true);

    return this.#createResponse(true, path);
  }

  deleteFile(path) {
    if (!this.#fileExists(path))
      return this.#createResponse(
        false,
        null,
        `File does not exists at: ${path}`
      );

    this.storage.delete(path);
    return this.#createResponse(true, `Deleted file at: ${path}`);
  }

  copyFile(sourcePath, destinationPath) {
    const validateFile = this.#fileExists(sourcePath);
    console.log("Tesing Copyfile: ", validateFile);
    if (!validateFile)
      return this.#createResponse(
        false,
        null,
        `File doesnot exists. ${sourcePath}`
      );

    const validateDesLocation = this.#validDirFormat(destinationPath);
    if (!validateDesLocation)
      return this.#createResponse(
        false,
        null,
        `Invalid DesLocation: ${destinationPath}`
      );

    const fileName = sourcePath.split("/").pop();
    const newPath = `${destinationPath}${fileName}`;

    if (this.#fileExists(newPath))
      return this.#createResponse(
        false,
        null,
        `File already exists: ${newPath}`
      );
    this.storage.set(newPath, true);
    return this.#createResponse(true, `Copied: ${newPath}`);
  }

  //Rank	Directory	File Count
  // 1	home/user/images/	3
  // 2	home/user/docs/	2
  // 3	home/user/videos/	2
  // 4	/ (root)	2

  getDirctoryRank(rank) {
    const dirCounts = new Map();

    for (const path of this.storage.keys()) {
      const dir = path.includes("/")
        ? path.slice(0, path.lastIndexOf("/") + 1)
        : "/";
      dirCounts.set(dir, (dirCounts.get(dir) || 0) + 1);
    }

    const sorted = Array.from(dirCounts.entries()).sort((a, b) => b[1] - a[1]);
    // console.log("Sorted Array: ", sorted);

    const result = sorted[rank - 1];
    return result
      ? this.#createResponse(true, result[0])
      : this.#createResponse(false, null, "Rank out of bounds");
  }
}

// const fileSystem = new StorageSystem();
// console.log(fileSystem.addFile("home/demo.txt"));
// console.log(fileSystem.addFile("home/test/demo.txt"));
// console.log(fileSystem.addFile("home/test/newfolder/demoNewFolder.txt"));

// // console.log(fileSystem.deleteFile("home/dsdfe"));
// // console.log(fileSystem.deleteFile("home/test/demo.txt"));

// console.log("Copy file");
// console.log(fileSystem.copyFile("home/demo.txt", "home/test/newfolder/"));
// console.log(fileSystem.copyFile("home/demo.txt", "home/test/newfolder/"));
// // console.log(fileSystem.copyFile("home/demo.txt", "home/test/newfolder/sdf"));

// console.log(fileSystem);

const storage = new StorageSystem([
  ["home/user/docs/file1.txt", {}],
  ["home/user/docs/file2.txt", {}],
  ["home/user/images/img1.png", {}],
  ["home/user/images/img2.png", {}],
  ["home/user/images/img3.png", {}],
  ["home/user/videos/vid1.mp4", {}],
  ["home/user/videos/vid2.mp4", {}],
  ["rootfile.txt", {}], // This is a root file
  ["another_root.txt", {}], // Another root file
]);
console.log(storage.getDirctoryRank(2));
console.log(storage.getDirctoryRank(3));
console.log(storage.getDirctoryRank(33));
