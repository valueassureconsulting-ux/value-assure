import { motion } from "motion/react"
import { Cog, Database, ArrowRightLeft, Building2, Quote, CheckCircle2 } from "lucide-react"

type Props = {}

const credentials = [
    {
        icon: Building2,
        headline: "Led SAP implementations across manufacturing and infrastructure sectors",
    },
    {
        icon: Cog,
        headline: "Mechanical engineering and manufacturing background",
    },
    {
        icon: Database,
        headline: "Deep expertise in SAP Data Quality and Migration Assurance",
    },
    {
        icon: ArrowRightLeft,
        headline: "Guiding organizations through data-critical transformation milestones",
    },
]

export default function Founder({ }: Props) {
    return (
        <section className="relative py-16 lg:py-28 bg-background">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-160 h-160 bg-primary/4 dark:bg-primary/3 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-0 lg:items-stretch overflow-hidden rounded-3xl border border-border shadow-xl dark:shadow-none">

                    <motion.div
                        initial={{ opacity: 0, scale: 1.04 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative min-h-80 lg:min-h-0"
                    >
                        <img
                            src="/founder.png"
                            alt="Founder"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/10 dark:to-black/30" />

                        <div className="absolute top-5 left-5">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/15">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                <span className="text-[10px] font-semibold tracking-widest uppercase text-white/80">
                                    Founder & Principal Consultant
                                </span>
                            </div>
                        </div>

                        <div className="absolute top-5 right-5">
                            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-primary/90 backdrop-blur-sm shadow-lg">
                                <span className="text-2xl font-extrabold text-primary-foreground leading-none tracking-tighter">25+</span>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-primary-foreground/70 mt-0.5">Yrs</span>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 px-7 pb-7 pt-16 bg-linear-to-t from-black/90 via-black/60 to-transparent">
                            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Value Assure Consulting</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                                Founder
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex flex-col justify-between bg-card p-8 sm:p-10 lg:p-12"
                    >
                        <div
                            className="absolute top-0 right-0 text-[10rem] font-extrabold leading-none select-none pointer-events-none tracking-tighter text-foreground/3 dark:text-foreground/4 pr-6 pt-2"
                        >
                            25
                        </div>

                        <div className="relative">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-6 h-px bg-primary" />
                                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                                    Founder Experience
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-snug mb-4">
                                25 Years of SAP Delivery.
                                <br />
                                <span className="text-muted-foreground font-medium">One Enduring Focus.</span>
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                                Built on a foundation of mechanical engineering and deep SAP expertise,
                                Value Assure was founded to close the gap between system capability and
                                the data quality organizations actually need.
                            </p>

                            <div className="space-y-4">
                                {credentials.map((cred, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-20px" }}
                                            transition={{
                                                duration: 0.45,
                                                delay: 0.3 + index * 0.08,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="flex items-start gap-3.5 group cursor-default"
                                        >
                                            <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-4.5 h-4.5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                            <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground leading-snug transition-colors duration-300">
                                                {cred.headline}
                                            </p>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="relative mt-10 pt-8 border-t border-border">
                            <Quote className="w-5 h-5 text-accent mb-3 opacity-70" />
                            <p className="text-base font-medium text-foreground/70 leading-relaxed italic">
                                "Sustainable data quality is not a project deliverable — it is an organizational capability."
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
                >
                    {[
                        { value: "25+", label: "Years SAP Experience" },
                        { value: "End-to-End", label: "Program Delivery" },
                        { value: "Tool + Advisory", label: "Integrated Model" },
                        { value: "Manufacturing", label: "Domain Depth" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center text-center rounded-2xl border border-border bg-card px-4 py-5 hover:border-primary/30 hover:bg-primary/3 transition-all duration-300 cursor-default"
                        >
                            <span className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight leading-none mb-1.5">
                                {stat.value}
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

