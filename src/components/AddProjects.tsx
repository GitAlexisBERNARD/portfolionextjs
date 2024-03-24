import React, { useState } from 'react';
import ImageUpload from '@/components/UploadImage'; // Assurez-vous que le chemin vers ImageUpload est correct

function UserForm() {
  // États pour chaque champ du formulaire
  const [nomPost, setNomPost] = useState('');
  const [introPost, setIntroPost] = useState('');
  const [technoPost, setTechnoPost] = useState('');
  const [date, setDate] = useState('');
  const [client, setClient] = useState('');
  const [imageURL, setImageURL] = useState(''); // URL de l'image téléversée

  const handleImageUpload = (url: string) => {
    setImageURL(url);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const postData = {
      nomPost,
      content: JSON.stringify({
        introPost,
        technoPost,
        date,
        client,
        imageURL,
      }),
    };
  
    try {
      const response = await fetch('/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de la soumission du formulaire");
      }
  
      const data = await response.json();
      console.log("Post créé avec succès:", data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom du projet:</label>
        <input
          type="text"
          value={nomPost}
          onChange={(e) => setNomPost(e.target.value)}
        />
      </div>
      <div>
        <label>Introduction du post:</label>
        <input
          type="text"
          value={introPost}
          onChange={(e) => setIntroPost(e.target.value)}
        />
      </div>
      <div>
        <label>Technologie du post:</label>
        <input
          type="text"
          value={technoPost}
          onChange={(e) => setTechnoPost(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Client:</label>
        <input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>
      <div>
        <ImageUpload onUpload={handleImageUpload} />
        {imageURL && <p>URL de l&apos;image: {imageURL}</p>}
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default UserForm;
