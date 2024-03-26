import React, { useState } from 'react';
import ImageUpload from '@/components/UploadImage'; // Assurez-vous que le chemin vers ImageUpload est correct

function UserForm() {
  // États pour chaque champ du formulaire
  const [nomPost, setNomPost] = useState('');
  const [introPost, setIntroPost] = useState('');
  const [needs, setneeds] = useState('');
  const [technoPost, setTechnoPost] = useState('');
  const [date, setDate] = useState('');
  const [client, setClient] = useState('');
  const [imageURL, setImageURL] = useState(''); 
  const [skills, setskills] = useState(''); 
  const [lienprojet, setLienprojet] = useState('');
  const [imagepost, setimagepost] = useState('');

  const handleImageUpload = (url: string) => {
    setImageURL(url);
  };
  const handlesetimagepost = (url: string) => {
    setimagepost(url);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const postData = {
      nomPost,
      content: JSON.stringify({
        introPost,
        needs,
        skills,
        technoPost,
        date,
        client,
        imageURL,
        lienprojet,
        imagepost,
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 mb-8 p-4 border-1 border-white shadow-md rounded-[12.58px]">
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="nomPost">Nom du projet:</label>
        <input
          id="nomPost"
          type="text"
          value={nomPost}
          onChange={(e) => setNomPost(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-transparent rounded-[12.58px] leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="introPost">Introduction du post:</label>
        <input
          id="introPost"
          type="text"
          value={introPost}
          onChange={(e) => setIntroPost(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent rounded-[12.58px]"
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="introPost">Les attentes du projets:</label>
        <input
          id="introPost"
          type="text"
          value={needs}
          onChange={(e) => setneeds(e.target.value)}
          className="font-ClashGroteskLight shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent rounded-[12.58px]"
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="introPost">Les competences utilises:</label>
        <input
          id="introPost"
          type="text"
          value={skills}
          onChange={(e) => setskills(e.target.value)}
          className="font-ClashGroteskLight shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent rounded-[12.58px]"
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="technoPost">Technologie du post:</label>
        <input
          id="technoPost"
          type="text"
          value={technoPost}
          onChange={(e) => setTechnoPost(e.target.value)}
          className="font-ClashGroteskLight shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent rounded-[12.58px]"
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="font-ClashGroteskLight shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent rounded-[12.58px]"
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="client">Client:</label>
        <input
          id="client"
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="font-ClashGroteskLight shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent rounded-[12.58px]"
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="client">Lien vers le projet:</label>
        <input
          id="client"
          type="text"
          value={lienprojet}
          onChange={(e) => setLienprojet(e.target.value)}
          className="font-ClashGroteskLight shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent rounded-[12.58px]" 
        />
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="image">Image:</label>
        <ImageUpload onUpload={handleImageUpload} />
        {imageURL && <p>URL de l&apos;image: {imageURL}</p>}
      </div>
      <div className="mb-4">
        <label className="font-ClashGroteskLight block text-white text-sm font-bold mb-2" htmlFor="imagepost">Image pour le post:</label>
        <ImageUpload onUpload={handlesetimagepost} />
        {imagepost && <p>URL de l&apos;image pour le post: {imagepost}</p>}
      </div>
      <button type="submit" className="font-ClashGroteskLight bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Soumettre</button>
    </form>
    
  );
}

export default UserForm;
