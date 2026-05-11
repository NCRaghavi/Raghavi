/**
 * Master Testimonials List for Raghavi Academy
 * 
 * Categories:
 * 1. "students": Testimonials from teaching and coaching students (CA, NET, etc.)
 * 2. "scholars": Testimonials from Ph.D. scholars and research mentees.
 */

export const testimonialsData = {
  students: [
    {
      id: 1,
      name: "Dr. Pankaj Sharma",
      topic: "Assistant Professor (Commerce)",
      college: "Shri K K Shastri Government Commerce College",
      location: "Ahmedabad, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/pankaj.png",
      text: "Dr. Raghavi's classes gave me more than just conceptual clarity. They shaped how I think, learn, and carry myself professionally. Her disciplined approach, professionalism, and engaging teaching style left a deep and lasting impact on me. Beyond the classroom, her guidance in research helped me take my very first meaningful steps into the academic world and understand what true inquiry means. Even today, those learnings continue to guide me in my journey as a teacher and researcher.",
      stars: 5,
      category: "student"
    },
    {
      id: 2,
      name: "Bhanwari Kumari",
      topic: "Assistant Manager",
      college: "The New India Assurance Company Limited",
      location: "Vadodara, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/bhawari.png", 
      text: "Dr. Raghavi's teaching has played a very significant role in building my conceptual clarity and confidence. The way she explained Financial markets especially money market and capital markets made a strong and lasting impact on my learning. Her in-depth knowledge of the subject and your dedication to ensuring that her students truly understand and learn have always been inspiring. The lessons and guidance I received from her have greatly supported me in shaping my career, and I remain truly grateful for your wonderful sessions.",
      stars: 5,
      category: "student"
    },
    {
      id: 3,
      name: "Urvi Raval",
      topic: "CEO, MAVERICK HOLDINGS",
      college: "Wealth Management Company",
      location: "Ahmedabad, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/urvi.png",
      text: "Dr. Raghavi's calm presence and measured guidance have always stood out, yet it was during our most overwhelming moments that she truly saved us. Her quiet strength and unwavering support meant more than she knows. Thank you for being our anchor when we needed it the most.",
      stars: 5,
      category: "student"
    },
    {
      id: 4,
      name: "Dr. Vishakha Modi",
      topic: "Assistant Professor",
      college: "Govt. Arts, Commerce & Science College, Kachhal",
      location: "Surat, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/vishakha.png",
      photoStyle: { transform: 'scale(1.35)', objectPosition: 'center 20%' },
      text: "I still recall our sessions at the School of Commerce, Gujarat University with great respect and gratitude. Dr. Raghavi's teaching played a significant role in building my conceptual clarity and confidence in the field of Commerce. She not only taught us the subject but also encouraged us to think critically and apply concepts to real-life situations. The practical insights and engaging classroom discussions truly helped shape my professional approach. I am grateful for the strong foundation she provided during my academic journey.",
      stars: 5,
      category: "student"
    },
    {
      id: 5,
      name: "Dr. Anuja Limbad",
      topic: "Assistant Professor",
      college: "Trainer & Financial Advisor",
      location: "Gujarat, India",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/anujalimbad.jpeg",
      text: "I’m deeply grateful to Raghavi mam for playing a pivotal role in shaping my career. Her ability to simplify complex concepts and build a strong foundational understanding has given me lasting confidence in my field. The clarity and discipline I developed under her guidance will always continue to influence my professional growth.",
      stars: 5,
      category: "student"
    },
    {
      id: 6,
      name: "Harshini Dudhani",
      topic: "Owner, The Batter Bae",
      college: "Gluten-free cakes & cookies",
      location: "Gandhidham | Adipur",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/harshini.jpeg",
      photoStyle: { objectPosition: 'center 10%', transform: 'scale(1.1)' },
      text: "Dr. Raghvi’s sessions at Sheth Damodardas School pf Commerce, Gujarat University gave me a strong foundation in Commerce that shaped how I think about running a business today. Her emphasis on practical application over rote learning pushed me to approach problems with clarity and confidence. That mindset has been central to building The Batter Bae, my gluten-free baking brand, from the ground up.",
      stars: 5,
      category: "student"
    }
  ],
  scholars: [
    {
      id: 101,
      name: "Dr. Pragnesh Dalwadi",
      topic: "Assistant Professor",
      college: "Government Arts and Commerce College",
      location: "Barwala, Botad, Gujarat, India",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/pragnesh.png",
      text: "Dr. Raghavi's mentorship during my Ph.D. was instrumental in shaping both my research perspective and academic discipline. Her constant encouragement and insightful guidance not only strengthened my work but also built the foundation of my professional journey.",
      stars: 5,
      category: "scholar"
    },
    {
      id: 102,
      name: "Dr. Pankaj Sharma",
      topic: "Assistant Professor (Commerce)",
      college: "Shri K K Shastri Government Commerce College",
      location: "Ahmedabad, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/pankaj.png",
      text: "Dr. Raghavi's classes gave me more than just conceptual clarity. They shaped how I think, learn, and carry myself professionally. Her disciplined approach, professionalism, and engaging teaching style left a deep and lasting impact on me. Beyond the classroom, her guidance in research helped me take my very first meaningful steps into the academic world and understand what true inquiry means. Even today, those learnings continue to guide me in my journey as a teacher and researcher.",
      stars: 5,
      category: "scholar"
    },
    {
      id: 103,
      name: "Dr. Sushil M. Parmar",
      topic: "Assistant Professor & PhD Guide",
      college: "MSU Baroda (Faculty of Commerce)",
      location: "Vadodara, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/sushil.png", 
      text: "I acknowledge and appreciate the valuable assistance of Dr. Raghavi during my PhD programme. She noteworthily contributed to the progress of my doctoral work in terms of consistent academic and research support. She demonstrated professionalism, analytical competence, and a sincere commitment to research helping me to achieve the milestone. Her timely assistance and constructive inputs were appreciable and supported the successful completion of my PhD.",
      stars: 5,
      category: "scholar"
    },
    {
      id: 104,
      name: "Dr. Sakina Merchant",
      topic: "Assistant Professor",
      college: "Som Lalit College of Commerce",
      location: "Ahmedabad, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "", 
      text: "Dr. Raghavi was a senior JRF during my Ph.D. under Dr. Bharti Pathak at the School of Commerce. (2017-2021). Her patient guidance, especially during my first research paper presentation and publication, helped me understand the nuances of academic research with clarity and confidence. I appreciate her deep commitment to research and academics. I sincerely wish her continued success in all her endeavours.",
      stars: 5,
      category: "scholar"
    },
    {
      id: 105,
      name: "Dr. Komal Raval",
      topic: "Assistant Professor",
      college: "Som-Lalit College of Commerce",
      location: "Ahmedabad, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/komalraval.png",
      text: "Dr. Raghavi's support during my Ph.D. truly made a big difference in my journey. Her guidance during my Ph.D. was instrumental in shaping my academic and professional journey. Her constant encouragement, insightful feedback, and unwavering support helped me develop confidence and clarity in my research work, which continues to influence my career today.",
      stars: 5,
      category: "scholar"
    },
    {
      id: 106,
      name: "Dr. Aamena Saiyed",
      topic: "Research Colleague & Scholar",
      college: "School of Commerce, Gujarat University",
      location: "Ahmedabad, Gujarat",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/aamena.jpeg",
      text: "Dr. Raghavi’s strong academic insight and research acumen made her a remarkable colleague during my PhD years. The resources and perspectives she shared contributed meaningfully to my scholarly development. I truly value the professional camaraderie we shared.",
      stars: 5,
      category: "scholar"
    },
    {
      id: 107,
      name: "Dr. Rupam Soni",
      topic: "Assistant Professor",
      college: "Government of Rajasthan (Vidhya Sambal Scheme)",
      location: "Rajasthan, India",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/rupam.jpeg",
      text: "Dr. Raghavi's mentorship throughout my doctoral studies was foundational to my growth. The clarity and confidence I gained through her insightful feedback and steady support remain the cornerstone of my professional practice today.",
      stars: 5,
      category: "scholar"
    }
  ]
};
