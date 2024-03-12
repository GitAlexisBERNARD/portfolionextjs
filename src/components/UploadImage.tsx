import { ChangeEvent, useState } from "react";

enum UploadState {
  IDLE = 1,
  UPLOADING = 2,
  UPLOADED = 3,
}

export default function Home() {
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
    } catch (error) {
      console.error(error);
      setUploadState(UploadState.IDLE); // Réinitialiser l'état en cas d'erreur
    }
  }

  return (
    <div className="flex justify-center h-screen items-center">
      {uploadState !== UploadState.UPLOADED ? (
        <div className="w-32">
          <label
            htmlFor="image"
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
          >
            {uploadState === UploadState.UPLOADING ? "Uploading..." : "Upload"}
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
        <div className="w-96 text-green-500">
          <span className="block py-2 px-3 text-green-500 text-center">
            Uploaded!
          </span>
          <img className="w-full" src={imgUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}
