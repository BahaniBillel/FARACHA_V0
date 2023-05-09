import React from "react";
import { storage } from "../../firebase";
import { uploadBytesResumable } from "firebase/storage";

function Upload() {
  const uploadImagesToFirebase = async (imageFiles) => {
    try {
      const urls = [];

      // Upload each image to Firebase Storage and store the resulting URL in an array
      for (let i = 0; i < imageFiles.length; i++) {
        const imageFile = imageFiles[i];
        const imagePath = `images/productsImages/${imageFile.name}`;
        const storageRef = storage.ref();
        const imageRef = storageRef.child(imagePath);
        const snapshot = await imageRef.put(imageFile);
        const imageUrl = await snapshot.ref.getDownloadURL();
        urls.push(imageUrl);
      }

      // Store the array of image URLs in Firestore
      const collectionRef = firestore.collection("products");
      const docRef = await collectionRef.doc("yourDocumentId").update({
        images: urls,
      });
      console.log("Images uploaded and URLs stored in Firestore:", urls);
    } catch (error) {
      console.error("Error uploading images and storing URLs:", error);
    }
  };

  const [selectedImages, setSelectedImages] = React.useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setSelectedImages(imagesArray);
  };

  const handleUploadImages = () => {
    uploadImagesToFirebase(selectedImages);
    console.log("the images were uploaded");
  };

  return (
    <div className="">
      <div>
        <input type="file" multiple onChange={handleImageChange} />
        <button onClick={handleUploadImages}>Upload Images</button>
      </div>
    </div>
  );
}

export default Upload;
