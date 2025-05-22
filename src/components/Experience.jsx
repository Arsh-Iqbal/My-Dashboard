
'use client'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 px-4 bg-secondary/30"> 
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span> & Experience
        </h2>

        <div className="mb-16 space-y-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold">BCA – Chandigarh University 2022-2025</p>
            <p className="text-sm text-muted-foreground mb-2">CGPA: 8.68</p>
            <p className="text-base">Class 12th – DAV Public School</p>
            <p className="text-base">Class 10th – DAV Public School</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Internship</h3>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-1">Full Stack Development</h4>
            <p className="text-sm text-muted-foreground mb-1">
              Dilkash Ridwan Peshimam | Mumbai, Virtual
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Internship • Jan 2025 - Feb 2025 (1 month)
            </p>
            <ul className="list-disc ml-5 space-y-2 text-base text-foreground">
              <li>Developed a full stack school portal with real-time messaging, live classes (Google Meet API integration), and CRUD operations (homework, lesson plans, user data).</li>
              <li>Implemented JWT authentication for secure user access and API protection.</li>
              <li>Built scalable APIs with Node.js/Express.js and managed databases using MongoDB.</li>
              <li>Designed responsive UI with React and Tailwind CSS.</li>
              <li>Used Redux and Context API for robust state management.</li>
              <li>Conducted comprehensive testing, debugging, and optimization.</li>
              <li>Collaborated with team members to meet goals and deadlines.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
