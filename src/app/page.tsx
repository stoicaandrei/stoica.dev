import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, X, Mail } from "lucide-react";

export default function Portfolio() {
  // Replace with your actual resume link
  const resumeLink =
    "https://drive.google.com/file/d/134pRZFewi-7vY_yOWN6TMR3icYms7ypx/view?usp=sharing";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground">
      <main className="max-w-3xl w-full flex flex-col items-center justify-center space-y-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          Andrei Stoica
        </h1>

        <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground">
          Fullstack React Engineer, Indie Hacker
        </h2>

        <p className="max-w-md text-muted-foreground">
          Building impactful digital experiences with modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg" className="font-medium">
            <Link href={resumeLink} target="_blank">
              Work with me
            </Link>
          </Button>

          <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <Link href="https://x.com/andrei_sstoica" target="_blank">
                <X className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/stoic-ndrei/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Email">
              <Link href="mailto:andrei@stoica.dev" target="_blank">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Andrei Stoica. All rights reserved.
      </footer>
    </div>
  );
}
