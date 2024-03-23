import { ChangeEvent, useState } from "react";

enum UploadState {
  IDLE = "IDLE",
  UPLOADING = "UPLOADING",
  UPLOADED = "UPLOADED",
}

// Ajoutez un type pour les props si vous avez besoin de passer d'autres propriétés
interface ImageUploadProps {
  onUpload: (url: string) => void; // Fonction de rappel pour transmettre l'URL de l'image téléversée
}

// Utilisez les props dans votre composant
const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [uploadState, setUploadState] = useState<UploadState>(UploadState.IDLE);
  const [imgUrl, setImgUrl] = useState<string>("");

  async function handleFormData(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) {
      return; // Early return si aucun fichier n'est sélectionné
    }
    setUploadState(UploadState.UPLOADING);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Erreur lors de l\'upload');
      }

      const data: { secure_url: string } = await res.json();
      setImgUrl(data.secure_url);
      setUploadState(UploadState.UPLOADED);
      onUpload(data.secure_url); // Appel de la fonction de rappel avec l'URL sécurisée
    } catch (error) {
      console.error(error);
      setUploadState(UploadState.IDLE); // Réinitialiser l'état en cas d'erreur
    }
  }

  return (
    <div className="flex justify-center items-center">
      {uploadState !== UploadState.UPLOADED ? (
        <div>
          <label
            htmlFor="image"
            className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            {uploadState === UploadState.UPLOADING ? "Uploading..." : "Upload Image"}
            <input
              type="file"
              name="file"
              id="image"
              className="hidden"
              onChange={handleFormData}
            />
          </label>
        </div>
      ) : (
        <div>
          <p className="text-green-500">Image Uploaded Successfully!</p>
          <img src={imgUrl} alt="Uploaded" style={{ width: "100%", marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
