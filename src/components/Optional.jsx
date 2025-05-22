'use client'

import Image from 'next/image'
import data from '../../data/info.json'

export default function OptionalSection() {
  return (
    <section id="optional" className="py-15 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Beyond <span className="text-primary">Code</span>
        </h2>

        {/* Hobbies */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Hobbies</h3>
          <ul className="list-disc ml-6 space-y-2 text-base text-foreground">
            {data.hobbies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Goals */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Goals</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {data.goals}
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Achievements</h3>
          <ul className="list-disc ml-6 space-y-2 text-base text-foreground">
            {data.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Certificate */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Certificate</h3>
          <div className="bg-card p-6 rounded-lg shadow-md mb-8">
            <h4 className="text-xl font-semibold text-foreground mb-2">
              {data.certificate.title}
            </h4>
            <p className="text-base text-muted-foreground leading-relaxed">
              {data.certificate.description}
            </p>
          </div>
          <div className="relative w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`/certificate/${data.certificate.image}`}
              alt="Certificate"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
