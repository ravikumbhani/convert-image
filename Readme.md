### **Convert Images**
Here’s a well-structured `README.md` file for your GitHub repository:

```markdown
# Image Compressor & WebP Converter

## 📌 Overview

This Node.js script recursively scans a directory for image files, compresses them, and converts them to **WebP format** using the [`sharp`](https://www.npmjs.com/package/sharp) library. It maintains the folder structure while saving optimized images in an output directory.

## 🚀 Features

- Recursively processes images inside subdirectories.
- Converts images to **WebP format**.
- Compresses images with **60% quality** (adjustable).
- Maintains the original folder structure.
- Uses asynchronous operations for efficiency.

## 🛠️ Requirements

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/image-compressor.git
   cd image-compressor
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## ⚙️ Usage

1. Place your images inside the `images/` folder.
2. Run the script:
   ```sh
   node index.js
   ```
3. The compressed images will be saved in the `output/` folder.

## 🔧 Configuration

- Modify `QUALITY` inside `index.js` to change the WebP compression level.
- Uncomment `.resize(50, 50)` if you want to resize images (currently disabled).

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
