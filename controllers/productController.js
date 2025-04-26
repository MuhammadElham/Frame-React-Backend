// function for Add product
// const addProduct = async (req, res) => {
//   try {

//     console.log("Files Received: " , req.files)

//     const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

//     // Issue
//     const image1 = req.files.image1 && req.files.image1[0];
//     const image2 = req.files.image2 && req.files.image2[0];
//     const image3 = req.files.image3 && req.files.image3[0];
//     const image4 = req.files.image4 && req.files.image4[0];

//     console.log(name, "\n", description, "\n", price, "\n", category, "\n", subCategory, "\n", sizes, "\n", bestseller);
//     console.log(image1, image2, image3, image4);

//     res.json({});
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };
const addProduct = async (req, res) => {
  try {
    console.log("Files Received: ", req.files);
    console.log("Body Received: ", req.body);

    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    const imageFiles = [];
    if (req.files.image1) imageFiles.push(req.files.image1[0].path);
    if (req.files.image2) imageFiles.push(req.files.image2[0].path);
    if (req.files.image3) imageFiles.push(req.files.image3[0].path);
    if (req.files.image4) imageFiles.push(req.files.image4[0].path);

    console.log("Images Path:", imageFiles);

    res.json({ success: true, message: "Product Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};




// function for List product
const listProduct = async (req, res) => {};

// function for Remove product
const removeProduct = async (req, res) => {};

// function for Single product Info
const singleProduct = async (req, res) => {};

export { addProduct, listProduct, removeProduct, singleProduct };
