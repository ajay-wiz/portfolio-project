import { useState } from "react";
import axios from "axios";

function ProfilePhoto() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  const [file, setFile] = useState(null);

  const upload = () => {

  if (!file) {
    alert("Please select image first");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  axios.post(
    `http://localhost:8080/user/upload/${user.id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  )
  .then(res => {

    localStorage.setItem(
      "user",
      JSON.stringify(res.data)
    );
    window.location.reload();
  })
  .catch(err=>{
    console.log(err);
    alert("Upload Failed");
  });
};

  return (
    <div>
      <h5>Upload Profile Photo</h5>

      <input
        type="file"
        className="form-control mb-2"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button
        className="btn btn-dark w-100"
        onClick={upload}
      >
        Upload
      </button>
    </div>
  );
}

export default ProfilePhoto;