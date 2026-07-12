import { Container } from "../common/container";
import { Socials } from "../personal/social-buttons";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#161515] light:bg-white border-t border-slate-300/20 shadow-lg opacity-95 px-4 py-10">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <div>
            <h1 className="text-sm text-secondary light:text-black">Connect with me.</h1>
            <Socials className="text-secondary" />
          </div>

          <div className="w-full border-t border-slate-300/30 pt-8">
            <p className="text-sm text-muted-foreground text-secondary light:text-black text-center sm:text-left">
              © 2026 Nishidh Singh. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
