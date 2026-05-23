import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Scientist | Geospatial Analyst | Writer
            </h3>

            <p className="text-muted-foreground">
              I specialize in data analytics and science and geospatial analysis in applications in NLP, agentic applications, and climate hazard assessment.
            </p>

            <p className="text-muted-foreground">
            I'm passionate about the intersection of data science, AI, and geospatial technology 
            for the optimization of urban areas and human-centric processes. I'm a collaborative
            and curious individual, so I'm constantly learning and seeking like-minded individuals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/TaliaBerlerCV.pdf"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Science</h4>
                  <p className="text-muted-foreground">
                    Running evaluation of algorithms, building data pipelines, and creating visualizations to communicate insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Geospatial Analysis</h4>
                  <p className="text-muted-foreground">
                    Preparing and analyzing geospatial data, creating maps and visualizations, and applying spatial analysis techniques to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Writer</h4>
                  <p className="text-muted-foreground">
                    Generating data stories with interactive visualizations about climate change and urban issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};