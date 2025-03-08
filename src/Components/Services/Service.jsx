// import React from 'react';
// import htmlImg from '../../assets/html.png';
// import cssImg from '../../assets/css.png';
// import jsImg from '../../assets/js.png';
// import reactImg from '../../assets/react.png';
// import tailwindImg from '../../assets/tailwind.png';
// import gitImg from '../../assets/git.png';
// import soundEngineerImg from '../../assets/soundEngineer.png';
// import fashionDesignerImg from '../../assets/fashionDesigner.png';
// import filmEditorImg from '../../assets/filmEditor.png';
// import audioEditorImg from '../../assets/audioEditor.png';

// const Service = () => {
//     const categories = [
//         {
//             title: "Category 1",
//             items: [
//                 { name: "HTML", img: htmlImg },
//                 { name: "CSS", img: cssImg },
//                 { name: "JavaScript", img: jsImg },
//                 { name: "React", img: reactImg },
//                 { name: "Tailwind", img: tailwindImg },
//                 { name: "Git", img: gitImg }
//             ]
//         },
//         {
//             title: "Category 2",
//             items: [
//                 { name: "Sound Engineer", img: soundEngineerImg },
//                 { name: "Fashion Designer", img: fashionDesignerImg },
//                 { name: "Film Editor", img: filmEditorImg },
//                 { name: "Audio Editor", img: audioEditorImg }
//             ]
//         }
//     ];

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-4">Services</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {categories.map((category, index) => (
//                     <div key={index} className="border p-4 rounded-lg bg-gray-800">
//                         <h3 className="text-xl font-semibold text-green-300 mb-2">{category.title}</h3>
//                         <div className="grid grid-cols-2 gap-4">
//                             {category.items.map((item, idx) => (
//                                 <div key={idx} className="text-center">
//                                     <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-2" />
//                                     <p className="text-green-300">{item.name}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Service;



import React from 'react';

const Service = () => {
    const categories = [
        {
            title: "Category 1",
            items: [
                { name: "HTML", img: "https://via.placeholder.com/150" },
                { name: "CSS", img: "https://via.placeholder.com/150" },
                { name: "JavaScript", img: "https://via.placeholder.com/150" },
                { name: "React", img: "https://via.placeholder.com/150" },
                { name: "Tailwind", img: "https://via.placeholder.com/150" },
                { name: "Git", img: "https://via.placeholder.com/150" }
            ]
        },
        {
            title: "Category 2",
            items: [
                { name: "Sound Engineer", img: "https://via.placeholder.com/150" },
                { name: "Fashion Designer", img: "https://via.placeholder.com/150" },
                { name: "Film Editor", img: "https://via.placeholder.com/150" },
                { name: "Audio Editor", img: "https://via.placeholder.com/150" }
            ]
        }
    ];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                    <div key={index} className="border p-4 rounded-lg bg-gray-800">
                        <h3 className="text-xl font-semibold text-green-300 mb-2">{category.title}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {category.items.map((item, idx) => (
                                <div key={idx} className="text-center">
                                    <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                                    <p className="text-green-300">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;