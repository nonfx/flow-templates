const fs = require("fs");
const path = require("path");

const imageFolderPath = path.join(__dirname, "../../assets/images"); // Adjust the path as needed
const imageListFilePath = "stories/structure/image-list.json"; // Adjust to your image list file path

// Get a list of existing images in the folder
const existingImages = fs.readdirSync(imageFolderPath);

// Read the current image list file if it exists
let imageList = { Patterns: [], Templates: [], Layouts: [] };

// Update the image list with existing images
existingImages.forEach(imageFile => {
	const imageName = path.basename(imageFile, path.extname(imageFile));
	// Add the new image's information to the image list array
	Object.entries(imageList).forEach(([key, value]) => {
		if (
			imageName.split("__")[0].toLowerCase().includes(key.toLowerCase()) &&
			!value.some(item => item.img === `images/${imageFile}`)
		) {
			value.push({ img: `images/${imageFile}`, title: imageName.split("__")[1] });
		}
	});
	console.log(`Added image ${imageFile} to the list.`);
});

// Write the updated image list back to the file
fs.writeFileSync(imageListFilePath, JSON.stringify(imageList, null, 2), "utf8");

console.log("Image list updated.");
