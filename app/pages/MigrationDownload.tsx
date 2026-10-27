import { Download, FileJson, ShieldAlert } from "lucide-react";
import { Link } from "react-router";
import { FadeIn } from "../components/FadeIn";
import { Button } from "../components/ui/button";

const MANIFEST_PATH = "/sepco-static-content-migration-manifest.json";

export function MigrationDownload() {
  return (
    <div>
      <section className="dark bg-background pb-24 pt-32 text-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-foreground/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
                Temporary file access
              </span>
            </div>
            <div
              role="heading"
              aria-level={1}
              className="max-w-3xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-none md:text-7xl"
            >
              SEPCO content
              <br />
              migration manifest
            </div>
            <p className="mt-6 max-w-2xl leading-relaxed text-foreground/65">
              Download the validated JSON export prepared for mapping the existing
              production content to the WordPress CMS.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="border border-border bg-card p-8 text-card-foreground md:p-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex size-14 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                  <FileJson aria-hidden="true" className="size-7" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Validated JSON export
                  </p>
                  <div
                    role="heading"
                    aria-level={2}
                    className="mt-2 font-['Barlow_Condensed'] text-3xl font-extrabold uppercase text-foreground"
                  >
                    Complete migration manifest
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Includes 133 stable content records, structured article bodies,
                    ordered galleries, source paths, and verified hashes for all 84
                    referenced assets.
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
                    {[
                      ["Records", "133"],
                      ["Assets", "84"],
                      ["Format", "JSON"],
                      ["Size", "109 KB"],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-card p-4">
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                          {label}
                        </dt>
                        <dd className="mt-1 font-['Barlow_Condensed'] text-2xl font-bold text-foreground">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
                      <Link
                        to={MANIFEST_PATH}
                        download="sepco-static-content-migration-manifest.json"
                        reloadDocument
                      >
                        <Download aria-hidden="true" />
                        Download JSON
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-none uppercase tracking-wider">
                      <Link to="/">Return to website</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-start gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <ShieldAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                <p>
                  This is a temporary public download. Anyone with this page or file
                  URL can access it until the page and public asset are removed.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
