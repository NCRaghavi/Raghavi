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
      name: "Sneha Patel",
      course: "UGC-NET (Commerce) Achiever",
      location: "Ahmedabad, Gujarat",
      image: "", // Placeholder
      text: "Cracking the UGC-NET was a dream, but Dr. Raghavi's specialized batches made it a reality. Her focus on research methodology and paper-1 strategies is unmatched.",
      stars: 5,
      category: "student"
    },
    {
      id: 2,
      name: "Rohan Shah",
      course: "CA Intermediate Student",
      location: "Rajkot, Gujarat",
      image: "", // Placeholder
      text: "The way Dr. Raghavi explains complex Costing and Accounting standards is phenomenal. Her Ph.D. background brings a level of depth that you just don't get in standard coaching.",
      stars: 5,
      category: "student"
    }
  ],
  scholars: [
    {
      id: 101,
      name: "Dr. Pragnesh Dalwadi",
      topic: "Assistant Professor, Government Arts and Commerce College",
      location: "Barwala, Botad, Gujarat, India",
      institution: "Alumni - School of Commerce, Gujarat University",
      image: "/images/testimonials/pragnesh.png",
      text: "Dr. Raghavi's mentorship during my Ph.D. was instrumental in shaping both my research perspective and academic discipline. Her constant encouragement and insightful guidance not only strengthened my work but also built the foundation of my professional journey.",
      stars: 5,
      category: "scholar"
    }
  ]
};
