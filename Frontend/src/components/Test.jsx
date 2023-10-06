import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "../config/firebase.config.js";
import  { useEffect, useState } from "react";



export function Test() {
  const [txt, setTxt] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);

 

  const handleUpload = (e) => {

    let fileData = e.target.files[0];
    console.log("fileData",fileData );
    const storageRef = ref(firebaseStorage, `/test/${fileData.name}`);

    uploadBytes(storageRef, fileData)
      .then((el) => {
        getDownloadURL(el.ref)
          .then((url) => {
            console.log(url );
          })
          .catch((e) => {
           console.log({erro:e})
          });
      })
      .catch((err) => {console.log({err})});
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleUpload(e)} />
      <br />
      <br />
    </div>
  );
}
