import { useState, ChangeEvent, FormEvent } from 'react';
interface ProjectState {
  name: string;
  subtitle: string;
  technologies: string;
  link: string;
  images: string;
}

export default function ProjectForm() {
  const [project, setProject] = useState<ProjectState>({
    name: '',
    subtitle: '',
    technologies: '',
    link: '',
    images: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Convertir les technologies et images en tableau
    const dataToSend = {
      ...project,
      technologies: project.technologies.split(',').map(tech => tech.trim()),
      images: project.images.split(',').map(img => img.trim()),
    };
    
    try {
      console
      
      });
      if (response.ok) {
        console.log('Projet soumis avec succès');
        // Réinitialiser le formulaire ou gérer la soumission réussie
      } else {
        console.error('Erreur lors de la soumission du projet');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom du projet"
        value={project.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subtitle"
        placeholder="Sous-titre"
        value={project.subtitle}
        onChange={handleChange}
      />
      <input
        type="text"
        name="technologies"
        placeholder="Technologies (séparées par une virgule)"
        value={project.technologies}
        onChange={handleChange}
      />
      <input
        type="text"
        name="link"
        placeholder="Lien du projet"
        value={project.link}
        onChange={handleChange}
      />
      <input
        type="text"
        name="images"
        placeholder="URLs des images (séparées par une virgule)"
        value={project.images}
        onChange={handleChange}
      />
      <button type="submit">Soumettre le projet</button>
    </form>
  );
}
