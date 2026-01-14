import React from 'react'

import { Award, ExternalLink } from "lucide-react";
const certifications = [
  {
    title: "HTML & CSS3 & javascript",
    issuer: "University of Michigan",
    category: "Web Development",
    link: "https://coursera.org/share/3b096897bee1e2dbb95d1441c572676f",
  },
  {
    title: "WordPress Development",
    issuer: "University of Michigan",
    category: "Web Development",
    link: "https://www.coursera.org/account/accomplishments/certificate/5WSQYFBX2SHJ",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud Computing",
    link: "https://learn.microsoft.com/en-us/users/rimshashahzadi-8872/achievements/dga53asj",
  },
  {
    title: "Python Programming",
    issuer: "Infosys",
    category: "Programming",
    link: "https://validate.onwingsspan.com",
  },
  {
    title: "SQL Fundamentals",
    issuer: "MindLuster",
    category: "Database",
    link: "https://www.mindluster.com/student/certificate/14906378119",
    link:"https://www.mindluster.com/student/certificate/14906371775",
  },
]

const Certification = () => {
  return (
      <section id="Certification" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-xl md:text-3xl font-bold leading-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">Certifications</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-4 w-4 text-slate-200" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground  transition-colors bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105  duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-white">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary text-white">
                  {cert.category}
                </span>
                <button
                  onClick={() => window.open(cert.link, '_blank')}
                  className="p-1 rounded hover:bg-slate-700/50 transition-colors cursor-pointer"
                  title="View certificate"
                >
                  <ExternalLink className="h-4 w-4 text-slate-400 opacity-20 group-hover:opacity-100 transition-opacity hover:text-blue-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification