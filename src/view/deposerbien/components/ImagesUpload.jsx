import React, { createRef, useState } from 'react';
import axios from 'axios';

function ImagesUpload() {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const authEndpoint = process.env.REACT_APP_AUTHENTICATION_ENDPOINT;

  const [imageUrl, setImageUrl] = useState('');

  const uploadRef = createRef();

  const triggerUpload = () => {
    uploadRef.current.click();
  };

  const handleUpload = async (e) => {
    const token = await axios.get(authEndpoint);
    console.log(token);

    const formData = new FormData();

    formData.append('file', e.target.files[0]);
    formData.append('publicKey', publicKey);
    formData.append('fileName', e.target.files[0].name);
    formData.append('signature', token.data.signature);
    formData.append('expire', token.data.expire);
    formData.append('token', token.data.token);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const response = await axios.post(
      'https://upload.imagekit.io/api/v1/files/upload',
      formData,
      config
    );

    setImageUrl(response.data.url);
  };

  return (
    <div>
      <button onClick={triggerUpload}>Mon Button</button>{' '}
      {/* custom element to change ! */}
      <input
        style={{ display: 'none' }}
        ref={uploadRef}
        type="file"
        onChange={handleUpload}
      />
      {imageUrl && <img src={imageUrl} alt="" />}
    </div>
  );
}

export default ImagesUpload;
