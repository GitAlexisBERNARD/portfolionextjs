import React from 'react';
// @ts-ignore 
const SkillsList = ({ list }) => {
    const skillslist = list.split(', ');

    return (
        <div className="flex flex-wrap gap-4">
            {(skillslist as string[]).map((skill: string, index: number) => (
                <div key={index} className="border-white border py-3 px-6 rounded-xl uppercase font-ClashGroteskMedium">{skill}</div>
            ))}
        </div>
    );
  };

  export default SkillsList;